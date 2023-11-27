const express = require("express");


const app = express();


const port = 5000;


const movies = [

    {

        id: 1,

        title: "Citizen Kane",

        director: "Orson Wells",

        year: "1941",

        color: false,

        duration: 120,

    },

    {

        id: 2,

        title: "The  Godfather",

        director: "Francis Ford Coppola",

        year: "1972",

        color: true,

        duration: 180,

    },

    {

        id: 3,

        title: "Pulp Fiction",

        director: "Quentin Tarantino",

        year: "1994",

        color: true,

        duration: 180,

    },

];

const welcome = (req, res) => {

    res.send("Welcome to my favourite movie list");

};


app.get("/", welcome);


const allMovie = (req, res) => {

    res.status(200).json({ movies });

};

app.get("/api/movies", allMovie);



const movieId = (req, res) => {

    const movid = parseInt(req.params.id)
    const idchoi = movies.find((el) => el.id === movid)

    if (idchoi) {
        res.status(200).json({ idchoi })
    } else {
        res.status(404).send('not found')
    }
};

app.get("/api/movies/:id", movieId)



app.listen(port, (err) => {

    if (err) {

        console.error("Something bad happened");

    } else {

        console.log(`Server is listening on ${port}`);

    }

});