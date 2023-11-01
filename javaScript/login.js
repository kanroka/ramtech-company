var element=document.getElementById("toggle");
var links=document.getElementById("links");
element.addEventListener("click",function(){
   links.classList.toggle("navs");
});
var clickElement1=document.getElementById("sign");
        var clickElement2=document.getElementById("login");
        var eventElement1=document.getElementById("log-in");
        var eventElement2=document.getElementById("sign-up");
        clickElement1.addEventListener("click",function(){
            eventElement1.style.transform="rotateY(100deg)";
            eventElement1.style.transition="all 0.5s";
            setTimeout(function(){
                eventElement2.style.display="block";
                eventElement1.style.display="none";
                eventElement1.style.transform="rotateY(260deg)";
                setTimeout(function(){
                    eventElement2.style.transform="rotateY(0deg)";
                    eventElement2.style.transition="all 0.5s";
                },50);
            },470);
        });
        clickElement2.addEventListener("click",function(){
            eventElement2.style.transform="rotateY(100deg)";
            eventElement2.style.transition="all 0.5s";
            setTimeout(function(){
                eventElement1.style.display="block";
                eventElement2.style.display="none";
                eventElement2.style.transform="rotateY(260deg)";
                setTimeout(function(){
                    eventElement1.style.transform="rotateY(0deg)";
                eventElement1.style.transition="all 0.5s";
                },50);
            },470);
        });

        /*about*/

        var element1=document.getElementById("h1");
        var element2=document.getElementById("h2");
        var element3=document.getElementById("h3");
        var element4=document.getElementById("h4");
        element1.addEventListener("click",function(){
            var text1=document.getElementById("l1");
           text1.classList.toggle("l1"); 
        });
        element2.addEventListener("click",function(){
            var text2=document.getElementById("l2");
           text2.classList.toggle("l2"); 
        });
        element3.addEventListener("click",function(){
            var text3=document.getElementById("l3");
           text3.classList.toggle("l3"); 
        });
        element4.addEventListener("click",function(){
            var text4=document.getElementById("l4");
           text4.classList.toggle("l4"); 
        });
        
        /*about Registration*/
        var showbutton=document.getElementById("show-button");
        var showInf=document.getElementById("show-inf");
        var showCont=document.getElementById("informationContainer");
        var ok=document.getElementById("ok");
        showbutton.addEventListener("click",function(){
            showCont.style.display="none";
            showbutton.style.display="none";
            showInf.style.display="block";
            ok.style.display="none";
            // showInf.style.transition="all 1s";
            setTimeout(function(){
                showInf.style.transform="scale(1)";
            },50);
        });
       document.getElementById("user-inputs").addEventListener("submit",function(event){
        event.preventDefault();
        var firstName=document.getElementById("first").value;
        var lastName=document.getElementById("last").value;
        var country=document.getElementById("country").value;
        var city=document.getElementById("city").value;
        var phoneNumber=document.getElementById("number").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var output=document.getElementById("informationContainer");
        output.className="output";
        output.innerHTML="<h3>First Name: </h3>"+firstName +"<br> <h3>Last Name: </h3>"+lastName+
        "<br> <h3>Your Country: </h3>"+country+"<br> <h3>Your City: </h3>"+city+
        "<br> <h3>Phone Number: </h3>"+phoneNumber+"<br> <h3>Email: </h3>"+email+
        "<br> <h3>Password: </h3>"+password;
        showInf.style.display="none";
        showbutton.style.display="none";
        output.style.display="block";
        ok.style.display="block";
        setTimeout(function(){
                output.style.transform="scale(1)";
            },50);
       });
       ok.addEventListener("click",function(){
        ok.style.display="none";
        showCont.style.display="none";
        showbutton.style.display="block";
        alert("Thank you for registering with us");
       });