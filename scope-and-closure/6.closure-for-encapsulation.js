// // ? The old way
// const fresher = {
//     name: 'Fresher',
//     age: 21,
//     isMale: true
// }

// fresher.age = -1
// console.info(fresher) // ! Can me accessed

// ? The new - cooler way
function createFresher(name, age, isMale) {
    const fresher = {
        name: name,
        age: age,
        isMale: isMale
    }

    return {
        getName() {
            return fresher.name
        },
        setName(name) {
            fresher.name = name

            // * TODO: Fix this function to prevent setting name to a value
            // * that is not a string,
            // * or an empty string
        },
        getIsMale() {
            return fresher.isMale
        },
        setIsMale(isMale) {
            fresher.isMale = isMale

            // * TODO: Fix this function to prevent setting isMale to a value
            // * that is NOT a boolean
        },
        getAge () {
            return fresher.age
        }
    }
}

const coolerFresher = createFresher('Name', 21, true)
coolerFresher.setName('Name...!')
console.info(coolerFresher.getName())

console.info(coolerFresher.getAge())
