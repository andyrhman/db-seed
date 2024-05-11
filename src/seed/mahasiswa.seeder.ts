import { Mahasiswa } from "./../entity/mahasiswa.entity";
import seederSource from "../config/seeder.config";
import logger from "../config/logger.config";
import { angkatan_mahasiswa, jkl_mahasiswa, kelas_mahasiswa, prs_mahasiswa } from "../utility/data-mahasiswa";
import { fakerID_ID as faker } from "@faker-js/faker";
import { generateStudentID } from "../utility/generate-student-id";

seederSource
  .initialize()
  .then(async () => {
    const repository = seederSource.getRepository(Mahasiswa);

    for (let i = 0; i < 30; i++) {
      await repository.save({
        nama: faker.person.fullName(),
        nim: generateStudentID(),
        jenis_kelamin: jkl_mahasiswa[i % jkl_mahasiswa.length].nama,
        kelas: kelas_mahasiswa[i % kelas_mahasiswa.length].kelas,
        program_studi: prs_mahasiswa[i % prs_mahasiswa.length].nama,
        angkatan: angkatan_mahasiswa[i % angkatan_mahasiswa.length].tahun
      });
    }

    logger.info("🌱 Seeding has been completed");
    process.exit(0);
  })
  .catch((err) => {
    logger.error(err);
  });
