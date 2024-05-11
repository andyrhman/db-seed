require('dotenv').config();
import { DataSource } from "typeorm";

const seederSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE,
    entities: [
        "src/entity/*.ts"
    ],
    logging: false,
    synchronize: true
});

export default seederSource;