// 하나의 수가 소수인지 판단하가. O (루투 n)
function is_prime(num){
    for(let i = 2; i * i <= num; i += 1){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

// 에라토스테네스의 체
function solution(n) {
    // 에라토스테네스의 체 O(n log log n);
    //*             0   , 1   , 2~
    const prime = [false,false, ...Array(n -1).fill(true)];
    
    for(let i = 2; i * i <= n; i += 1) {
        if(prime[i]) {
            for(let j = i * 2; j <= n; j += i){
                prime[j] = false;
            }
        }
    }
    
    return prime.filter(Boolean).length;
}