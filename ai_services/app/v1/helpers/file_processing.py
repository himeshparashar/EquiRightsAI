# ai_services/app/utils/file_processing.py

import io
from pdfminer.high_level import extract_text as pdf_extract_text


def extract_text(content: bytes, filename: str) -> str:
    if filename.endswith(".pdf"):
        return pdf_extract_text(io.BytesIO(content))
    elif filename.endswith(".txt"):
        return content.decode("utf-8")
    else:
        return ""
