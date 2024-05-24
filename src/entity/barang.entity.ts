import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("barang")
export class Barang {
  @PrimaryGeneratedColumn()
  id_barang: number;

  @Column({ type: "varchar", length: 20 })
  kode_barang: string;

  @Column({ type: "varchar", length: 50 })
  nama_barang: string;

  @Column({ type: "int", width: 10 })
  jumlah_barang: number;

  @Column({ type: "varchar", length: 20 })
  satuan_barang: string;

  @Column({ type: "double", precision: 20, scale: 0 })
  harga_beli: number;

  @Column({ type: "tinyint", width: 1 })
  status_barang: number;
}
