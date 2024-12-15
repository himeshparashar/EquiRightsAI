from fastapi import FastAPI
from app.v1.routers import policy_analysis_router
from app.v1.routers import resume_analysis_router
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="EquiRightsAI API",
    version="1.0.0",
    description="API for EquiRightsAI services",
)
load_dotenv()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(
    resume_analysis_router.router,
    prefix="/api/v1/resume-analysis",
    tags=["Resume Analysis"],
)
app.include_router(
    policy_analysis_router.router,
    prefix="/api/v1/policy-analysis",
    tags=["Policy Analysis"],
)
# app.include_router(
#     discrimination_reporting.router,
#     prefix="/api/v1/reporting",
#     tags=["Discrimination Reporting"],
# )
