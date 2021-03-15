var btn=document.getElementById("btn");
var bg=document.getElementById("top");
var span=bg.getElementsByTagName("span");

btn.onclick=function(){
    if(btn.className=="night"){
        btn.className="day";
        bg.className="light";
        span[0].style.color="#777";    
    }  
  else{
        btn.className="night";
        bg.className="dark";
        span[0].style.color="white"; 
    }
};
var sub=document.getElementById("go");
sub.onclick=function(){
    var form=document.forms.form;
    var num=form.num.value;
    var task=form.task.value;
    var d=document.getElementsByClassName("ul")[0];
    var ul=d.getElementsByTagName("ul")[0];
    var li=ul.getElementsByTagName("li");
    if(num==="" && task!==""){
        var newli=document.createElement("li");
        newli.innerHTML=task+"<hr>";
        ul.appendChild(newli);
    }
    else if(num!=="" && task===""){
        num=num-"0"-1;
        if(num>0)
            ul.removeChild(li[num]);
        else alert("INVALID number")
    }
    else {
        alert("ENTER ONE VALUE AT A TIME!!")
    }
};