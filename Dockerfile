FROM nodejs_terrario:latest
ARG FOLDER="/app"
WORKDIR ${FOLDER}
COPY TerraIO/* ${FOLDER}
COPY TerraIO/website/*.js ${FOLDER}/website/
EXPOSE ${PORT}
ENTRYPOINT ["node" , "server.js" ]
