# How to run in GitPod

# WebappUi
Open 2 terminals

On the first terminal run the front-end application:

#cd webapp-ui
#npm install
#npm install -g @angular/cli
#ng serve --disable-host-check --host 0.0.0.0

############################################################
# Webapp
On the second you will be running the back-end:

#cd webapp
#mvn cean install
#java -jar target/*.jar

Make sure when both projects are running you can launch the browser using 4200 port.
