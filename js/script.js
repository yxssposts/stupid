document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll(".project-btn");
  
    links.forEach(link => {
      link.setAttribute("target", "_blank");
    });
  
    console.log("Project buttons will now open in new tabs.");
  });
