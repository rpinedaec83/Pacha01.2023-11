module.exports = app =>{
    const curso = require('../controllers/curso.controller');
    var router = require("express").Router();
    const multer = require('multer');
    const upload = multer({dest: 'uploads/'});
    router.post('/',upload.fields([
        {name:'img'},
        {name:'portada'}
    ]),curso.create);
    router.get('/',curso.findAll);
    router.get('/:id',curso.findOne);
    router.delete('/:id',curso.deleteOne);
    router.delete('/:id',curso.deleteAll);
    router.put('/:id',curso.update);

    app.use('/api/curso',router);
};