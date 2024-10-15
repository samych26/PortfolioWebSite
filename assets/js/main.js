/***********CONTACT FORM*************/ 
document.addEventListener('DOMContentLoaded', function() {
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Please fill in all fields';
    } else {
        emailjs.sendForm(
            'service_k2cuomh',   // Replace with your service ID from EmailJS
            'template_ecu4ue4',  // Replace with your template ID from EmailJS
            '#contact-form',      // The form ID to capture the form fields
            '4cIJSsFLljKsZzE3e'        // Replace with your EmailJS public key/user ID
        )
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent successfully';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('Something went wrong, please try again', error);
        });
    }
}

contactForm.addEventListener('submit', sendEmail);
});




document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
      });
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    }
  });





  document.addEventListener('DOMContentLoaded', () => {
    // Ajout de la classe fade-in au body
    document.body.classList.add('fade-in');
  
    // Code existant pour la navigation
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
      });
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    }
  });





  