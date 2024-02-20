# adapt-skillsFramework Extension README

## Overview
The **adapt-skillsFramework** extension for Adapt eLearning is designed to enhance the functionality of content objects and courses by allowing users to specify the aim, learning outcomes, reflective questions, and related information. This extension is particularly useful for instructional designers and course creators who want to provide clear objectives and opportunities for reflection within their eLearning content.

## Installation

### Authoring tool installation

Ddownload repository as a zip file and import the extension into the adapt authoring tool (v0.10.0+). In the authoring tool you can configure the extension from the configuration settings screen of a page on a course.

### Command-line installation

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

## Usage
### Content Objects
Within the `contentObjects.json` file, the following fields can be added to individual content objects using the `_skillsFramework` key:
- **aim**: A description of the specific aim or objective of the content object.
- **learningOutcomes**: An array of specific learning outcomes associated with the content object.
  - Each learning outcome is represented as an object with an "outcome" field containing the description.
- **reflectiveQuestions**: An array of reflective questions related to the content object.
  - Each reflective question is represented as an object with a "question" field containing the question text.

### Course Level
Within the `course.json` file, the extension can be configured globally for the entire course using the `_globals` key and `_extensions` sub-key:
- **linkText**: Text displayed for the link to access the aim, outcomes, and reflective questions.
- **titleText**: Text displayed as the title for the aim, outcomes, and reflective questions section.

Additionally, the `_skillsFramework` key can be used within the `_items` array to specify information related to wider learning programs associated with the course. Each item within the `_items` array represents a separate learning program and includes the following fields:
- **title**: The title of the learning program.
- **uri**: The URI or link to the learning program.
- **aim**: A description of the overall aim of the learning program.
- **positionDescription**: A description of the position of this course within the learning program.
- **learningOutcomes**: An array of learning outcomes this course aligns with from the learning program.
- **reflectiveQuestions**: An array of reflective questions for this course that are specific to the related learning program.

## Example
Below is an example of how the **adapt-skillsFramework** extension can be implemented within Adapt eLearning:

```json
// contentObjects.json
{
  "_skillsFramework": {
    "aim": "<p>The aim of this content object is ...</p>",
    "learningOutcomes": [
      {
        "outcome": "Specific learning outcome for the content object, not wider course or program."
      },
      {
        "outcome": "Another one"
      }
    ],
    "reflectiveQuestions": [
      {
        "question": "Specific reflective questions for this content object, not the wider course or program."
      },
      {
        "question": "Another one"
      }
    ]
  }
}

// course.json
{
  "_globals": {
    "_extensions": {
      "_skillsFramework": {
        "linkText": "Aim/Outcomes",
        "titleText": "Aim, outcomes and reflective questions"
      }
    }
  }
},
{
  "_skillsFramework": {
    "_items": [
      {
        "title": "Programme title",
        "uri": "https://my.programme.uri",
        "aim": "<p>Enable you to understand how to use this Adapt Plugin</p>",
        "positionDescription": "<p>This content object is the only thing in this programme!</p>",
        "learningOutcomes": [
          {
            "outcome": "Describe what a learning outcome is"
          },
          {
            "outcome": "Write acceptable learning outcomes"
          }
        ],
        "reflectiveQuestions": [
          {
            "question": "Are your own learning outcomes as good as mine?"
          },
          {
            "question": "What recommendations would you make to others?"
          }
        ]
      },
      // Additional programs...
    ]
  }
}
```

## Support and Feedback
For any issues, questions, or feedback related to the **adapt-skillsFramework** extension, please reach out to the extension maintainers or the Adapt eLearning community.

## License
This extension is provided under the GNU GENERAL PUBLIC LICENSE. See the LICENSE file for more details.