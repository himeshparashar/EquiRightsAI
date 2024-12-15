from pydantic import BaseModel
from typing import List, Optional


class BiasResponse(BaseModel):
    """Model for bias analysis results"""

    biases_found: List[str]
    severity_level: str
    recommendations: List[str]
    overall_assessment: str


class ClarityResponse(BaseModel):
    """Model for clarity analysis results"""

    readability_score: float
    complex_terms: List[str]
    suggestions: List[str]
    overall_assessment: str


class PolicyAnalysisResponse(BaseModel):
    """Model for complete policy analysis response"""

    filename: str
    bias_analysis: BiasResponse
    clarity_analysis: ClarityResponse
    anonymized_text: str
