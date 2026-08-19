from fastapi import FastAPI
from app.services.email_service import send_email, content, subscriber_list
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello, World!"}

@app.post("/send_email")
def emailer(receiver_email: str, subject: str, content: str):
    result = send_email(receiver_email, subject, content)
    if result:
        return {"message": "Email sent successfully!"}
    else:
        return {"message": "Email failed to send."}

@app.post("/send_newsletter")
def newsletter(receiver_email: str):
    subject = "Our latest newsletter"
    content = content()
    result = send_email(receiver_email, subject, content)
    if result:
        return {"message": "Newsletter sent successfully!"}
    else:
        return {"message": "Newsletter failed to send."}

@app.post("/send_newsletter_all")
def newsletter_service():
    subject = "CFFC: Latest Newsletter"
    emails = subscriber_list()
    html_content = content()
    results = []
    for email in emails:
        results.append(send_email(email, subject, html_content))
    if results:
        return {"message": "All newsletters sent successfully!"}
    else:
        return {"message": "Some or all newsletters failed to send."}
       
    
    
    