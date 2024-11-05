// YOUR CODE HERE
//1 
document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById('output1').style.color = "red";
});

document.getElementById("btn2").addEventListener("click", function () {
    const span = document.createElement("span");
    span.textContent = "Hello World";
    document.getElementById('output2').appendChild(span);
});

document.getElementById("btn3").addEventListener("click",
    function () {
        document.getElementById('output3').style.display = "none";
    });

document.getElementById("btn4").addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("#output4 p");
    paragraphs.forEach(element => {
        element.style.color = "red";
    });
});

document.getElementById("btn5").addEventListener("click", function () {
    const inputValue = document.getElementById('message').value;
    console.log(inputValue);
});