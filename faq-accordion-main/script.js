const accordionHead = document.getElementById('box');
accordionHead.addEventListener( "click", () => {

displayValue = getComputedStyle(accordionBody).display
console.log(displayValue);
if  (displayValue === "none") {
accordionBody.style.display = "block"; }
else {
 accordionBody.style.display = "none"
}
})

const accordionBody = document.getElementById('hidden-box');

