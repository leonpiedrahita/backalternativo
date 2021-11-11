const express = require('express')
const s3controller = require('../../controllers/s3Controller')
const multer = require('multer')
const upload = multer({dest:'uploads/'})

const router = express.Router()


router.post(
    `/guardar`,upload.single('file'),
    s3controller.guardar
)

router.get(
    `/buscar`,
    s3controller.buscar
)
router.get(
    `/buscarurl`,
    s3controller.buscarurl
)

module.exports = router