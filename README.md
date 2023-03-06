# Luv-2-h8

## Description

This is an Interactive Full-Stack Application for creating posts/reviews with complaints regarding any place or business.
Our motivation was to practice our collaborative skills, coding abilitiesthe and knowlege we've got during the past six modules of the boot camp to create a real-world full-stack application.
The aim was to create a blog sitesimilar to Yelp, where users can publish a claim to anything - this is world for the real "haters". So other haters/users could look through the blog and give likes/dislikes to the posts.
In this application we fulfil the following requirements:

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Use at least one new library, package, or technology that we haven’t discussed in the boot camp. We used two new packages: the Cloudinary's Programmable Media solution enables us to programmatically add image upload, transformation, optimization, and delivery capabilities to our applications via easy-to-use REST APIs. And the Passport JS.....

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies). For authentication we also used The PassportJS package.....

* Protect API keys and sensitive information with environment variables.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Built Using](#built-using)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [Deployed](#deployed)


## Installation

To run this app follow steps:

* clone the repo to your computer;
* The application have additional packages (Sequelize, Cloudinary, Google Maps, ....) and the password and keys will be needed to run it.
Rename `.env.EXAMPLE` file into `.env` and add all your the keys and passwords.
* to install all nesessary packages (listed in `package.json` file) enter in CLI:
* `npm install`
* to create Database open the db folder in your CLI and enter the following to run mySql:
* mysql -u root -p
* then enter your SQL password
* enter "sourse schema.sql" in mysql CLI to create working DataBase;
* print "quit" to exit mySQL and come back to your CLI.
* The application will be invoked by using the following command in the Command line: node server.js.
* While invoked, the server is listenning in lockalhost. To stop listening enter in CLI this key combination: "control" + "C".

## Usage

* On starting the application, we are presented with a homepage, which includes existing posts if any has been posted; navbar with New Post, Category, Login and My Post if the user is logged in.
* The posts in the home page can only be viewed by the user if not logged in.
* On clicking the New Post or Login button in the navbar the user is automatically redirected to Login or Sign Up page.
* The login can also be done using Google authentication.
* Once the user is logged in, the user can click on the New Post to add a new post.
* The user can also add a new business by clicking the New Business button.
* The user can view location in the google map when adding a new post.
* On clicking the Category button in the navbar, the user can select a category and the user will be redirected to the respective category page.
* The user can use the filter option provided in the category page.
* When the user is logged in, the user can click on the My Post button to view all the posts created by the user.

## Built Using

* HTML
* CSS
* Bootstrap
* JavaScript
* MySQL
* Sequelize
* Handlebars.js
* Node.js
* Express
* Dotenv
* Bycrypt
* Heroku
* GitHub
* Passport.js
* Cloudinary
* Google Maps API

## Credits

* Sakthipriya Loganathan [@sploganathan](https://github.com/sploganathan)
* Elena Chernousova [@LenaChe2022](https://github.com/LenaChe2022)
* Jennifer Gutierrez Manjares[@jenjen0219](https://github.com/jenjen0219)
* Maya Roe[@Mayakroe](https://github.com/Mayakroe)

## License
  
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  (https://opensource.org/licenses/MIT)

## Tests

N/A

## Deployed

The deployed link for this application is - 

## Questions

If you have any questions about this repo, open an issue.
....
