# ai_services/app/v1/routers/policy_analysis.py

from fastapi import APIRouter, UploadFile, File, HTTPException
from app.v1.models.response_models import PolicyAnalysisResponse
from app.services.policy_analysis_service import analyze_policy_file

router = APIRouter()


@router.post("/", response_model=PolicyAnalysisResponse)
async def analyze_policy_endpoint(file: UploadFile = File(...)):
    """
    Analyze policies to detect biases.
    """
    if file.content_type not in ["application/pdf", "text/plain"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid file format. Only PDF and TXT are supported.",
        )

    content = await file.read()
    result = await analyze_policy_file(content, file.filename)
    return result
