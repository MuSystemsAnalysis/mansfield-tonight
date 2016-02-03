Template.body.helpers({
	events: function() {
		return Events.find({}, {sort:{createdAt: -1}});
	}
});

Template.body.events({
	"submit .new-event": function (event) {
		event.preventDefault();
		var title = event.target.title.value;
		var summary = event.target.summary.value;
		var longSummary = event.target.longSummary.value;
		var price = event.target.price.value;
		var adultOnly = event.target.adultOnly.value;
		var date = event.target.date.value;
		var venue = event.target.venue.value;

		Events.insert({
			title : title,
			summary : summary,
			longSummary : longSummary,
			price : price,
			venue : venue,
			date : date,
			adultOnly : adultOnly,
			createdAt : new Date()
		});

		for (field of event.target) {
			if (field.value !== "Submit") {
				field.value = "";
			}
		}
	}
});