function calculator(a,b){
    var subtraction = a - b;
    var addition = a + b;
    console.log('Sum is ' + addition);
    console.log('Difference ' + subtraction);
}

function showEmployee(name,salary=9000){
    var name;
    var salary;
    return{name,salary};
}

function recursive(num){
    if(num>0){
        return num+recursive(num-1);
    }
    else{
        return num;
    }
}
}

function evenNumber(arr){
    var even =[];
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2 ==0){
            even.push(arr[i]);
        }
    }
      return even;
}



