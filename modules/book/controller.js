
const Book = require("./book")
 
const get = ((req, res) => {
    Book.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({ msg: error }))
})


const getById = ((req, res) => {
    Book.findOne({ _id: req.params.bookID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({ msg: messages.get.error}))
})

const post = ((req, res) => {
    Book.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }))
})

const put = ((req, res) => {
    Book.findOneAndUpdate({ _id: req.params.bookID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({ msg: messages.put.error}))

})


const remove = ((req, res) => {
    Book.findOneAndDelete({ _id: req.params.bookID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({ msg: messages.delete.error}))

})

module.exports = {
    get,
    getById,
    post,
    put,
    remove
}

