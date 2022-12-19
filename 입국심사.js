// 로그 시간 , 이진 탐색
// 심사관 정렬 -> 선형 로그시간 
// 특정 값을 찾는 문제가 아님, 선택 문제 (파리메트릭 서치 - parametric search)

// 최소 1분 ~ 10억분 * n 의 시간이 걸림
// 심사관이 몇명의 사람을 처리 하는가?
// 처리 가능한 사람수가 n 보다 작다면 분을 올리고, n 보다 크다면 분을 낮춘다.
// 심사관들은 시간 대비 몇명을 처리하는가?
// 시간 / 심사시간은 심사관당 처리가능한 입국자수.

function solution(n, times) {
    const sortedTimes = times.sort((a,b) => a -b); 
    let left = 1;
    let right = sortedTimes[sortedTimes.length -1] * n;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        // 시간 / 심사시간 
        const sum = times.reduce((acc,time) => acc + Math.floor(mid/time),0);
        //console.log(sum, left, mid, right);
        if(sum < n){
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return left; // 결국에 left 가 right와 같거나 넘어서는 수간이 최소값.
}


console.log( solution(6, [7,10]));

//* 나의 나름의 생각

// 최소 1분 ~ 10억 * n 의 시간이 걸린다. 그래서 O(log N)의 복잡도로 해결하길원한다 = 이진탐섹.
// 근데 심사관은 1명 ~ 100,000명이다. 이 심사관들의 평균 처리시간을 구해 n을 처리 할 수 있나로 풀어본다.
// 심사관 정령에 필요한 복잡도 ,O(N log N);
// 이 문제는 위에선 말했듯이 특정값을 찾아 네는 것 보다 결정 문제다. (파라메트릭 서치);
// 여기서는 몇분이 최소 시간인가를 결정하는 것이다.

// 심사관들이 몇명을 처리하는가 -> 주어진 시간(분) / 심사관들의 처리 시간 = 한 심사관당 처리가능한수
// SUM(한 심사관당 처리가능한 수)가 n 보다 작으면 분을 높여 시도, n 보다 높으면 분을 낮추어 시도
// 반복하여 최적의 시간을( 정확하게 거나 충분한 하지만 최소 시간을 찾는다.) while(left <= right)
function solution(n, times) {
    const sortedTimes = times.sort((a,b) => a - b);
    let left = 1;
    let right = Math.floor(sortedTimes[sortedTimes.length -1] * n);
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        // 이 mid라는 시간으로 각 심사간이 처리할 수 있는 사람수의 sum을 구해 n 이랑 비교
        const sum = times.reduce((acc,time) => acc + Math.floor(mid/time),0);
        if(sum < n){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}