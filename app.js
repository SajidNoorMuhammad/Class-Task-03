document.write ("<h1>Check whether the number is divide or not</h1>")

var num = prompt ("Enter a Number");

if (num % 3 === 0 && num % 5 === 0){
    document.write ("Divide By 3 Or 5");
}else if (num % 3 === 0){
    document.write ("Divide By 3");
}else if (num % 5 === 0){
    document.write ("Divide By 5");
}else {
    document.write ("Not Divide by 3 or 5");
}