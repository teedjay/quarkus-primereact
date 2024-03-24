# quarkus-primereact
Quarkus Java backend application with React and PrimeReact components

- [x] [Quarkus](https://quarkus.io) and Java 21 backend
- [x] Maven WebJars and MvNPM for frontend dependencies
- [x] React using [WebBundler Extension](https://docs.quarkiverse.io/quarkus-web-bundler/dev/) (using esbuild)
- [x] [PrimeReact](https://primereact.org) components (with [Primeicons](https://primeng.org/icons) and [PrimeFlex](https://primeflex.org))

## Prerequisites
The mvnpm locker Maven Plugin will create a version locker profile for your org.mvnpm and org.webjars dependencies.
Allowing you to mimick the package-lock.json and yarn.lock files in a Maven world.

If you get errors like `Locker BOM not found` you can bootstrap it by running the following command:

```shell
./mvnw io.mvnpm:locker-maven-plugin:LATEST:lock
```

## Run in dev mode and open browser
Run command and open browser at http://localhost:8080
```
./mvnw compile quarkus:dev
```

## Packaging and running the application

The application can be packaged using:
```shell script
./mvnw package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:
```shell script
./mvnw package -Dquarkus.package.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.
