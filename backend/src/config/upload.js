const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, next) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            next(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};