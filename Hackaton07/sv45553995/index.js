const express = require('express')
const axios  = require('axios');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const usr = [
    {
        dni: "12345678",
        nombre: "Roberto",
        apellido: "Pineda",
        cuentaSueldo: {
            nro_cuenta:"123123123"
        }
    }, {
        dni: "87654321",
        nombre: "David",
        apellido: "Lopez"
    }, {
        dni: "87614321",
        nombre: "Karen",
        apellido: "Lam"
    }, {
        dni: "45553995",
        nombre: "Cindy",
        apellido: "Alcala Arata"
    }
]

app.get('/clientes', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(usr)
})

app.get('/cliente', (req, res) => {
    let dni = req.query.dni;
    console.log("DNI -> "+dni)
    let respuesta;
    usr.forEach(element => {
        if (element.dni == dni){
            respuesta = element;
            res.setHeader("Content-Type", "application/json");
            res.send(respuesta)
        }
        
    });
})

app.get('/pokemones-actuales', (req, res) => {
    let request = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data.results))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/consulta-usuario', (req, res) => {
    const username = req.query.username;
    console.log(username)
    let request = {
        method: 'get',
        url: `https://api.github.com/users/${username}`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/consulta-clima', (req, res) => {
    const location = req.query.location;
    let request = {
        method: 'get',
        url: `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=nRnPmoLjQkheUssoKdE9nlzo4g9N9o5y`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})
app.get('/consulta-tipo-cambio', (req, res) => {
    const amount = req.query.amount;
    const from = req.query.from;
    const to = req.query.to;


    let request = {
        method: 'get',
        url: `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/consulta-pokemon', (req, res) => {
    const name = req.query.name;

    let request = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/rick-and-morty/consulta-personajes',(req, res) => {
    
    let request = {
        method: 'get',
        url: `https://rickandmortyapi.com/api/character`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})
app.get('/rick-and-morty/consulta-por-id',(req, res) => {
    const id = req.query.id;
    
    let request = {
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/${id}`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/top-bebidas',(req, res) => {
    
    let request = {
        method: 'get',
        url: `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data.drinks.slice(0,10);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/consulta-productos', (req, res) => {

    let request = {
        method: 'get',
        url: `https://fakestoreapi.com/products`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/consulta-fotografia', (req, res) => {

    const query = req.query.query;
    const width = req.query.w;
    const height = req.query.h;
    const client_id= 'Afa8KMeXMMNXmbsnuuTUJz84zyGkjx0xFOS4cJiv8aY';

    let request = {
        method: 'get',
        url: `https://api.unsplash.com/photos/random?query=${query}&w${width}&h=${height}&client_id=${client_id}`
    }

    axios.request(request)
    .then((response) => {

    const data = response.data;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
})

app.get('/consulta-citas-famosos', (req, res) => {

    let request = {
        method: 'get',
        url: `https://api.quotable.io/quotes`
       
        }
    
        axios.request(request)
        .then((response) => {
    
        const data = response.data;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(data))
    
        }).catch((error) => {
        res.send(`Error: ${error.message}`);
        })
    })
    