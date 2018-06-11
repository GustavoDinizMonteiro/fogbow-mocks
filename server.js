const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({
    limit: '1mb'
}));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + 3000);
});

app.get('/compute', (req, res) => {
    res.send([{
        id: 1,
        hostName: 'fakehostname',
        vCPU: 10,
        memory: 10,
        state: "FULLFIELD",
        localIpAddress: "127.0.0.1"
    }]);
});

app.get('/compute/:id', (req, res) => {
    res.send({
        id: 1,
        hostName: 'fakehostname',
        vCPU: 10,
        memory: 10,
        state: "FULLFIELD",
        localIpAddress: "127.0.0.1"
    });
});

app.get('/network', (req, res) => {
    res.send([{
        id: 2,
        label: "label",
        state: "FULLFIELD",
        address: "127.0.0.1",
        gateway: "129.0.0.1",
        vLAN: "vlan",
        networkAllocation: {
            value: "value"
        },
        networkInterface: "interface",
        MACInterface: "MACInterface",
        interfaceState: "interfaceState"
    }]);
});

app.get('/members', (req,res) => {
    res.send(['id1', 'id2', 'id3']);
});