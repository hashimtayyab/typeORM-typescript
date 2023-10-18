import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Profile } from "./entity/Profile";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user_1",
    password: "12345",
    database: "test2",
    synchronize: true,
    logging: false,
    entities: [User, Profile],
    migrations: [],
    subscribers: [],
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });
