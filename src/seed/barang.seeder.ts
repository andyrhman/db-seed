import { Barang } from "./../entity/barang.entity";
import seederSource from "../config/seeder.config";
import logger from "../config/logger.config";
import { fakerID_ID as faker } from "@faker-js/faker";
import { nama_barang, satuan_barang, status_barang } from "../utility/data-barang";
import { generateKodeBarang } from "../utility/generate-kode-barang";

seederSource
  .initialize()
  .then(async () => {
    const repository = seederSource.getRepository(Barang);

    for (let i = 0; i < 300; i++) {
      await repository.save({
        kode_barang: generateKodeBarang(),
        nama_barang: nama_barang[i % nama_barang.length].nama,
        jumlah_barang: faker.number.int({ min: 10, max: 50 }),
        satuan_barang: satuan_barang[i % satuan_barang.length].nama,
        harga_beli: parseInt(faker.commerce.price({ min: 800000, max: 13000000, dec: 0 })),
        status_barang: status_barang[i % status_barang.length].nama
      });
    }

    logger.info("🌱 Seeding has been completed");
    process.exit(0);
  })
  .catch((err) => {
    logger.error(err);
  });
