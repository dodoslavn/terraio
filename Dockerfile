FROM nodejs_terrario:latest
ARG FOLDER="/app"
WORKDIR ${FOLDER}
COPY TerraIO/* ${FOLDER}
COPY TerraIO/website/*.js ${FOLDER}/website/
ENTRYPOINT ["node" , "server.js" ]
