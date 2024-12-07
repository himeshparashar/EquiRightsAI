FROM python:3.8-slim
WORKDIR /app
COPY ai_services/requirements.txt ./
RUN pip install -r requirements.txt
COPY ai_services/. .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]