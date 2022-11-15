import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import cors from 'cors';
import { router } from './router';


mongoose.connect('mongodb+srv://marciomrb:junior123@dota2brasil.taiq4.mongodb.net/styla')
  .then(() => {

    const app = express();
    const port = 3001;

    app.use(cors());
    app.use('/public', express.static(path.resolve(__dirname, '..', 'public')));
    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

  })
  .catch((error) => console.log(error));


