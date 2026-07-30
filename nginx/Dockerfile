FROM nginx:1.25-alpine

# Remove default nginx static resources
RUN rm -rf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
