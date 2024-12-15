FROM python:3.8-slim
WORKDIR /app
COPY ai_services/requirements.txt ./
RUN pip install -r requirements.txt
COPY ai_services/. .
EXPOSE 8000

ENV GOOGLE_APPLICATION_CREDENTIALS=/app/equirightsai-d60b7efc3b73.json

# Use ENTRYPOINT and CMD together to run both commands
CMD ["uvicorn", "app.v1.main:app", "--host", "0.0.0.0", "--port", "8000"]