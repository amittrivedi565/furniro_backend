import express, { Application, Request, Response} from 'express';
import routes from "./routes/router"

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
