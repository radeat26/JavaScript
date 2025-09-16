document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".topic-btn");
  const topics = document.querySelectorAll(".topic");
  const searchInput = document.getElementById("search");

  
  topics.forEach(topic => {
    topic.querySelector(".topic-content").style.display = "none";
  });

  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;

      
      topics.forEach(t => {
        const c = t.querySelector(".topic-content");
        if (c !== content) c.style.display = "none";
      });

      
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase().trim();

    topics.forEach(topic => {
      const title = topic.querySelector(".topic-btn").textContent.toLowerCase();
      const contentText = topic.querySelector(".topic-content").textContent.toLowerCase();
      const fullText = title + " " + contentText;

      if (fullText.includes(term)) {
        topic.style.display = "block";  
      } else {
        topic.style.display = "none";   
      }
    });
  });
});
