import express from 'express'

function main (){
    try {
        const app = express();

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })

        app.get("/", (req, res) => {
            res.status(200).send(`<h1>The server is On</h1>`)
        })
    } catch (error) {
        console.log(error)
    }
}

main();

