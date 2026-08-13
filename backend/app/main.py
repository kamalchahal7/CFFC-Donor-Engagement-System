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

@app.post("/send_newsletter")
def newsletter(receiver_email: str):
    subject = "Our latest newsletter"
    with open("app/templates/newsletter.html", "r") as file:
        content = file.read()
    result = send_email(receiver_email, subject, content)
    if result:
        return {"message": "Newsletter sent successfully!"}
    else:
        return {"message": "Newsletter failed to send."}

    
    