# ai_services/app/services/policy_analysis_service.py

from app.utils.file_processing import extract_text
from app.utils.text_processing import detect_biases
from app.v1.models.response_models import PolicyAnalysisResponse


async def analyze_policy_file(content: bytes, filename: str) -> PolicyAnalysisResponse:
    text = extract_text(content, filename)
    biases, suggestions = detect_biases(text)
    return PolicyAnalysisResponse(
        bias_detected=bool(biases), biased_phrases=biases, suggestions=suggestions
    )
