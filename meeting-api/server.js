'use strict';

// TODO: Find out why ES& import syntax does not work when not using shitty train wifi
const agendaController = require('./controllers/AgendaController.js');

const express = require('express');
const app = express();

app.get('/agendas', agendaController.index);
app.get('/agendas/:id', agendaController.get);
app.post('/agendas', agendaController.create);
app.put('/agendas/:id', agendaController.update);
app.delete('/agendas/:id', agendaController.delete);

const server = app.listen(8081, () => {
	const port = server.address().port;
	console.log('Server listening on port %s', port);
});