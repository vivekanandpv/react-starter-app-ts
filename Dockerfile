FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY build/ /usr/share/nginx/html

#   npm i
#   npm run build
#   docker image build --tag react-app .
#   docker container run --detach --publish 9001:80 --name my-frontend react-app