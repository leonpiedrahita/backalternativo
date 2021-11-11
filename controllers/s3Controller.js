const fs = require('fs')
const aws = require('aws-sdk')


exports.guardar = async (req, res, next) => {
    aws.config.update({
        accessKeyId: process.env.AWS_CLAVE_ACCESO,
        secretAccessKey: process.env.AWS_CLAVE_ACCESO_ESPECIAL,
        region:process.env.REGION_BUCKET
        
    })
    const s3 = new aws.S3();
    const ahora = Date.now();
    try {
        const fileStream = fs.createReadStream(req.file.path)
        const s3res = await s3.upload({
            Bucket: process.env.NOMBRE_BUCKET,
            Key: `${ahora}-${req.file.originalname}`,
            Body: fileStream,

        }).promise();

        fs.unlink(req.file.path, () => {
            res.json({ file: s3res.Location })
        });
    }
    catch (err) {
        res.status(422).json({ err })
    }


}

exports.buscar = async (req, res, next) => {
    aws.config.update({
        accessKeyId: process.env.AWS_CLAVE_ACCESO,
        secretAccessKey: process.env.AWS_CLAVE_ACCESO_ESPECIAL,
        region:process.env.REGION_BUCKET
        
    })
    var s3 = new aws.S3()
    const fileKey = req.body.fileKey
    console.log(fileKey)
    const downloadParams = {
        Key: fileKey,
        Bucket: process.env.NOMBRE_BUCKET,
    }
    s3.getObject(downloadParams, function (err, data) {
        if (err) {
            throw err
        }
        fs.writeFileSync('1634610454570-elefante.jpg', data.Body)
        console.log('file downloaded successfully')
        res.status(200).json({ data })
    })

}
exports.buscarurl = async (req, res, next) => {
    aws.config.update({
        accessKeyId: process.env.AWS_CLAVE_FIRMA,
        secretAccessKey: process.env.AWS_CLAVE_ESPECIAL_FIRMA,
        region: process.env.REGION_BUCKET
        
    })
    var s3url = new aws.S3()
    const fileKey = req.body.fileKey
    console.log(fileKey)
    const url = await s3url.getSignedUrlPromise('getObject',{
        Bucket:process.env.NOMBRE_BUCKET,
        Key: fileKey,
        Expires: 30, 
    })
    res.status(200).json({ url })

}
