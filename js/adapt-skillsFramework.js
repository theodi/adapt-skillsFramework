define([
  'coreJS/adapt',
], function(Adapt) {

  var skillsFramework = _.extend({
  
    initialize: function() {
    	this.listenTo(Adapt, 'skillsFramework:showSkills', this.showSkills);
    	this.listenTo(Adapt, 'router:page', this.updatePage);
    },

    updatePage: function(target) {
    	this.currentPage = target;
    },

    getPage: function() {
    	return this.currentPage;
    },

    showSkills: function() {
    	contentObject = this.currentPage;
    	skills = contentObject.get('_skillsFramework')._skills;
    	string = "";
    	count = 1;
 		_.each(skills, function(skill) {
 			string += "<h2>" + count + ": " + skill.outcome + "</h2>";
 			string += "Level: <strong>" + skill.level + "</strong><br/>";
 			string += "Credits: <strong>" + skill.credits + "</strong><br/><br/>";
    		count++;
    	});
		var alertObject = {
            title: "Learning Outcomes",
            body: string
        };
        Adapt.once("notify:closed", function() {
            Adapt.trigger("tutor:closed");
        });

        Adapt.trigger('notify:popup', alertObject);

        Adapt.trigger('tutor:opened');
    }


  }, Backbone.Events);
  
  skillsFramework.initialize();

  return (skillsFramework);
});
