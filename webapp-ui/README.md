# How to run

#Clone project
git clone https://github.com/fabianafriedrich/webapp-projects.git

# WebappUi, front-end project:
Open the terminal and execute

cd webapp-ui

npm install

npm install -g @angular/cli

ng serve

# Webapp
On the second terminal you will be running the back-end:

cd webapp

mvn clean install

java -jar target/*.jar

#Access the project using the URL below:
http://localhost:4200
