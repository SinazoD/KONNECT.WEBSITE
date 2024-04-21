let availableKeywords = ["Javascript", "Web Development"];

const resultBox = document.querySelector(".resultbox");
const inputBox = document.getElementById("inputbox");
const searchBtn = document.getElementsByTagName("button");
const currentUrl = window.location.href;

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultBox.innerHTML = "";
    }
}

function display(result) {
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" +list+ "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "<ul/>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
    if (inputBox.value == "Web Development") {
        console.log(currentUrl);
        let urlStart = currentUrl.substring(0, currentUrl.lastIndexOf('/'));    
        let newTabUrl = urlStart.toString() + "/about.html"
        window.open(newTabUrl)
        };
}
