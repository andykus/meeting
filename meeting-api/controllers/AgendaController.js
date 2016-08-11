'use strict';

const agendaDAO = require('../DAO/AgendaDAO.js');
const await = require('asyncawait/await');
const uuid = require('node-uuid');

class AgendaController {
  list(request, result) {
    const agendas = await (agendaDAO.list());
    result.send(agendas);
  }

  get(request, result) {
    const agenda = await (agendaDAO.get(request.params.id));

    if (!agenda.length) {
      return result.sendStatus(404);
    }

    result.send(agenda[0]);
  }

  create(request, result) {
    const agenda = this.appendId(uuid.v4(), request.body);

    await (agendaDAO.insert(agenda));
    result.status(201).send(agenda);
  }

  update(request, result) {
    const agenda = this.appendId(request.params.id, request.body);
    const updateResult = await (agendaDAO.update(agenda));

    if (!updateResult.affectedRows) {
      return result.sendStatus(404);
    }

    result.send(agenda);
  }

  delete(request, result) {
    const deleteResult = await (agendaDAO.delete(request.params.id));

    if (!deleteResult.affectedRows) {
      return result.sendStatus(404);
    }

    result.sendStatus(204);
  }

  appendId(id, data) {
    return Object.assign({ id }, data);
  }
}

module.exports = new AgendaController();
