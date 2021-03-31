let colorName, backGround, goTo

document.querySelector("#change-color-btn").addEventListener("click", function() {
    let backgroundColors = [
        "rgba(133,122,200)",
        "red",
        "green",
        "#F15025",
    ];
    colorName = document.querySelector(".color-name");
    imHere = document.querySelector(".im-here")
    let random = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    document.querySelector(".color-name").innerText = random;
    backGround = document.querySelector(".content");
    document.body.style.backgroundColor = random
    colorName.style.color = random
    imHere.style.color = random
})
