var inp = document.getElementById("mji1")
var inp1 = document.getElementById("mji2")
var inp2 = document.getElementById("mji3")
var inp3 = document.getElementById("mji") 
var radio = document.querySelector("input[type=radio]:checked");
var valu = radio.value;
function register(){
    console.log(inp.value);
    console.log(inp1.value);
    console.log(inp2.value);
    console.log(inp3.value);
    console.log(valu);
}