var wrapperEle = document.body.querySelector(".wrapper");
var data = ["dog","fish", "cat", "shark","cat", "dog"];


for(var i=0; i<data.length; i++){
 createMewMew(data[i]);
}

function createMewMew(str){
   var ele = document.createElement("div");
  if(str==="cat"){
        ele.innerHTML="I am a "+str;
     } else if(str==="dog"){
       ele.innerHTML="borf borf";
     }else {
       ele.innerHTML="I'm an animal";
     }
  wrapperEle.appendChild(ele);
}