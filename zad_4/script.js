let isGreen = true;

function changeTheme() {
    const body = document.getElementById("body");

    if (isGreen) {
        body.classList.remove("green");
        body.classList.add("red");
    } else {
        body.classList.remove("red");
        body.classList.add("green");
    }

    isGreen = !isGreen;
}

function toggleSkills() {
    const section = document.getElementById("skills");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}