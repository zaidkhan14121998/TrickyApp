var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var para = document.getElementById("para");
var container = document.getElementById("container")

noBtn.addEventListener("click", position);

function position(){
var x = Math.ceil(Math.random()*100);
var y = Math.ceil(Math.random()*92);
noBtn.style.right = x;
noBtn.style.bottom = y;
}

yesBtn.onclick = function(){
para.style.color = "white"
para.style.marginTop = 90;
para.innerHTML = "I knew it ! <span>&#128513;</span>";

container.removeChild(noBtn)
container.removeChild(yesBtn)

}
