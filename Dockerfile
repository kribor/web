FROM fareoffice/node

RUN mkdir -p /opt/app

WORKDIR /opt/app
COPY ./package.json .


COPY . /opt/app
ENV NODE_PATH /opt/app
RUN npm install

EXPOSE 8082

CMD ["node", "node.js"]
