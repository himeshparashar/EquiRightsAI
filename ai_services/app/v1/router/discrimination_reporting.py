# ai_services/app/v1/routers/discrimination_reporting.py

from fastapi import APIRouter
from app.v1.models.request_models import DiscriminationReportRequest
from app.v1.models.response_models import DiscriminationReportResponse
from app.services.reporting_service import submit_report

router = APIRouter()


@router.post("/", response_model=DiscriminationReportResponse)
async def submit_report_endpoint(report: DiscriminationReportRequest):
    """
    Submit a discrimination report.
    """
    result = await submit_report(report)
    return result
