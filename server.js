import 'babel-polyfill';
import express from 'express';
import {StaticRouter} from "react-router";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/app';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('dist/public'))

app.get('*', (request, response) => {
    const context = {};

    response.send(`  
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body><div id="root">
       ${ ReactDOMServer.renderToString(
        <StaticRouter location={request.url} context={context}>
            <App/>
        </StaticRouter>
        )}
        </div>
            <script src="app.js"></script>
        </body>
        </html>
    `);
})

app.listen(PORT, () => {
    console.log(`App running ${PORT}`)
})
