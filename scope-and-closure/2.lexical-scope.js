function biggerFunction () {
    let biggerVar = 'I am from the biggerFunction()'

    function smallerFunction () {
        console.info(biggerVar)
    }

    return smallerFunction
}

const smaller = biggerFunction()
smaller()

