function fiBoNaCy(num: number): number {
    if (num < 2) {
        return num
    }
        return fiBoNaCy(num - 1) + fiBoNaCy(num - 2);
}

function sumArRay(n: number): number {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += fiBoNaCy(i)
        }
        return sum
    }


// console.log(fiBoNaCy(4))
console.log(sumArRay(5))
