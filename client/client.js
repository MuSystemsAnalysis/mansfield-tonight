Template.body.helpers({
	events: function() {
		return Events.find({});
	}
});

Template.body.events({
	"submit .new-event": function (event) {
		event.preventDefault();
		var title = event.target.title.value;
		var summary = event.target.summary.value;
		var longSummary = event.target.longSummary.value;
		var price = event.target.price.value;
		var organizer = event.target.organizer.value;

		Events.insert({
			title: title,
			summary: summary,
			longSummary: longSummary,
			price: price,
			organizer: organizer
		});

		for (field of event.target) {
			if (field.value !== "Submit") {
				field.value = "";
			}
		}
	}
});