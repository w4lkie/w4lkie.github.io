document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true
  });

  const greeting = "Here's all about ";
  const name = "The Next Big Thing";
  const typewriterElement = document.getElementById("typewriter");
  const nameTextElement = document.getElementById("name-text");
  const nameContainer = document.getElementById("name-container");
  
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < greeting.length) {
      typewriterElement.textContent += greeting.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      nameContainer.style.opacity = "1";
      let nameIndex = 0;
      function typeName() {
        if (nameIndex < name.length) {
          nameTextElement.textContent += name.charAt(nameIndex);
          nameIndex++;
          setTimeout(typeName, 100);
        }
      }
      typeName();
    }
  }

  setTimeout(typeWriter, 500);
});
