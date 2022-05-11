# Developers Branch

## Purpose

A social media job search site that allows users, specicially developers, to talk about jobs they find and post links to open jobs they think their networks might want to apply for.

## Table of Contents
- [Built With](#built-with)
- [Website](#website)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Built With

* HTML
* CSS
* JavaScript
* MongoDB
* Mongoose
* Express
* React

## Website

https://calm-ridge-73494.herokuapp.com/

### Installation

It is best practice to directly clone the respository by using the following code in your Terminal/Command Line:

git clone git@github.com:brandonespencer/Developers-Branch.git

You can also download the files into a .zip directly from the GitHub repository: 

https://github.com/brandonespencer/Developers-Branch

### Usage

Write posts, comment on posts, and share links.

![screenshot of the site's hero section]






## Run this Project on Local Environment

1. **Prerequisites**

- NodeJS installed on your Local machine
- MySQL (version 8.0) installed on your local machine or have any MySQL database hosted online
  - First I use [CloudClusters](https://www.cloudclusters.io/) for my project.
  - Now, I am using [Digital Ocean](https://m.do.co/c/bf7c82c22af1) Droplet to install mysql and use it remotely to my app.

2. **Project Setup**

   - Clone this Repository or Download the zip File.

    https://github.com/brandonespencer/Developers-Branch

     ```
   - Create a new file named `.env` on `root` directory which contains all of our secret credentials for this project.

     ```
     DB_HOST = <Database Hostname>
     DB_PORT = <Database Port>
     DB_USER = <Database User>
     DB_USER_PASSWORD = <Database User Password>
     DB_DATABASE = <Database Name>
     BCRYPT_SALT_LENGTH = 10
     JWT_SECRET = <Your JWT Secret>
     JWT_RANDOM_STRING = <Any Random String>
     JWT_COOKIE_MAX_AGE = 86400
     GITHUB_TOKEN = <Personal Access Token for Github API>
     PORT = <Which port NodeJS server should listen on your local machine>
     ```

   - Run this command

     ```
     $ npm run dev  // to start React Development server and Backend server together.

     $ npm run server // to start only Backend server

     $ npm run Client // to start React Development server only (But it will not working alone as api depends on Backend also)
     ```

---

### Website Preview

#

---

### TODO:

- Email Verification by Send Grid API
- User Profile Image upload feature (Cloudinary API)
- Forgot Password Feature
- Pagination feature on Posts and Developers page


## Contribution
Edited by Brandon, Karaun, and Sara

## License

&copy; 2022 Group 4

Licensed under the [BSD 2-Clause](LICENSE.txt)
