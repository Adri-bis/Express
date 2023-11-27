// const express = require("express");
// const app = express();
// const port = 3310;

// const licorne = [
//     {
//         id: 1,
//         name: "lola",
//         age: 254,
//         color: "rose",
//     },
//     {
//         id: 2,
//         name: "paola",
//         age: 196,
//         color: "rose",
//     },
//     {
//         id: 3,
//         name: "resti",
//         age: 170,
//         color: "rose",
//     },
//     {
//         id: 4,
//         name: "zoe",
//         age: 85,
//         color: "blue",
//     },
//     {
//         id: 5,
//         name: "jouli",
//         age: 200,
//         color: "rose",
//     },
//     {
//         id: 6,
//         name: "fleur",
//         age: 186,
//         color: "rose",
//     },
//     {
//         id: 7,
//         name: "rose",
//         age: 128,
//         color: "blue",
//     },
//     {
//         id: 8,
//         name: "prune",
//         age: 124,
//         color: "blue",
//     },
//     {
//         id: 9,
//         name: "agdabel",
//         age: 654,
//         color: "blue",
//     },
//     {
//         id: 10,
//         name: "agdabel",
//         age: 654,
//         color: "blue",
//     },
//     {
//         id: 11,
//         name: "agdabel",
//         age: 654,
//         color: "blue",
//     },
//     {
//         id: 12,
//         name: "agdabel",
//         age: 654,
//         color: "blue",
//     },
// ]

// const welcome = (req, res) => {
//     res.send("Welcome to the official Licorne institue of masachusette")
// }
// app.get("/", welcome);

// const allLili = (req, res) => {

//     const Reqlili = parseInt(req.query.limit)

//     const tablili = []
//     if (Reqlili) {
//         for (i = 0; i < Reqlili; i++) {
//             tablili.push(licorne[i])

//         }
//         res.send({ tablili })
//     } else {

//         res.send(licorne.slice(0, 10))
//     }
// }

// app.get("/all", allLili);

// const paramLico = (req, res) => {

//     const parali = (req.query.color)
//     const papililo = licorne.filter((el) => el.color === parali)

//     if (papililo) {
//         res.json({ papililo })
//     } else {
//         res.send("cette couleur n'existe pas! inculte des licorne va!")
//     }
// };
// app.get("/color", paramLico)

// const licorneId = (req, res) => {
//     const licoId = parseInt(req.params.id)
//     const licoCo = licorne.find((el) => el.id === licoId)

//     if (licoCo) {
//         res.status(200).json({ licoCo })
//     } else {
//         res.status(404).send("Cette licorne n'existe pas")
//     }
// };
// app.get("/:id", licorneId)

// app.listen(port, (err) => {

//     if (err) {

//         console.error("Something bad happened");

//     } else {

//         console.log(`Server is listening on ${port}`);

//     }

// });
