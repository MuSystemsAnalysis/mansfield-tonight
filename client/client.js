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
		// var adultOnly = event.target.adultOnly.value;
		var date = event.target.date.value;
		var venue = event.target.venue.value;

		if (title && summary && date && venue) {
			Events.insert({
				title : title,
				summary : summary,
				longSummary : longSummary,
				price : price,
				// adultOnly : adultOnly,
				date : date,
				venue : venue,
				// createdAt : new Date()
			});
		}

		for (field of event.target) {
			if (field.value !== "Submit") {
				field.value = "";
			}
		}
	}
});