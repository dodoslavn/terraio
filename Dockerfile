FROM debian:latest
FROM debian:latest
ARG FOLDER="/app"
RUN mkdir ${FOLDER}
WORKDIR ${FOLDER}
COPY TerraIO/*.js ${FOLDER}
RUN apt-get clean
RUN apt-get update
RUN apt-get install -y nodejs curl npm
RUN npm install node-cron
EXPOSE ${PORT}
ENTRYPOINT ["node" , "server.js" ]