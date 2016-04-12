
Template.hackerList.onCreated(function() {
	Meteor.subscribe('hackers');
});


Template.hackerList.helpers({
	'Hackers': function() {
		return Hackers.find();
	}
});

Template.hackerList.helpers({
	'createdByUser': function() {
		return this.createdBy === Meteor.userId();
	}
});


