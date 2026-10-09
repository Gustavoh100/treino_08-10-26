import express from "express"
import  ControllerUser from "../controller/user.js"
import authMiddlaware from "../middleware/auth.js"

const router = express.Router()


router.get('/buscar', authMiddlaware, ControllerUser.Buscar)
router.get('/detalhe', authMiddlaware, ControllerUser.Detalhe )
router.post('/criar', authMiddlaware, ControllerUser.Criar )
router.put('/alterar', authMiddlaware, ControllerUser.Alterar )
router.delete('/deletar', authMiddlaware, ControllerUser.Deletar)
router.post('/login', authMiddlaware, ontrollerUser.Login)



export default router