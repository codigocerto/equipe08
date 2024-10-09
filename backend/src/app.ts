import 'dotenv/config';
import express from 'express';
import routes from './routes/routes';
import { loginRoute } from "./routes/login.route";


const app = express();
app.use(express.json());

app.use(routes);
app.use('/login', loginRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});