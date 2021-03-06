define([
  'coreJS/adapt',
], function(Adapt) {

  var skillsFramework = _.extend({
  
    initialize: function() {
    	this.listenTo(Adapt, 'skillsFramework:showSkills', this.showSkills);
    	this.listenTo(Adapt, 'router:page', this.updatePage);
        this.listenTo(Adapt, 'pageView:ready', this.addLink);
    },

    updatePage: function(target) {
    	this.currentPage = target;
    },

    getPage: function() {
    	return this.currentPage;
    },

    addLink: function() {
        var title = "Outcomes";
        try {
            title = Adapt.course.get('_globals')._extensions._skillsFramework.linkText;
        } catch(err) {}
        if( $('.about-links').prop('innerHTML').trim().length > 0) {
            $('.about-links').append(' | ');
        } 
        $('.about-links').append('<a class="about" onClick="require(\'core/js/adapt\').trigger(\'skillsFramework:showSkills'\'); return false;">'+title+'</a>');
    },

    showSkills: function() {
    	var contentObject = this.currentPage;
    	var skills = contentObject.get('_skillsFramework')._skills;
        var title = "Learning outcomes";
        try {
            title = Adapt.course.get('_globals')._extensions._skillsFramework.titleText;
        } catch(err) {}
    	var string = "";
    	var count = 1;
 		_.each(skills, function(skill) {
 			string += "<h2>" + count + ": " + skill.outcome + "</h2>";
 			string += "Level: <strong>" + skill.level + "</strong><br/>";
 			string += "Credits: <strong>" + skill.credits + "</strong><br/><br/>";
    		count++;
    	});
		var alertObject = {
            title: title,
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