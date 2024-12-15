from docx import Document
from fastapi import HTTPException
import requests
from io import BytesIO
from google.cloud import vision
from google.oauth2 import service_account
import os
import tempfile
from typing import Union, BinaryIO


class ResumeExtractor:
    def __init__(self):
        self._setup_vision_client()

    def _setup_vision_client(self):
        """Initialize Google Cloud Vision client with credentials."""
        try:
            credentials_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
            if credentials_path and os.path.exists(credentials_path):
                credentials = service_account.Credentials.from_service_account_file(
                    credentials_path,
                    scopes=["https://www.googleapis.com/auth/cloud-vision"],
                )
                self.vision_client = vision.ImageAnnotatorClient(
                    credentials=credentials
                )
            else:
                self.vision_client = vision.ImageAnnotatorClient()
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Failed to initialize Google Cloud Vision: {str(e)}",
            )

    def extract_from_bytes(self, content: bytes, file_type: str) -> str:
        """Extract text from bytes based on file type."""
        try:
            if file_type == "pdf":
                return self._extract_from_pdf(content)
            elif file_type in ["doc", "docx"]:
                return self._extract_from_docx(content)
            elif file_type in ["jpg", "jpeg", "png"]:
                return self._extract_from_image(content)
            else:
                raise HTTPException(
                    status_code=400, detail=f"Unsupported file type: {file_type}"
                )
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Error extracting text: {str(e)}"
            )

    def _extract_from_pdf(self, content: bytes) -> str:
        """Extract text from PDF content."""
        import fitz  # PyMuPDF

        try:
            pdf = fitz.open(stream=content, filetype="pdf")
            text = ""
            for page in pdf:
                text += page.get_text()
            return text
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Error processing PDF: {str(e)}"
            )

    def _extract_from_docx(self, content: bytes) -> str:
        """Extract text from DOCX content."""
        try:
            doc = Document(BytesIO(content))
            return "\n".join([para.text for para in doc.paragraphs])
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Error processing DOCX: {str(e)}"
            )

    def _extract_from_image(self, content: bytes) -> str:
        """Extract text from image using Google Cloud Vision."""
        try:
            image = vision.Image(content=content)
            response = self.vision_client.text_detection(image=image)

            if response.error.message:
                raise Exception(response.error.message)

            texts = response.text_annotations
            if not texts:
                return ""

            return texts[0].description.lower()
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"Error processing image: {str(e)}"
            )
