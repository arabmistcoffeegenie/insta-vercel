FROM php:8.2-apache

# Copy all files into Apache server root
COPY . /var/www/html/

# Set permissions (optional)
RUN chmod -R 755 /var/www/html

EXPOSE 80
