from typing import List
import os
import vertexai
from vertexai.generative_models import GenerativeModel


vertexai.init(project=os.getenv("PROJECT_ID"), location="us-central1")

model = GenerativeModel("gemini-1.5-flash-002")


def anonymize_text(text: str) -> str:
    """
    Anonymize the input text by removing personal information using Gemini AI.
    """
    prompt = f"""Please anonymize the following text by removing or replacing any personal identifying information 
    like names, phone numbers, emails, addresses etc. while preserving the overall meaning:
    
    {text}"""

    response = model.generate_content(prompt)
    return response.text


def extract_skills(text: str) -> List[str]:
    """
    Extract skills from the input text using Gemini AI.
    """
    prompt = f"""Please extract a list of professional skills from the following text. 
    Return only the skills as a comma-separated list:
    
    {text}"""

    response = model.generate_content(prompt)
    skills = [skill.strip() for skill in response.text.split(",")]
    return skills


def summarize_text(text: str) -> str:
    """
    Generate a concise summary of the input text using Gemini AI.
    """
    prompt = f"""Please provide a brief professional summary of the following text in 2-3 sentences:
    
    {text}"""

    response = model.generate_content(prompt)
    return response.text
