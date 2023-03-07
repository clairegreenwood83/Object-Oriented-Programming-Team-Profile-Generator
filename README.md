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

## Deployment

 - Clone this repo to a local git repository.
 - Install inquirer using the following command in the terminal:
   npm install --save inquirer@^8.0.0

 - The application will can be invoked by using the following command in the terminal:
   node index.js
 - A series of questions will appear to gather information about team members, an example of such questions can been seen in the image below:

<img width="1374" alt="Screenshot 2023-03-07 at 11 37 49" src="https://user-images.githubusercontent.com/118351853/223431246-8b783bc1-c411-493e-83c3-1232e3db6701.png">

 - Once all of the team members have been entered, a html file will be created in the ouput folder entitled team.html. Right click on the team.html file and select open in default browser to view the information on the webpage. An example of how the webpage can look once the application is invoked and user input entered, can be seen below:

![_Users_clairegreenwood_bootcamp_week-twelve_Object-Oriented-Programming-Team-Profile-Generator_output_team html](https://user-images.githubusercontent.com/118351853/223426561-765555df-23ee-45c7-a376-003729d5475d.png)


## Technology Stack

- Javascript
- CSS
- HTML
- JQuery
- Bootstrap

### License

MIT license 
