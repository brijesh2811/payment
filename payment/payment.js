let cnumber = document.getElementById("cnumber");
let hname = document.getElementById("hname");
let date = document.getElementsByClassName("date");
let code = document.getElementById("code");
console.log(cnumber, hname, date, code);

function validation() {
    //card number
    if (cnumber.value === "") {
        console.log("enter the card number");
        cnerror.innerHTML = "*Please enter the card number"
    }
    else {
        cnerror.innerHTML = ""
    }

    //holder name error
    if (hname.value === "") {
        console.log("enter the card number");
        hnerror.innerHTML = "*Please enter the holder name"
    }
    else {
        hnerror.innerHTML = ""
    }
    
    //date error
    if(date.value===""){
        console.log("enter the date");
        daterror.innerHTML  = "*enter the date"
    }
    else{
        daterror.innerHTML =""
    }

    // cvv code
    if (code.value === "") {
        console.log("enter the cvv number");
        cvverror.innerHTML = "*enter CVV number"
    }
    else {
        cvverror.innerHTML = ""
    }
    return false
}
