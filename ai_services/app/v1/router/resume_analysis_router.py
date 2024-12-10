# ai_services/app/v1/router/resume_analysis.py

from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import Optional
from pydantic import BaseModel, HttpUrl
import tempfile
from app.v1.services.resume_analysis.resume_extraction import ResumeExtractor


router = APIRouter()


class ResumeResponse(BaseModel):
    extracted_text: str
    file_type: str


class ResumeUrlRequest(BaseModel):
    url: HttpUrl


# Initialize the extractor once
resume_extractor = ResumeExtractor()


@router.post("/extract-from-url", response_model=ResumeResponse)
async def extract_from_url(request: ResumeUrlRequest):
    """
    Extract content from a resume URL (supports PDF, DOCX, and images)
    """
    try:
        extracted_text, file_type = resume_extractor.extract_from_url(str(request.url))
        return ResumeResponse(extracted_text=extracted_text, file_type=file_type)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/extract-from-file", response_model=ResumeResponse)
async def extract_from_file(file: UploadFile = File(...)):
    """
    Extract content from an uploaded resume file (supports PDF, DOCX, and images)
    """
    allowed_types = {
        "application/pdf": "pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "application/msword": "doc",
        "image/jpeg": "jpg",
        "image/png": "png",
    }

    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid file type. Supported types are: {', '.join(allowed_types.values())}",
        )

    try:
        content = await file.read()
        file_type = allowed_types[file.content_type]
        extracted_text = resume_extractor.extract_from_bytes(content, file_type)

        return ResumeResponse(extracted_text=extracted_text, file_type=file_type)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
