// ? Function scope
function greeting () {
    const message = 'Hello from the greeting() function'
    console.info(message)
}

// greeting()
// console.info(message)

// ?  Block scope
function blockScopeGretting () {
    if (true) {
        var username = 'Fresher'
        const age = 10
        let isMale = true
    }

    console.info(username)
    // console.info(age)
    // console.info(isMale)
}

// * TODO: In the blockScopeGretting () example
// * what is the
// `if (true) {`
// * block is changed into
// `if (false) {`
