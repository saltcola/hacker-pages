Meteor.methods({
	'insert'(newHackerObject) {
	Hackers.insert(newHackerObject);
	}
});