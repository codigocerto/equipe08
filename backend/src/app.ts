import 'dotenv/config';
import express from 'express';
import routes from './routes/routes';
import { loginRoute } from "./routes/login.route";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/login', loginRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});