const db = require('../config/db.js');
const Orden = db.Orden
const Curso = db.Curso
const User = db.User
const Cupon = db.Cupon

const getAllPagos = async (req, res) => {
  try {
    res.status(200).json({ msg: 'OK' })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getPagoById = async (req, res) => {
  try {
    const { id } = req.params
    const getPago = await Pago.findByPk(id, {
      include: {
        model: Query,
        as: 'query'
      }
    })

    res.status(200).json({ msg: 'OK', Pago: getPago })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const createPago = async (req, res) => {
  try {
    const { ordenId, pago, idCupon } = req.body;

    console.log(idCupon);
    const getCupon = await Cupon.findByPk(idCupon)
    const cupon = getCupon.dataValues

    const getOrden = await Orden.findByPk(ordenId, {
      include: [
        {
          model: Curso,
          as: 'curso'
        },
        {
          model: User,
          as: 'user'
        }
      ]
    });
  
    if(getOrden.state === true) {
      return res.status(503).json({ msg: 'KO',  msg: "La orden ya fue cancelada." }) 
    }

    const dataCurso = getOrden.curso.dataValues 

    if((dataCurso.price_sale * (cupon.discount / 100 )) - pago !== 0 ) {
      return res.status(502).json({ msg: 'KO',precioSinDescuento:  dataCurso.price_sale, pagar:(dataCurso.price_sale * (cupon.discount / 100 )),  msg: "El pago no coincide con el total a pagar.", cupon: cupon.discount }) 
    }

    getOrden.state = true;
    
    await getOrden.save()
    res.status(200).json({ msg: 'OK', Orden: getOrden })
  } catch (error) {
    res.status(501).json({ status: 'KO', error })
  }
}

const deletePagoById = async (req, res) => {
  try {
    const {id} = req.params; 
    const PagoDelete = await Pago.findByPk(id);
    if (!PagoDelete) {
      return res.status(204).json({msg: 'KO', error: `El pago con ${id} no existe en BD.`})
    }
    await PagoDelete.destroy();

    res.status(200).json({msg: 'OK', cod: `El pago con ID: ${id} a sido eliminado.`})
   } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}
module.exports = { getAllPagos, getPagoById, createPago, updatePagoById, deletePagoById }