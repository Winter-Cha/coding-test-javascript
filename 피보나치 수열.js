// 피보나치 수열 앞 두항의 합이 과 같은 수열
// 1 1 2 3 5 8 13

function fibonacci(x){
    if(x <= 2){
        return 1;
    }
    return fibonacci(x -1) + fibonacci(x - 2);
}

console.log(fibonacci(9));