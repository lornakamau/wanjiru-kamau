from django.shortcuts import render
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from .email import send_request
def home(request):       
    return render(request, "home.html")

def contact(request):       
    # val = request.POST['firstname']
    if request.method == "POST":
        email = request.POST.get('email')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        interest = request.POST.get('interest')
        message = request.POST.get('message')
        fullname = firstname.title() + " " + lastname.title()
        
        send_mail("LornA EMAIL", message, email, [settings.EMAIL_HOST_USER], fail_silently=False)
        # return render(request, 'contact.html', {'recepient': fullname})
        # email_template = render_to_string('email/confirmation.html', {'name': name})
        # email = EmailMessage(
        #     'Thank you for contacting Wanjiru Kamau',
        #     email_template,
        #     settings.EMAIL_HOST_USER,
        #     [sender_email],        
        # )
        # email.fail_silently = False
        # email.send()
        print(email, fullname, interest, message)
    return render(request, "contact.html")
