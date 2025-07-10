import multer from "multer";
const storage = multer.diskStorage({
    destination: "public/imgs/",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});
export const upload = multer({
    storage
});