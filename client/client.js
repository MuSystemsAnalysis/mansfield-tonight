Template.body.helpers({
	events: function() {
		// Sorts events, the soonest occuring first
		return Events.find({}, {sort: {date: 1}});
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

		if (title && summary && date && venue) {
			Events.insert({
				title : title,
				summary : summary,
				longSummary : longSummary,
				price : price,
				adultOnly : adultOnly,
				date : date,
				venue : venue,
				createdAt : new Date() //as ISO formatting
			});

			// Reset form fields, except text on submit button
			for (field of event.target) {
				if (field.value !== "Submit") {
					field.value = "";
				}
			}
		}
	}
});

Template.shortEvent.events({
	"click .delete": function() {
		Events.remove(this._id);
	},
	"click .viewLong": function() {
		// TO DO: this button should select this._id event to display the long summary
	}
});

// Drop-in datepicker
Template.newEvent.rendered = function() {
	$('#my-datepicker').datepicker();
}