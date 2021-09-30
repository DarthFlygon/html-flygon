var toggle=true;
var boldt=true;

// Function to change text
function popup(){
    if(toggle){
        document.getElementById("demo").innerHTML = "This text can be changed by clicking the button below";
        toggle=false;
    }
    else{
        document.getElementById("demo").innerHTML = "Click to change again";
        toggle=true;
    }
    
}

//Function to change style to bold
function bold(){
    if(boldt){
        document.getElementById("demo").style="font-weight:bold"
        boldt=false;
    }
    else{
        document.getElementById("demo").style="font-weight:normal"
        boldt=true;
    }
    
}

//Function to add images. This is a bit complex. Try to understand line by line.
function addimg(){
    var add = document.createElement("img");
    add.src = "./images/pikachu.jpg";
    add.className="imgstyle";
    document.getElementById("imagearea").appendChild(add);
}
