document.querySelector("#change-color-btn").addEventListener("click", function() {
    let random = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    document.querySelector(".color-name2").innerText = random;
    document.body.style.backgroundColor = random;
    console.log(random)
    document.querySelector(".im-here2").style.color = random
    document.querySelector(".color-name2").style.color = random
})
