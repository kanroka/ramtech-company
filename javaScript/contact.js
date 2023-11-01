var element=document.getElementById("toggle");
var links=document.getElementById("links");
element.addEventListener("click",function(){
   links.classList.toggle("navs");
});
function LIKES1(){
    var element=document.getElementById("numberOfLike1");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 function DISLIKES1(){
    var element=document.getElementById("numberOfDisLike1");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 function LIKES2(){
    var element=document.getElementById("numberOfLike2");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 function DISLIKES2(){
    var element=document.getElementById("numberOfDisLike2");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 function LIKES3(){
    var element=document.getElementById("numberOfLike3");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 function DISLIKES3(){
    var element=document.getElementById("numberOfDisLike3");
    var number=parseInt(element.textContent);
    var updateNumber=number+1;
    element.textContent=updateNumber;
 }
 
 //commentsScript

 function showComment(){
       var element=document.getElementById("comments");
       element.classList.toggle("comments");
   }
   var comments=[];
function addComment(event){
   event.preventDefault();
   var inputName=document.getElementById("nameInput");
   var inputComment=document.getElementById("commentInput");
   var name=inputName.value;
   var comment=inputComment.value;
   var newComment={
           name:name,
           comment:comment,
           likes:0,
           dislikes:0
   };
   comments.push(newComment);
   callComments();
   inputName.value="";
   inputComment.value="";
}

function callComments(){
   var commentsContainer=document.getElementById("commentsContainer");
   commentsContainer.innerHTML="";
   for(var i=0;i<comments.length;i++){
           var comment=comments[i];
           var commentElement=document.createElement("div");
           commentElement.className="comment";
           var nameElement=document.createElement("h3");
           nameElement.textContent=comment.name;
           nameElement.classList.add("name");
           var textElement=document.createElement("p");
           textElement.textContent=comment.comment;
           textElement.classList.add("text");
           var likeButton=document.createElement("i");
           likeButton.className="like";
           likeButton.classList.add("fa","fa-thumbs-up");
           likeButton.addEventListener("click",function(index){
                   return function(){
                       comments[index].likes++;
                       callComments();
                   };
           }(i));
           var dislikeButton=document.createElement("i");
           dislikeButton.className="dislike";
           dislikeButton.classList.add("fa-solid","fa-thumbs-down");
           dislikeButton.addEventListener("click",function(index){
               return function(){
                   comments[index].dislikes++;
                   callComments();
               };
           }(i));
           var likesElement=document.createElement("span");
           likesElement.textContent=comment.likes;
           likesElement.className="likes";
           var dislikesElement=document.createElement("span");
           dislikesElement.textContent=comment.dislikes;
           dislikesElement.className="dislikes";
           commentElement.appendChild(nameElement);
           commentElement.appendChild(textElement);
           commentElement.appendChild(likeButton);
           commentElement.appendChild(likesElement);
           commentElement.appendChild(dislikeButton);
           commentElement.appendChild(dislikesElement);
           commentsContainer.appendChild(commentElement);
   }
}
var commentForm=document.getElementById("commentForm");
commentForm.addEventListener("submit",addComment);
callComments();