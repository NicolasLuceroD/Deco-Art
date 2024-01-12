const {Router}=require('express')
const router= Router()

const {ver,crear,editar,eliminar}=require('../controllers/usuarios')

router.get('/usuarios',ver)
router.post('/usuarios/post',crear)
router.put('/usuarios/put/:idUsuario',editar)
router.delete('/usuarios/delete/:idUsuario',eliminar)


module.exports= router