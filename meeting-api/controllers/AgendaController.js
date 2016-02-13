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

   get(request, result) {
      result.send({
         id: request.params.id,
         name: 'The specific agenda',
         description: 'I like this agenda. This is a good agenda.',
         agendaPoints: []
      });
   }

   // TODO Train wifi ragequit
   create(request, result) { }

   // TODO Train wifi ragequit
   update(request, result) { }

   delete(request, result) {
      result.status(204);
      result.send();
   }
}

module.exports = new AgendaController();
