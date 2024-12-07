# ai_services/app/services/reporting_service.py

import uuid
from app.v1.models.request_models import DiscriminationReportRequest
from app.v1.models.response_models import DiscriminationReportResponse

# In-memory storage for the prototype
reports_db = {}


async def submit_report(
    report: DiscriminationReportRequest,
) -> DiscriminationReportResponse:
    report_id = str(uuid.uuid4())
    reports_db[report_id] = report.dict()
    return DiscriminationReportResponse(
        report_id=report_id,
        status="Submitted",
        message="Your report has been submitted successfully.",
    )
