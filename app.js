var list = document.getElementById("list")

function add()
{
    var val = document.getElementById('todoitem')
    var li = document.createElement('li')
    var doing = document.createTextNode(val.value)
    li.appendChild(doing)
    var hr = document.createElement('hr')
    hr.setAttribute("class",'hrr')

    // delete button

    var dltbtn = document.createElement("button")
    var dlttext = document.createTextNode("Delete")
    dltbtn.appendChild(dlttext)
    dltbtn.appendChild(hr)
    dltbtn.setAttribute('class','dltbt')
    dltbtn.setAttribute('onclick','dltitem(this)')
    li.appendChild(dltbtn)
    li.appendChild(hr)


    // Edit button

    
    var Edit = document.createElement("button")
    var Edittxt = document.createTextNode("edit")
    Edit.appendChild(Edittxt)
    Edit.setAttribute('class','edibt')
    Edit.setAttribute('onclick','edititem(this)')
    li.appendChild(Edit)

    if(val.value==="")
    {

    }
    else{
        list.append(li)
    list.append(hr)
    }
  
    val.value =""
    li.setAttribute('class','lis')

}

function dltitem(e)
{
    e.parentNode.remove()
}

function Deleteall()
{
    list.innerHTML=""
}

function edititem(e)
{
    var val =e.parentNode.firstChild.nodeValue
    var edi = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue=edi

}