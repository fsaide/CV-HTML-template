document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const header = section.querySelector("h2");
        const content = section.querySelector(".content");

        header.addEventListener("click", () => {
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";
        });
    });
});
