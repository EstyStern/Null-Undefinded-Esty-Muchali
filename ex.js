(function () {
    var a = b = 3;
    document.writeln("in the function a defined? " + (typeof a !== 'undefined'));
    document.writeln("in the function b defined? " + (typeof b !== 'undefined'));
})();
check = () => {
    function summary(x, y = 2){
        return x + y;
    }
    var result = summary(4)
    document.writeln("<br/> התוצאה היא:"+result);

}
var myVar = null;

if (myVar)
    alert("myVar is not null");
else
    alert("myVar is null");
document.addEventListener(onload, () => { var myBtn2 = document.getElementById("null"); document.writeln(myBtn2) })
var myBtn = document.getElementById("null2");
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
document.writeln("a defined? " + (typeof a !== 'undefined'));
document.writeln("b defined? " + (typeof b !== 'undefined'));
document.writeln(myBtn);