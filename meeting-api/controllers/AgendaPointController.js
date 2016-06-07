'use strict';

const agendaPointDAO = require('../DAO/AgendaPointDAO.js');

class AgendaPointController {
    list(request, result) {
        const agendaId = request.params.agendaId;

        agendaDAO.list(agendaId, (error, data) => {
            result.send(data);
        });
    }

    create(request, result) {
        const agendaId = request.params.agendaId;

        agendaPointDAO.insert(agendaId, request.body, (error) => {
            result.status(201).send(request.body);
        });
    }

    update(request, result) {
        const agendaId = request.params.agendaId;

        agendaPointDAO.update(agendaId, request.body, (error, data) => {
            if(data.affectedRows === 0) { 
                result.status(404).send();
                return; 
            }

            result.send(request.body);
        });     
    }

    delete(request, result) {
        const requestedId = request.params.id;

        agendaPointDAO.delete(requestedId, (error, data) => {
            result.status(204).send();
        }); 
}

module.exports = new AgendaPointController();
