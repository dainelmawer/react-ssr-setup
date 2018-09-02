import express from 'express';
import React from 'react';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import template from './template';
import App from '../shared/App';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/*', (req, res) => {
  const context = {};

  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const title = Helmet.renderStatic();
  res.send(template(markup, title));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
