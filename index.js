function startQuiz(quizType) {
    alert(`Starting ${quizType.charAt(0).toUpperCase() + quizType.slice(1)} Quiz!`);
    
    // Redirecting to the corresponding quiz page based on the selected type
    window.location.href = `${quizType}-quiz.html`; // Assumes pages are named quiz-java.html, quiz-python.html, etc.
}

/*
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        alert('You are downloading the PDF: ' + e.target.innerText);
    });
});
*/


// Function to open a PDF in a new tab
function openPDF(pdfPath) {
    window.open(pdfPath, "_blank");
}

// Function to download a PDF
function downloadPDF(pdfPath) {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop(); // Extracts file name from path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
