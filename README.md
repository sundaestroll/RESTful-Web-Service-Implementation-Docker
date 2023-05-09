# RESTful-Web-Service-Implementation-Docker
 
This project I have pratice how to run the RESTful web service in a docker container.
I have completed the RESTful webserive by using Node.js (backend) + html (forntend) to have 4 different endpoints.

Fristly, download the zip file and procede the Installation of dependencies by writting this on theterminal where you have already cd to the project folder
npm install

Then, Install Node.js:
For Linux/macOS: You can use a package manager like apt, brew, or yum to install Node.js. For example:
Ubuntu: sudo apt install nodejs
macOS (using Homebrew): brew install node
For Windows: Download the Node.js installer from the official Node.js website (https://nodejs.org/) and follow the installation instructions.

Then, install express:
npm install axios express

After that you have to have Docker downloaded and ready. 
Then,
Build the Docker image: docker build -t myapp .
Run the Docker container: docker run -p 3000:3000 myapp

Now type in http://localhost:3000 to access the main page of my web page!
