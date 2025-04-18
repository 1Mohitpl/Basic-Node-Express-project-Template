const info = (req, res) => {
    return res.json ({

        name : "Mohit paul", 
        age : "24", 
        job : "software enginner"
    })
}

module.exports = {
    info
}