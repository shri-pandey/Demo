var counter =0;
 var butn = document.getElementById("btn");

 var dis = document.getElementById("display");

 butn.addEventListener("click", function(){
    counter++;
    dis.innerHTML = counter;
 });

