// // ? The old way
// const fresher = {
//     name: 'Fresher',
//     age: 21,
//     isMale: true
// }

// fresher.age = -1
// console.info(fresher) // ! Can me accessed

// // ? The new - cooler way
// function createFresher(name, age, isMale) {
//     const fresher = {
//         name: name,
//         age: age,
//         isMale: isMale
//     }

//     return {
//         getName() {
//             return fresher.name
//         },
//         setName(name) {
//             fresher.name = name
//         },
//         getIsMale() {
//             return fresher.isMale
//         },
//         setIsMale(isMale) {
//             fresher.isMale = isMale
//         },
//         getAge () {
//             return fresher.age
//         }
//     }
// }

// const coolerFresher = createFresher('Name', 21, true)
// coolerFresher.setName('Name...!')
// console.info(coolerFresher.getName())

// console.info(coolerFresher.getAge())
