function fiBoNaCy(num: number): number {
    if (num == 1) {
        return 0
    }

    if (num == 2) {
        return 1
    }

    return fiBoNaCy(num - 1) + fiBoNaCy(num - 2);
}

function suMarRy(n: number): number {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += fiBoNaCy(i)
    }
    return sum
}
console.log(fiBoNaCy(10))
console.log(suMarRy(5))
