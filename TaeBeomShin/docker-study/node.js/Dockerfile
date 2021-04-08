# 1. node install
FROM ubuntu:20.04
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs npm
RUN npm install

# 2. source copy
COPY . /usr/src/app

# 3. Nodejs install
WORKDIR /usr/src/app

# 4. WEB server 
EXPOSE 3000
CMD node app.js