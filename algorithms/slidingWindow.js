function sumAvgArr_brute (array, k) {
    const avg = [];

    for (let i = 0; i <= array.length - k; i++) {
        let sum = 0;

        for (let j = 0; j < k; j++) {
            sum += array[i + j];
        }
        avg.push(sum / k);
    }
    return avg;
}

function sumAvgArr (array, k) {
    const avg = [];
    let windowStart = 0;
    let windowSum = 0;
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd];
        if (windowEnd >= k - 1) {
            avg.push(windowSum / k);
            //add avg of current window
            // move window start
            //
            windowSum -= array[windowStart];
            windowStart++;
        }
    }
    return windowSum;
}

console.log("Sum avg=", sumAvgArr([1, 2, 3, 4, 5], 3));
