module.exports = {
    get: (req, res) => {
        const name = req.params.name + req.params.firstName
        const number = req.querry.number
        console.log(number);
        res.send({ "message": 'hello get' + name })
    },
    post: (req, res) => {
        const indata = req.body.message

        res.send({ "message": indata })
    },
    put: (req, res) => {
        res.send({ "message": 'hello put' })
    },
    delete: (req, res) => {
        res.send({ "message": 'hello delete' })
    }
}