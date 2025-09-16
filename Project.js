const buttons = document.querySelectorAll('.topic-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    // show/hide toggle
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
