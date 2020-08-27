const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click", function(){
    const cost = document.querySelector("input");
    let tip = (cost.value*0.15).toFixed(2);
    output.innerHTML = `<h1>Diner should tip $${tip} to the Waiter on current bill of $${cost.value}.</h1>`;
    
})