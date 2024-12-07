# ai_services/app/services/resume_analysis_service.py

from app.utils.file_processing import extract_text
from app.utils.text_processing import anonymize_text, extract_skills, summarize_text
from app.v1.models.response_models import ResumeAnalysisResponse


async def analyze_resume_file(content: bytes, filename: str) -> ResumeAnalysisResponse:
    text = extract_text(content, filename)
    anonymized_text = anonymize_text(text)
    skills = extract_skills(anonymized_text)
    summary = summarize_text(anonymized_text)

    return ResumeAnalysisResponse(
        anonymized_resume=anonymized_text, skills=skills, summary=summary
    )
