const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000 || 3002;
const connection  = require('./db/configDB.js');

app.use(express.json())
app.use(cors())

// call crudClima(1, null, null, null, null);
// call crudClima(2, null, 'Ciudad Ejemplo', 'Pais', '20');
// call crudClima(3, 4,'update2', 'update2', 20);
// call crudClima(4, 5,null, null, null);
// call crudClima(1, null, null, null, null);
app.get('/', async(req, res) => {
  try {

    const [query] = await connection.execute('call crudClima(1, null, null, null, null, null);');
    
    res.status(200).send(
      {
        status: 'ok',
        msg: query[0]
      }
    )
  } catch (error) {
    res.status(400).send({status: 'ko', msg: 'Error al obtener la lista de climas. '})
  }
})

app.get('/:name', async(req, res) => {
  try {

    
    const {name} = req.params;

    const [query] = await connection.execute('call crudClima(6,null, null, null, null, ?);', [name]);
    
    res.status(200).send(
      {
        status: 'ok',
        msg: query[0]
      }
    )
  } catch (error) {
    res.status(400).send({status: 'ko', msg: 'Error al obtener la lista de climas. '})
  }
})

app.post('/crear-clima', async(req, res) => {
  try {
    const {ciudad, pais, temperatura} = req.body;

    const [query] = await connection.execute('call crudClima(2, null, ?, ?, ?, null);', [ciudad, pais, temperatura]);
    
    res.status(200).send(
      {
        status: 'ok',
        msg: query[0]
      }
    )
  } catch (error) {
    res.status(400).send({status: 'ko', msg: 'Error al crear un clima. '})
  }
})


app.put('/update-clima/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const {ciudad1, pais1, temperatura1} = req.body;

    const [query1] = await connection.execute('call crudClima(5, ?, null, null, null, null);', [id]);

    const {ciudad, pais, temperatura} = query1[0][0]
    
    const [query] = await connection.execute('call crudClima(3, ?,?,?,?, null)', 
    [id, ciudad1 || ciudad, pais1 || pais, temperatura1 || temperatura]);
    
    res.status(200).send(
      {
        status: 'ok',
        msg: query[0]
      }
    )
  } catch (error) {
    res.status(400).send({status: 'ko', msg: 'Error al obtener la lista de climas. '})
  }
})

app.delete('/delete-clima/:id', async (req, res) => {
  try {
    const {id} = req.params;  
    
    console.log(id)

    const [query] = await connection.execute('call crudClima(4, ?,null, null, null, null);', [id]);
    
    res.status(200).send({
      status: 'ok',
      msg: query[0]
    });

  } catch (error) {
    res.status(400).send({ status: 'ko', msg: 'Error deleting record.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} ...`)
})