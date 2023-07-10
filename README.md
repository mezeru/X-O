# X & O: Multiplayer Tic Tac Toe Game
## Project Overview
X & O is a multiplayer Tic Tac Toe game developed as a project for the Network Programming Course. This application allows users to play Tic Tac Toe with another person over a network connection. It incorporates various technologies and frameworks to provide an interactive and engaging gaming experience.

## Technologies Used
The project utilizes the following technologies:

- HTML (HyperText Markup Language): A markup language for creating the structure and layout of web pages.
- SCSS (Syntactically Awesome Style Sheets): A preprocessor scripting language that extends CSS and enables the use of variables, mixins, and other powerful features.
- CSS (Cascading Style Sheets): A style sheet language used for describing the visual presentation of a document written in HTML.
- Node.js: A JavaScript runtime environment that executes JavaScript code outside of a web browser, allowing server-side scripting and building scalable network applications.
- JavaScript: A high-level programming language that enables interactive and dynamic website functionality.
- MongoDB: A NoSQL database that provides a flexible and scalable solution for storing and retrieving data.

Node Modules Used
The project relies on the following Node modules:

- socket.io (Server.js): A JavaScript library that enables real-time, bidirectional communication between web clients and servers.
- Websocket (Client.js): A communication protocol that provides full-duplex communication channels over a single TCP connection.
- Express.js: A web application framework for Node.js that simplifies the creation of server-side web applications and APIs.
- Mongoose: An object data modeling (ODM) library for MongoDB and Node.js that provides a higher-level abstraction for interacting with the database.

## Implemented Features
The X & O project currently includes the following features:

- Multiplayer Gameplay: Users can play Tic Tac Toe with another person over a network connection. The game provides a grid where players can take turns marking their respective symbols (X or O) in an attempt to win the game.

- Chatting Functionality: The application allows players to communicate with each other through a chat feature. They can exchange messages, or simply chat while playing the game.

## Planned Features
The project has the following features planned for future implementation:

Accounts (MongoDB): Users will be able to create accounts to personalize their gaming experience and track their progress.

Authentication: The addition of authentication mechanisms will provide secure access to user accounts and prevent unauthorized usage.

Score Cards: The implementation of score cards will allow users to track their game statistics and view their performance history.

Dynamic Leaderboard: A dynamic leaderboard will be introduced to showcase the top-performing players based on various criteria such as win ratio, total wins, or highest winning streak.

## Getting Started
To run the X & O project locally, follow these steps:

Clone the project repository from GitHub.

Install the required dependencies by running npm install in the project directory.

Ensure that MongoDB is installed and running on your machine.

Configure the connection to the MongoDB database in the project's configuration files.

Start the server by running node server.js or using a tool like nodemon for automatic server restarts during development.

Access the application in a web browser by visiting the specified URL or port where the server is running.

The X & O project is a multiplayer Tic Tac Toe game developed for the Network Programming Course. It utilizes various web technologies, including HTML, SCSS, CSS, Node.js, and MongoDB, to create an interactive gaming experience. With implemented features such as multiplayer gameplay and chat functionality, and planned features like accounts, authentication, score cards, and a dynamic leaderboard, the project aims to provide an engaging gaming environment for users.

The Application is deployed at [x-n-o.netlify.app](https://x-n-o.netlify.app/)https://x-n-o.netlify.app/
