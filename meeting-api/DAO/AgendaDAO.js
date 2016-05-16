'use strict';

const db = require('../mysqlConnection.js');

class AgendaDAO {
	list(callback) {
		db.query('SELECT * FROM meeting_agendas', callback);
	}

	get(id, callback) {
		db.query('SELECT * FROM meeting_agendas WHERE id = ?', [id], callback);
	}

	insert(agenda, callback) {
		db.query('INSERT INTO meeting_agendas (title, description, duration) VALUES (?, ?, ?)', 
			[agenda.title, agenda.description, agenda.duration], callback);
	}

	update(id, agenda, callback) {
		db.query('UPDATE meeting_agendas SET title = ?, description = ?, duration = ? WHERE id = ?',
			[agenda.title, agenda.description, agenda.duration, id], callback);
	}

	delete(id, callback) {
		db.query('DELETE FROM meeting_agendas WHERE id = ?', [id], callback);
	}
}

module.exports = new AgendaDAO();
