const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({
    limit: '1mb'
}));

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening on port ' + 8080);
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

app.get('/quota/shared', (req,res) => {
    res.send({"vCPU": "2", "ram": "3000", "instances": "1"});
});

app.get('/quota/available', (req,res) => {
    res.send({"vCPU": "16", "ram": "48000", "instances": "8"});
});

app.get('/quota/me', (req,res) => {
    res.send({"vCPU": "10", "ram": "20000", "instances": "5"});
});

app.get('/quota/member/:id', (req,res) => {
    res.send({"vCPU": "14", "ram": "28000", "instances": "7"});
});

app.get('/quota/aggregated', (req,res) => {
    res.send({
        compute: {using: 8, total: 40},
        vCPU: {using: 8, total: 40},
        ram: {using: 8, total: 40},
        volume: {using: 8, total: 40},
        storage: {using: 8, total: 40},
        fIPs: {using: 8, total: 40},
        networks: {using: 8, total: 40}
    });
});