from .models import ApproverTemplate,  Approver
import smtplib
from email.mime.text import MIMEText


def send_email_to_approvers(approverIDs: list, templateID: int):
    for approverID in approverIDs:
        # check if Approver is allowed to approve this template
        approver = Approver.objects.filter(id=approverID)
        assert(approver.exists())
        approver = approver.first()
        if ApproverTemplate.objects.filter(approverID=approverID, templateID=templateID).exists():
            link = f"http://localhost:3000/filled-template?approver={approver.hashed_email}&templateID={templateID}"
            send_email_to_approvers_helper(approver.name, approver.email, link)
        else:
            print(f"{approver.email} does not have permission to approve template {templateID}.")


def send_email_to_approvers_helper(receiver_name: str, receiver_email: str, link: str):
    """
    Sends email using smtp over brevo
    """
    sender_email = 'processordoc@gmail.com'
    sender_password = 'TD14OkKwmNSx0pE3'

    message = MIMEText(
        f"Hi {receiver_name}, \nClick the link to see the Assessment:\n{link}")
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'Requested Assessment Approval'

    try:
        server = smtplib.SMTP('smtp-relay.brevo.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        server.quit()
        print(f"Email sent to {receiver_email}")
    except smtplib.SMTPException as e:
        print("Error sending email:", e)
