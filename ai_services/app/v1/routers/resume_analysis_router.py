# ai_services/app/v1/router/resume_analysis.py

from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import Optional
from pydantic import BaseModel
from app.v1.services.resume_analysis.resume_extraction import ResumeExtractor
from app.v1.services.resume_analysis.resume_analysis_service import analyze_resume

router = APIRouter()


class ResumeAnalysisResponse(BaseModel):
    extracted_text: str
    file_type: str
    anonymized_text: Optional[str] = None
    skills: Optional[list[str]] = None
    summary: Optional[str] = None


# Initialize the extractor once
resume_extractor = ResumeExtractor()


@router.post("/upload-resume/", response_model=ResumeAnalysisResponse)
async def upload_resume(
    file: UploadFile = File(...), job_id: str = Form(...), anonymize: bool = Form(...)
):
    """
    Upload and analyze a resume file with optional anonymization
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
        # Read file content
        content = await file.read()
        file_type = allowed_types[file.content_type]

        # Extract text from the file
        extracted_text = resume_extractor.extract_from_bytes(content, file_type)

        # If anonymization is requested, perform full analysis
        if anonymize:
            analysis_result = await analyze_resume(
                extracted_text=extracted_text, job_id=job_id
            )
            return ResumeAnalysisResponse(
                extracted_text=extracted_text,
                file_type=file_type,
                anonymized_text=analysis_result.anonymized_resume,
                skills=analysis_result.skills,
                summary=analysis_result.summary,
            )

        # If no anonymization requested, return just the extracted text
        return ResumeAnalysisResponse(
            extracted_text=extracted_text, file_type=file_type
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
