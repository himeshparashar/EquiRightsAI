# ai_services/app/v1/routers/resume_analysis.py

from fastapi import APIRouter, UploadFile, File, HTTPException
from app.v1.models.response_models import ResumeAnalysisResponse
from app.services.resume_analysis_service import analyze_resume_file

router = APIRouter()


@router.post("/", response_model=ResumeAnalysisResponse)
async def analyze_resume_endpoint(file: UploadFile = File(...)):
    """
    Analyze resumes for bias-free evaluation.
    """
    if file.content_type not in ["application/pdf", "text/plain"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid file format. Only PDF and TXT are supported.",
        )

    content = await file.read()
    result = await analyze_resume_file(content, file.filename)
    return result
