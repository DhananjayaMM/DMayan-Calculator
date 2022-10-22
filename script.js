// display 

var val=document.getElementById("display");

// Number Insert to display Function

function insert(v){
val.value+=v;
}

// Display Clear Function

function cls(){
val.value='';
}

// Delete last Number Or Operator Function

function del(){
    val.value=val.value.substr(0,val.value.length-1);
    }

// Equal Display Number and Operator Function 

function exe(){
    if (val.value==''){
        alert("Please Enter The Number");
    } else{
        val.value=eval(val.value);
    }

}

