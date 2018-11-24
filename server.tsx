import * as express from "express";
import * as bodyParser from "body-parser";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router";
import App from "./src/App";

const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());

app.use(express.static("build/public"));

app.get('*', (req, res, next) => {

    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>title</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script type="client_bundle.js"></script>
        </body>
        </html>
    `;

    res.send(html);
});



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}, now go do your thing!`)
})