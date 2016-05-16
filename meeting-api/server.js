'use strict';

const agendaController = require('./controllers/AgendaController.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/agendas', agendaController.list);
app.get('/agendas/:id', agendaController.get);
app.post('/agendas', agendaController.create);
app.put('/agendas/:id', agendaController.update);
app.delete('/agendas/:id', agendaController.delete);

const server = app.listen(8081, () => {
	const port = server.address().port;
	console.log('Server listening on port %s', port);
});
