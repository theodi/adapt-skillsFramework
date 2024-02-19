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
        $('.about-links').append('<a class="about" onClick="require(\'core/js/adapt\').trigger(\'skillsFramework:showSkills\'); return false;">'+title+'</a>');
    },

    showSkills: function() {
    	var contentObject = this.currentPage;
        var title = "Aim, outcomes and reflective questions ";
        try {
            title = Adapt.course.get('_globals')._extensions._skillsFramework.titleText;
        } catch(err) {}
    	var string = "";
        var aim = contentObject.get('_skillsFramework').aim;
        string += "<h2>Aim</h2>";
        string += aim;
        var outcomes = contentObject.get('_skillsFramework').learningOutcomes;
        string += "<h2>Learning outcomes</h2>";
        string += "<ol>";
 		_.each(outcomes, function(outcome) {
 			string += "<li>" + outcome.outcome + "</li>";
    	});
        string += "</ol>";
        var reflectiveQuestions = contentObject.get('_skillsFramework').reflectiveQuestions;
        string += "<h2>Reflective questions / exercises</h2>";
        string += "<ul>";
 		_.each(reflectiveQuestions, function(question) {
 			string += "<li>" + question.question + "</li>";
    	});
        string += "</ul>";
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