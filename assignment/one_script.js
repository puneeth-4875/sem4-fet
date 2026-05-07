alert("Welcome to Puneeth Kumar Jain's Website!");

const heading = document.querySelector("h1");
const subHeading = document.querySelector("h2");
const paragraph = document.querySelectorAll("p");

// Change second line when clicked
subHeading.addEventListener("click", function () {

    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {

        subHeading.textContent = newText;

        // Ask for font size
        let fontSize = prompt("Enter font size (only numbers like 20, 30):");

        fontSize = Number(fontSize);

        if (!isNaN(fontSize) && fontSize > 0) {
            subHeading.style.fontSize = fontSize + "px";
        } else {
            alert("Invalid size! using default size 45px.");
            subHeading.style.fontSize = "45px";
        }

        subHeading.style.color = "darkblue";
        subHeading.style.fontWeight = "bold";

    } else {
        alert("No changes made.");
    }
});

// Change background color when main heading is clicked
heading.addEventListener("click", function () {

    let bgColor = prompt("Enter a background color:");

    if (bgColor !== null && bgColor.trim() !== "") {
        document.body.style.backgroundColor = bgColor;
    }
});

// Change paragraph color on mouse over
paragraph.forEach(function (para) {

    para.addEventListener("mouseover", function () {
        para.style.color = "red";
    });

    para.addEventListener("mouseout", function () {
        para.style.color = "#333333";
    });

});
