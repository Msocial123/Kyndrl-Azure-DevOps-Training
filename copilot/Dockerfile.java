# Dockerfile for java application
FROM openjdk:11
WORKDIR /usr/src/app
COPY . .
RUN javac App.java
EXPOSE 8080
CMD ["java", "App"]