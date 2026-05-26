FROM gradle:8.5-jdk21-alpine AS build

COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle

RUN ./gradlew depdencies --no-daemon

COPY src src
RUN ./gradlew bootJar --no-daemon


FROM eclipse-temurin:21-jre-alpine

RUN addgroup -S spring && adduser -S spring -G spring

USER spring:spring

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]