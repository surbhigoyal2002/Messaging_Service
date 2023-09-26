const  express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello Surbhi Jee");
})

app.listen(5000);
