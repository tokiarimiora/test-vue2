import cors from 'cors';
import express from 'express';
import { AgendaRouter } from './routes/agenda.route';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('server works!');
});

app.use('/api/v2/agenda', AgendaRouter);

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
