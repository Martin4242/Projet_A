# backend/Dockerfile

FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

# Exposer le port 8000 pour le serveur Django
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
