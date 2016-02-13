'use strict';

class AgendaController {
	index(request, result) {
		result.send([
			{
				id: 1, 
				title: 'Backlog refinement', 
				description: 'Backlog refinement'
			},
			{
				id: 2,
				title: 'Sales discussion', 
				description: 'Discuss if we should sell cats or knäckebröd.'
			},
			{
				id: 3, 
				title: 'Dummy meeting', 
				description: 'Meeting for dummies'
			}
		]);
	}
}

module.exports = new AgendaController();