exports.testFunction = async (req, res) => {
    res.status(200).json({
        message: "this is from testFunction"
    })
}

exports.evenFn = (req, res) => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    let evenNum = a.filter(a => a % 2 === 0);
    res.send(evenNum)
}




