alert("Do you want to change the second line of the website?");

const courseLine = document.getElementById("Student");

courseLine.addEventListener("click", function () {
    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        let fontSize = prompt("Enter font size (numbers only, e.g. 20, 30, 40):");

        fontSize = Number(fontSize);

        if (!isNaN(fontSize) && fontSize > 0) {
            courseLine.style.fontSize = fontSize + "px";
        } else {
            alert("Invalid font size. Using default size 45px.");
            courseLine.style.fontSize = "45px";
        }

        courseLine.style.fontWeight = "bold";

    } else {
        alert("No changes made.");
    }
});
