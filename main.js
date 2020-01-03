let IL = document.getElementById("myIL");
let CL = document.getElementById("myCL");
function AddItem(e) {
 if(document.getElementById("input1").value == "")
 {
   alert("write something...");
 
 }else{
   let button = document.createElement("button");
   let input = document.getElementById("input1").value;
   let uncompleteList = document.getElementById("myIL");
   let li = document.createElement("li");
   let p = document.createElement("p");
   p.innerText=input;
   button.innerHTML="&#10003;";
   uncompleteList.appendChild(li);
   li.appendChild(p);
   li.appendChild(button);
   button.addEventListener('click',incompleteList);
   input1.value = "";

 }
   
}
function incompleteList(){
 let button = document.createElement("button");
 button.addEventListener('click',completeList);
 CL.appendChild(this.parentElement);
 this.parentElement.appendChild(button);
 button.innerHTML="&#10003;";
 this.parentElement.childNodes[1].remove();
}
function completeList(){
 let button = document.createElement("button");
 button.addEventListener('click',incompleteList);
 IL.appendChild(this.parentElement);
 this.parentElement.appendChild(button);
 button.innerHTML="&#10003;";
 this.parentElement.childNodes[1].remove();
}