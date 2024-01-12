const {Router}=require('express')
const router= Router()

const {ver,crear,editar,eliminar}=require('../controllers/categoria')

router.get('/categoria',ver)
router.post('/categoria/post',crear)
router.put('/categoria/put/:idCategoria',editar)
router.delete('/categoria/delete/:idCategoria',eliminar)


module.exports= router