import express, { Application, Request, Response} from 'express';
import routes from "./routes/router"
import dotenv from 'dotenv';
dotenv.config(); // Make sure this line is placed at the top of the file

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use("/api",routes);

app.use((req: Request, res: Response) => {
    res.status(404).send({ error: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
