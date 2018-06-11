const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '1mb' }));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + 3000);
});

app.get('/compute', (req, res) => {
    res.send([{id: 1, hostName: 'fakehostname', vCPU: 10, memory: 10, state: "FULLFIELD", localIpAddress: "127.0.0.1"}]);
});