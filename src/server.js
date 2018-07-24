const express = require('express');
const axios = require('axios');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 4083;

server.use(cors());
server.use(express.static('build'));

server.get('/general-en/:year/:month/:day', (requestAnimationFrame, response) => {
    const { date } = request.params;
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${date}`;
    axios.get(url)
         .then(calendarResponse => {
            response.json(calendarResponse.data);
         })
         .catch(() => {
             response.status(500).json ({
                 msg: 'Apologies, the data is not available at this time'
             });
         });
});

server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});