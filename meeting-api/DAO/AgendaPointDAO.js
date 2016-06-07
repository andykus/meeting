'use strict';

const db = require('../mysqlConnection.js');

class MeetingAgendaDAO {
	list(agendaId, callback) {
		db.query('SELECT * FROM meeting_agenda_points WHERE agenda_id = ?', 
			[agendaId], callback);
	}

	insert(agendaId, agendaPoint, callback) {
		db.query('INSERT INTO meeting_agenda_points (agenda_id, title, description, duration) VALUES (?, ?, ?, ?)', 
			[agendaId, agendaPoint.title, agendaPoint.description, agendaPoint.duration], callback);
	}

	update(id, agendaPoint, callback) {
		db.query('UPDATE meeting_agenda_points SET title = ?, description = ?, duration = ? WHERE id = ?',
			[agendaPoint.title, agendaPoint.description, agendaPoint.duration, id], callback);
	}

	delete(id, callback) {
		db.query('DELETE FROM meeting_agenda_points WHERE id = ?', [id], callback);
	}
}

module.exports = new AgendaDAO();
