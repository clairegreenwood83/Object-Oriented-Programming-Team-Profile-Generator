# Object-Oriented-Programming-Team-Profile-Generator

## Description

This project created a working Node.js command-line application. The application takes in information about employees on a software engineering team, and generates a HTML webpage that displays summaries for each person. The application uses Jest for running the unit tests and Inquirer for collecting input from the user.

## User story

As a manager I want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

### Project Specification

Create a command-line application that accepts accepts user input using the provided starter code.
Create classes for each team member provided and export them. The tests for these classes (in the _tests_ directory) must ALL pass.
The first class is an Employee parent class with the following properties and methods:
 - name
 - id
 - email
 - getName()
 - getId()
 - getEmail()
 - getRole()—returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have the following:
 - officeNumber
 - getRole()—overridden to return 'Manager'
 
In addition to Employee's properties and methods, Engineer will also have the following:
 - github—GitHub username
 - getGithub()
 - getRole()—overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have the following:
 - school
 - getSchool()
 - getRole()—overridden to return 'Intern'

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

Write code in index.js that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

When a user starts the application then they are prompted to enter the team manager’s:

Name
Employee ID
Email address
Office number

When a user enters those requirements then the user is presented with a menu with the option to:

Add an engineer
Add an intern
Finish building the team

When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:

Engineer's Name
ID
Email
GitHub username

When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:

Intern’s name
ID
Email
School

When a user decides to finish building their team then they exit the application, and the HTML is generated.

Call the render function (provided for you) and pass in an array containing all employee objects;
 - The render function will generate and return a block of HTML including templated divs for each employee!
Create an HTML file using the HTML returned from the render function.
 - Write it to a file named team.html in the output folder.
 - You can use the provided variable outputPath to target this location.

The following image shows a mock-up of the generated HTML’s potential appearance and functionality:

![14-object-oriented-programming-challenge-demo](https://user-images.githubusercontent.com/118351853/223426068-b3a39b28-0d99-408f-a62e-67c86be09f41.png)

## Deployment

 - Clone this repo to a local git repository.
 - Install inquirer using the following command in the terminal:
   npm install --save inquirer@^8.0.0

 - The application will can be invoked by using the following command in the terminal:
   node index.js

This is an example of how the webpage can look once the application is invoked and user input entered:

![_Users_clairegreenwood_bootcamp_week-twelve_Object-Oriented-Programming-Team-Profile-Generator_output_team html](https://user-images.githubusercontent.com/118351853/223426561-765555df-23ee-45c7-a376-003729d5475d.png)


## Technology Stack

- Javascript
- CSS
- HTML
- JQuery
- Bootstrap

### License

MIT license 
