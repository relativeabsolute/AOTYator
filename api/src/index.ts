import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;
const corsOrigin = process.env.CORS_ORIGIN;

console.log(`accepting requests from ${corsOrigin}`);

app.use(cors(corsOrigin));
app.use(express.static('./dist/public'));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
