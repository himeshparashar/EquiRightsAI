from fastapi import FastAPI
from app.v1.routers import resume_analysis, policy_analysis, discrimination_reporting

app = FastAPI(
    title="EquiRightsAI API",
    version="1.0.0",
    description="API for EquiRightsAI services",
)

# Include routers
app.include_router(
    resume_analysis.router, prefix="/api/v1/resume-analysis", tags=["Resume Analysis"]
)
app.include_router(
    policy_analysis.router, prefix="/api/v1/policy-analysis", tags=["Policy Analysis"]
)
app.include_router(
    discrimination_reporting.router,
    prefix="/api/v1/reporting",
    tags=["Discrimination Reporting"],
)
