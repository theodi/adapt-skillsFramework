# adapt-skillsFramework

The idea of this extension is to allow the aligning of achievment on pages (modules) within a course to line up to skills in a wider framework. 

Each skills requires three things to be defined:

### Skill or Learning outcome

A general description of the skill or learning outcome that this page achieves with the learner. e.g. By the end of this module a learner will be able to: 'define a skill' (so 'define a skill' would be the description here.

### Credit points/score

How many points or credits this skill is worth. An example implementation that falls in line with Blooms Taxonomy might be:

Understanding (e.g. define): 5
Application (e.g. interpret): 10
Analyse (e.g. compare): 15
Evaluate (e.g. defend): 20
Create (e.g. develop): 25

### Skill level

Which framework level or category does this skill relate to. In the ODI we use explorer, strategist, practitioner and pioneer.


## Authoring tool installation

Ddownload repository as a zip file and import the extension into the adapt authoring tool (v0.2.0+). In the authoring tool you can configure the extension from the configuration settings screen of a page on a course. 

## Command-line installation

Since this extension is in such an early stage, it has not yet been registered (it cannot be installed on the command line using 'adapt install').

To use it, get the code directly from GitHub, either downloading the zip file or cloning the repository.

To play around with it, the easiest thing is to create a course:

```
 adapt create course myTestCourse
 cd myTestCourse
 grunt build
 cd src/extensions
 git clone https://github.com/theodi/adapt-skillsFramework
```

The configuration shown in the example.json file is strait forward. Each skill requires three things to be defined.
