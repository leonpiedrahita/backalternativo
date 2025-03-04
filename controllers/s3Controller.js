const fs = require("fs");

const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const s3 = new S3Client({
  region: process.env.REGION_BUCKET,
  credentials: {
    accessKeyId: process.env.AWS_CLAVE_ACCESO,
    secretAccessKey: process.env.AWS_CLAVE_ACCESO_ESPECIAL,
  },
});

const guardar = async (req, res) => {
  try {
    const ahora = Date.now();
    const fileStream = fs.createReadStream(req.file.path);
    
    const uploadParams = {
      Bucket: process.env.NOMBRE_BUCKET,
      Key: `${ahora}-${req.file.originalname}`,
      Body: fileStream,
    };

    const data = await s3.send(new PutObjectCommand(uploadParams));
    
    await fs.promises.unlink(req.file.path); // Eliminar archivo después de la subida

    res.json({ file: `https://${process.env.NOMBRE_BUCKET}.s3.${process.env.REGION_BUCKET}.amazonaws.com/${uploadParams.Key}` });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};

const buscar = async (req, res) => {
  try {
    const fileKey = req.body.fileKey;

    const downloadParams = {
      Bucket: process.env.NOMBRE_BUCKET,
      Key: fileKey,
    };

    const { Body } = await s3.send(new GetObjectCommand(downloadParams));

    const filePath = `./downloads/${fileKey}`;
    const fileStream = fs.createWriteStream(filePath);
    
    Body.pipe(fileStream);
    
    fileStream.on("finish", () => {
      res.status(200).json({ message: "Archivo descargado", filePath });
    });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};

const buscarurl = async (req, res) => {
  try {
    const fileKey = req.body.fileKey;

    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket: process.env.NOMBRE_BUCKET,
        Key: fileKey,
      }),
      { expiresIn: 30 }
    );

    res.status(200).json({ url });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};
module.exports = { guardar, buscar,buscarurl };