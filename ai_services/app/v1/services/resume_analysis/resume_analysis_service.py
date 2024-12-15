# ai_services/app/services/resume_analysis_service.py

from pydantic import BaseModel
from typing import List
from app.v1.utils.text_processing import anonymize_text, extract_skills, summarize_text


class ResumeAnalysisResult(BaseModel):
    anonymized_resume: str
    skills: List[str]
    summary: str


async def analyze_resume(extracted_text: str, job_id: str) -> ResumeAnalysisResult:
    """
    Analyze the extracted text from a resume
    """
    # Anonymize the text
    anonymized_text = anonymize_text(extracted_text)

    # Extract skills
    skills = extract_skills(anonymized_text)

    # Generate summary
    summary = summarize_text(anonymized_text)

    return ResumeAnalysisResult(
        anonymized_resume=anonymized_text, skills=skills, summary=summary
    )
