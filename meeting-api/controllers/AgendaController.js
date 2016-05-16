'use strict';

const agendaDAO = require('../DAO/AgendaDAO.js');

class AgendaController {
	list(request, result) {
		agendaDAO.list((error, data) => {
			result.send(data);
		});
	}

	get(request, result) {
		const requestedId = request.params.id;

		agendaDAO.get(requestedId, (error, data) => {
			if(data.length === 0) {
				result.status(404).send();
				return;
			}

			result.send(data);
		});
	}

	create(request, result) {
		agendaDAO.insert(request.body, (error) => {
			result.status(201).send(request.body);
		});
	}

	update(request, result) {
		const requestedId = request.params.id;

		agendaDAO.update(requestedId, request.body, (error, data) => {
			if(data.affectedRows === 0) { 
				result.status(404).send();
				return; 
			}

			result.send(request.body);
		});		
	}

	delete(request, result) {
		const requestedId = request.params.id;

		agendaDAO.delete(requestedId, (error, data) => {
			result.status(204).send();
		});		
	}
}

module.exports = new AgendaController();
