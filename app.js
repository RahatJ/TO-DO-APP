var date=document.getElementsByClassName('Date')
var today=new Date();
var list=document.getElementById('list')
function addTodo(){
    var todoitem=document.getElementById('item')
    // create li tag with text node
    var li=document.createElement('li')
    var liText=document.createTextNode(todoitem.value)
    li.appendChild(liText)

    //create delete button
     //var delBtn=document.createElement("button");
     var delIcon=document.createElement("i");
     delIcon.setAttribute("class","fa fa-trash fa-2x text-danger px-3");
     delIcon.setAttribute("onclick" , "deleteItem(this)");
     //delBtn.appendChild(delIcon)
     li.appendChild(delIcon)
     
     //create edit button
     var editIcon=document.createElement("i");
     editIcon.setAttribute("class","fa fa-pencil fa-2x text-success px-3")
     editIcon.setAttribute("onclick" , "editItem(this)");
     li.appendChild(editIcon)
   

    list.appendChild(li)
    item.value=""
    
}

function deleteItem(e){
    e.parentNode.remove();
 }

 function deleteAll(){
     list.innerHTML=" "
 }

 function editItem(e){
     var Val=e.parentNode.firstChild.nodeValue;
     var editValue=prompt("Add TODO", Val)
     e.parentNode.firstChild.nodeValue=editValue
 }