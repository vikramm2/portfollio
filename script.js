const resumeButton = document.getElementById("resume-button");

resumeButton.addEventListener("click", function() {
  const confirmation = confirm("Download your resume?");
  if (confirmation) {
    // Use a relative path for portability:
    window.location.href = "/Users/vikrammangat/Desktop/portfollio/sources/resume-1695163891725.pdf";
  }
});


