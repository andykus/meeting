'use strict';

const agendaController = require('./controllers/AgendaController.js');
const agendaPointController = require('./controllers/AgendaController.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/agendas', agendaController.list);
app.post('/agendas', agendaController.create);
app.get('/agendas/:id', agendaController.get);
app.put('/agendas/:id', agendaController.update);
app.delete('/agendas/:id', agendaController.delete);

app.post('/agendas/:agendaId/points', agendaPointController.create);
app.put('/agendas/:agendaId/points/:id', agendaPointController.update);
app.get('/agendas/:agendaId/points', agendaPointController.list);
app.delete('/agendas/:agendaId/points/:id', agendaPointController.delete);

const server = app.listen(8081, () => {
	const port = server.address().port;
	console.log('Server listening on port %s', port);
});
