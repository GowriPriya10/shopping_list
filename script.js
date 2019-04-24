var button=document.getElementsByClassName("addbutton")[0];
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var list=document.querySelectorAll("li");

button.addEventListener("click", function(){
  if(input.value.length>0){
 addlist();
  }
  else{
    window.alert("Type something then click on enter");
  }
});
 input.addEventListener("keypress", function(event){
  if(input.value.length>0 && event.keyCode==13){
  addlist();
  }
});
function addlist(){
  var li=document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
   li.addEventListener("click",strike);
  input.value="";
}

for(var i=0;i<list.length;i++){
  list[i].addEventListener("click",strike);
}
function strike(){
  this.classList.toggle("done");
}