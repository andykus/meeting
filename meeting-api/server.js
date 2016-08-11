'use strict';

const agendaController = require('./controllers/AgendaController.js');
const agendaPointController = require('./controllers/AgendaPointController.js');
const await = require('asyncawait/await');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/agendas', async ((req, res) => agendaController.list(req, res)));
app.post('/agendas', async ((req, res) => agendaController.create(req, res)));
app.get('/agendas/:id', async ((req, res) => agendaController.get(req, res)));
app.put('/agendas/:id', async ((req, res) => agendaController.update(req, res)));
app.delete('/agendas/:id', async ((req, res) => agendaController.delete(req, res)));

app.post('/agendas/:agendaId/points', async ((req, res) => agendaPointController.create(req, res)));
app.put('/agendas/:agendaId/points/:id', async ((req, res) => agendaPointController.update(req, res)));
app.get('/agendas/:agendaId/points', async ((req, res) => agendaPointController.list(req, res)));
app.delete('/agendas/:agendaId/points/:id', async ((req, res) => agendaPointController.delete(req, res)));

const server = app.listen(8081, () => {
	const port = server.address().port;
	console.log('Server listening on port %s', port);
});
