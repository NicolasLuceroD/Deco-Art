const {Router}=require('express')
const router= Router()

const {Login,Registrar}=require('../controllers/login')

router.post('/login/post',Registrar)
router.post('/login',Login)



module.exports= router