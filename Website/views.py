from django.shortcuts import render
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from .email import send_request
from django.template.loader import render_to_string

def home(request):       
    return render(request, "home.html")

def contact(request):       
    if request.method == "POST":
        email = request.POST.get('email')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        interest = request.POST.get('interest')
        message = request.POST.get('message')
        fullname = firstname.title() + " " + lastname.title()
        
        send_mail("LornA EMAIL", message, email, [settings.EMAIL_HOST_USER], fail_silently=False)
        email_template = render_to_string('confirmation.html', {'name': fullname})
        email = EmailMessage(
            'Thank you for contacting Wanjiru Kamau',
            email_template,
            settings.EMAIL_HOST_USER,
            [email],        
        )
        email.fail_silently = False
        email.send()
    return render(request, "contact.html")


def about(request):       
    return render(request, "about.html")
   