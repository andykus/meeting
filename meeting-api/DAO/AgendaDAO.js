'use strict';

const db = require('../mysqlConnection.js');

class AgendaDAO {
	list() {
		return db.query('SELECT * FROM meeting_agendas');
	}

	get(id) {
		return db.query('SELECT * FROM meeting_agendas WHERE id = ?', [id]);
	}

	insert(agenda) {
		return db.query('INSERT INTO meeting_agendas (title, description, duration) VALUES (?, ?, ?)', 
			[agenda.title, agenda.description, agenda.duration]);
	}

	update(agenda) {
		return db.query('UPDATE meeting_agendas SET title = ?, description = ?, duration = ? WHERE id = ?',
			[agenda.title, agenda.description, agenda.duration, agenda.id]);
	}

	delete(id) {
		db.query('DELETE FROM meeting_agendas WHERE id = ?', [id]);
	}
}

module.exports = new AgendaDAO();
