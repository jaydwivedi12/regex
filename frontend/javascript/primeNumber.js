
const checkPrime = (a) => {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return "NOT PRIME"
        }
        else
            return "PRIME"
    }

}
let a = 5;

console.log(checkPrime(a))
