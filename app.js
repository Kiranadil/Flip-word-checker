function checkPali() {
    let word = document.querySelector("#input").value;
    let length = word.length;

    let reverse = "";
    for (let i = length - 1; i >= 0; i--) {
        reverse = reverse + word.charAt(i);
    }
    if (word == reverse) {
        // console.log(" palindrome");
        let element1=document.querySelector('span').innerHTML="Oh yes, the word is a PALINDROME";
    } else {
        // console.log("Oh! no it is not a PALINDROME word");
        document.querySelector('span').innerHTML ="Oh no, it is not a PALINDROME";
    }
}
