import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

api_key = os.getenv("SENDGRID_API_KEY")
email = os.getenv("FROM_EMAIL")

def send_email(receiver_email: str, subject: str, content: str):
    message = Mail(
        from_email=email,
        to_emails=receiver_email,
        subject=subject,
        html_content=content)

    try:
        sg=SendGridAPIClient(api_key)
        response=sg.send(message)
        print(response.status_code)
        return response.status_code
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e)
        print(e.body if hasattr(e, 'body') else "No body")
        return None