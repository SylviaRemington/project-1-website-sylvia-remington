// document.addEventListener("DOMContentLoaded", () => {
//     // Select all nav links
//     const navLinks = document.querySelectorAll(".navigation-bar a");


//     navLinks.forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent default navigation
//             const pageName = link.textContent.trim(); // Get link text
//             if (pages[pageName]) {
//                 window.open(pages[pageName], "_blank"); // Open in a new tab