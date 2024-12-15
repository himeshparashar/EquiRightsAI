import vertexai
from vertexai.generative_models import GenerativeModel
import os
import json
from app.v1.utils.text_processing import anonymize_text
from app.v1.models.response_models import (
    PolicyAnalysisResponse,
    BiasResponse,
    ClarityResponse,
)

# Initialize Vertex AI
vertexai.init(project=os.getenv("PROJECT_ID"), location="us-central1")
model = GenerativeModel("gemini-1.5-flash-002")


async def analyze_policy_file(content: bytes, filename: str) -> PolicyAnalysisResponse:
    """
    Analyze policy document for potential biases and issues.

    Args:
        content: Raw bytes of the policy file
        filename: Name of the uploaded file

    Returns:
        PolicyAnalysisResponse containing analysis results
    """
    # Convert bytes to text
    try:
        text_content = content.decode("utf-8")
    except UnicodeDecodeError:
        raise ValueError("Invalid file format. Only text files are supported.")

    # Anonymize the text
    anonymized_text = anonymize_text(text_content)

    # Create prompts with explicit JSON schema instructions
    bias_prompt = f"""Analyze this policy document for potential biases and discriminatory language.
    Return the analysis in the following JSON format:
    {{
        "biases_found": ["list of biases"],
        "severity_level": "low/medium/high",
        "recommendations": ["list of recommendations"],
        "overall_assessment": "summary of findings"
    }}
    
    Policy text:
    {anonymized_text}
    """

    clarity_prompt = f"""Analyze this policy document for clarity and accessibility.
    Return the analysis in the following JSON format:
    {{
        "readability_score": 0.0,
        "complex_terms": ["list of complex terms"],
        "suggestions": ["list of suggestions"],
        "overall_assessment": "summary of clarity analysis"
    }}
    
    Policy text:
    {anonymized_text}
    """

    try:
        # Run analyses
        bias_response = await model.ainvoke(bias_prompt)
        clarity_response = await model.ainvoke(clarity_prompt)

        # Parse responses using Pydantic models
        bias_analysis = BiasResponse.parse_raw(bias_response.text)
        clarity_analysis = ClarityResponse.parse_raw(clarity_response.text)

        return PolicyAnalysisResponse(
            filename=filename,
            bias_analysis=bias_analysis,
            clarity_analysis=clarity_analysis,
            anonymized_text=anonymized_text,
        )

    except Exception as e:
        raise ValueError(f"Error analyzing policy: {str(e)}")
