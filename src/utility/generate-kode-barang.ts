// Function to generate random alphanumeric string
function generateRandomString(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function to generate random kode_barang
export function generateKodeBarang(): string {
  const prefix = "BRG";
  const suffixLength = 3;
  const uniqueCode = generateRandomString(suffixLength);
  return `${prefix}${uniqueCode}`;
}

// Generate 30 unique kode_barang
const kode_barang = [];
for (let i = 0; i < 30; i++) {
  const kode = generateKodeBarang();
  kode_barang.push({ nama: kode });
}

// console.log(kode_barang);
