document.addEventListener('DOMContentLoaded', function () {
  AOS.init();

  const greeting = 'Hello my name is ';
  const name = 'Brian Walker';
  const typewriterElement = document.getElementById('typewriter');
  const nameTextElement = document.getElementById('name-text');
  const nameContainer = document.getElementById('name-container');
  let i = 0;
  let j = 0;
  let isTypingName = false;

  function type() {
    if (!isTypingName) {
      if (i < greeting.length) {
        typewriterElement.textContent += greeting.charAt(i);
        i++;
        setTimeout(type, 100);
      } else {
        isTypingName = true;
        nameContainer.style.opacity = '1';
        setTimeout(type, 200);
      }
    } else {
      if (j < name.length) {
        nameTextElement.textContent += name.charAt(j);
        j++;
        setTimeout(type, 100);
      }
    }
  }

  setTimeout(type, 500);
});
