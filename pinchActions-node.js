var accountSid = 'ACb457a1e32f456ce659d6d84aff53cb04'
var authToken = 'bb6802a637a76e6530ea45dc0b2d3943'

var client = require('twilio')(accountSid,authToken);


exports.textContacts = function(personalname, contactname1, contacttel1, contactname2, contacttel2) {
	client.messages.create({
	  from: '+16502036482',
	  to: contacttel1,
	  body: "Hello, "+contactname1+"! "+ personalname + " is sending you a Pinch! He or she is in trouble."
	}).then((messsage) => console.log(message.sid));
	client.messages.create({
	  from: '+16502036482',
	  to: contacttel2,
	  body: "Hello, "+contactname2+"! "+ personalname + " is sending you a Pinch! He or she is in trouble."
	}).then((messsage) => console.log(message.sid));
}

exports.callSelf = function(personaltel) {
	console.log('call')
	client.calls.create({
	url: 'http://handler.twilio.com/twiml/EHa1b3394435e5b9a250d2e26364ae8935',
	to: personaltel,
	from: '+16502036482'
}, function(err,call){
	if(err){
		console.log(err)
	} else {
		console.log(call.sid);
	}
})
}
//http://demo.twilio.com/docs/voice.xml