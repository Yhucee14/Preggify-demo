import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const PORT = 5110;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '../assets')));

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Some error happened');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`App is launched on ${PORT}`);
});
