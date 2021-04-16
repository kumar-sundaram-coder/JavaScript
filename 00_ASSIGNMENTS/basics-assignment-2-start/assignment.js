const task3Element = document.getElementById('task-3');

let userName;

function fun1(){
    alert('Empty Function');
    task3Element.addEventListener('click', fun1)
}
function fun2( userName){

    alert(userName);
}

function fun3(str1 , str2 , str3) {
    // const finalString = str1 + '' + '' + str2+ '' + str3;

    // const finalString = `${str1} ${str2} ${str3}`;
    
    // return str1 + str2 + str3;
    
    return finalString;
}


fun1();

fun2('Kumar');

alert(fun3('I am','KUMAR','SUNDARM'));