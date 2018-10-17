const express = require('express');
const app = express();

const port = process.env.PORT ? process.env.PORT : 3000;
const responseStatus = process.env.RESPONSE_STATUS ? process.env.RESPONSE_STATUS : '200';
const responseMessage = process.env.RESPONSE_MESSAGE ? process.env.RESPONSE_MESSAGE : 'SUCCESS';

app.all('/**', (req, res) => {
    return res.status(responseStatus).send(responseMessage);
});

app.listen(port, () => console.log(`Server started (port ${port})`));
