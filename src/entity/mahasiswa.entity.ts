import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum JenisKelamin {
  laki_laki = "laki-laki",
  perempuan = "peremuan",
}

@Entity("mahasiswa")
export class Mahasiswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  nama: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  nim: string;

  @Column({
    type: "enum",
    enum: JenisKelamin,
    default: JenisKelamin.laki_laki,
    enumName: "jenis_kelamin_enum",
  })
  jenis_kelamin: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  kelas: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  program_studi: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  angkatan: string;
}
