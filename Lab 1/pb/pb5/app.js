function printValue(divId, value){
    document.getElementById(divId).innerHTML = value;
}


document.getElementById("inc").addEventListener("click",add);
function add(){
    var n1 = $("#n1").val();
    var n2 = $("#n2").val();
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var res = n1 + n2;
    console.log(res);
    console.log(n1);
    console.log(n2);
    printValue("res", res);
}
document.getElementById("dec").addEventListener("click",sub);
function sub(){
    var n1 = $("#n1").val();
    var n2 = $("#n2").val();
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var res = n1 - n2;
    console.log(res);
    console.log(n1);
    console.log(n2);
    printValue("res", res);
}
document.getElementById("mul").addEventListener("click",mul);
function mul(){
    var n1 = $("#n1").val();
    var n2 = $("#n2").val();
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var res = n1 * n2;
    console.log(res);
    console.log(n1);
    console.log(n2);
    printValue("res", res);
}


document.getElementById("div").addEventListener("click",div);
function div(){
    var n1 = $("#n1").val();
    var n2 = $("#n2").val();
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var res = n1 / n2;
    console.log(res);
    console.log(n1);
    console.log(n2);
    printValue("res", res);
}
