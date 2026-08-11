from fastapi import FastAPI
from app.services.email_service import send_email
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello, World!"}

@app.post("/send_email")
def emailer(receiver_email: str, subject: str, content: str):
    result =send_email(receiver_email, subject, content)
    if result:
        return {"message": "Email sent successfully!"}
    else:
        return {"message": "Email failed to send."}

    
    