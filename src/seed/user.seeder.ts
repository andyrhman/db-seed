import seederSource from "../config/seeder.config";
import logger from "../config/logger.config";
import { fakerID_ID as faker } from "@faker-js/faker";
import { User } from "../entity/user.entity";

seederSource.initialize().then(async () => {
    const repository = seederSource.getRepository(User);

    for (let i = 0; i < 200; i++) {

        await repository.save({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.number.int(1000000000),
            photo: faker.image.avatar(),
            address: faker.location.streetAddress(true)
        })
    }

    logger.info("🌱 Seeding has been completed")
    process.exit(0);
}).catch((err) => {
    logger.error(err);
})