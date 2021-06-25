
function submit(){
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name!=="" && email!=="" && message!=="") {
    
        var table = document.getElementById('table');
        var newRow = table.insertRow(1);
        cel1 = newRow.insertCell(0);
        cel2 = newRow.insertCell(1);
        cel3 = newRow.insertCell(2);
    
        cel1.innerHTML= name;
        cel2.innerHTML= email;
        cel3.innerHTML= message;
    
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "" 
    }
    
    else{
        return alert("Compila tutti i campi")
    }
    

}

