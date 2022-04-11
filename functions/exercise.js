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


function add(arr){
    var sum = 0;
    for(var i =0;i<=arr.length-1;i++){
        var sum = sum +arr[i];
    }
    return sum;
}

function largestNumber(arr){
    var largest =0;
    for(var i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

function multiplication(arr){
    var multiple =0;
    for(var i =0;i<arr.length;i++){
        multiple = multiple*arr[i];

    }
    return multiple;
}