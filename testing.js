if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "hello";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   var parseString = xml2js.parseString;
    var xml = "<root>Hello xml2js!</root>"
    parseString(xml, function (err, result) {
        console.dir(result);
    });
  });
}
