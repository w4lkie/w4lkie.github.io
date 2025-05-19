document.addEventListener('DOMContentLoaded', function () {
  AOS.init();

  const greeting = "Let's ";
  const header = "Connect";
  const typewriterElement = document.getElementById("typewriter");
  const headerTextElement = document.getElementById("header-text");
  const contactHeader = document.getElementById("contact-header");

  let i = 0;
  let j = 0;
  let isTypingHeader = false;

  function type() {
    if (!isTypingHeader) {
      if (i < greeting.length) {
        typewriterElement.textContent += greeting.charAt(i);
        i++;
        setTimeout(type, 100);
      } else {
        isTypingHeader = true;
        contactHeader.style.opacity = "1";
        setTimeout(type, 200);
      }
    } else {
      if (j < header.length) {
        headerTextElement.textContent += header.charAt(j);
        j++;
        setTimeout(type, 150);
      }
    }
  }

  setTimeout(type, 500);

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.classList.remove('hidden', 'text-error');
          formStatus.classList.add('text-success');
          form.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        formStatus.textContent = 'Oops! There was a problem sending your message.';
        formStatus.classList.remove('hidden', 'text-success');
        formStatus.classList.add('text-error');
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
        formStatus.classList.remove('hidden');

        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      });
  });
});
