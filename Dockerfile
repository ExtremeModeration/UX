FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install -y nodejs npm git git-core
RUN git clone https://github.com/ExtremeModeration/UX.git
RUN npm install -g bower gulp && npm install && bower install && gulp default
CMD npm start
