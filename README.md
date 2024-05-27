# platform-environment-setup
Platform development environment bootstrap to get you started.
## Steps
- Install docker on your machine 
[Link text Here](https://docs.docker.com/get-docker/)
- Create the following folders in your path

```
/data/mariadb
/data/kafka/data
/data/kafka/secrets
/data/zookeeper/secrets
/data/zookeeper/data
/data/zookeeper/log
/data/postgresql/data
/data/mongo
```
- In ```development.env``` replace the path your exact path on your machine/server e.g. ```export MARIADB_DATA_DIR=/Users/cetricokola/Projects/Env/data/mariadb ``` to ```export MARIADB_DATA_DIR=/Users/your-username/Projects/data/mariadb ```
- Move to the root of this repository and run the following commands and make sure docker is running before running the commands.
    ``` 
        source development.env
        docker network create sandbox
        docker-compose up -d
    ```
