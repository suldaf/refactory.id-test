# vue-test-code

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Expected Output :
![expected](./src/assets/Expected.png)

## Found Issues & Analytics

<ul>
  <li>Di Users.vue</li>
  <ol>
    <li>Ada typo di methods nya (Tidak dapat melakukan proses seterusnya)</li>
    <li>Import salah tempat (Tidak dibutuhkan disini) </li>
    <li>Variable error di axios tidak di pakai (Karena cuman di declare tanpa di pakai)</li>
    <li>Method untuk menambah jumlah count belum ada (Karena dibutuhkan ketika ada data yang bertambah)</li>
    <li>Belum ada styling (Masih plain belum terlihat cantik)</li>
  </ol>
  <li>Di Store.js</li>
  <ol>
    <li>State untuk count belum ada (Untuk menyimpan jumlah data yang ada)</li>
    <li>Import variable INCREMENT dari mutation-types.js belum ada (Untuk membuat Mutations penambahan count)</li>
    <li>Getters untuk getCountData belum mengambil dari State (Masih HardCode)</li>
    <li>Mutations untuk INCREMENT belum di buat (Untuk mentrack perubahan count di State)</li>
    <li>setData di methods setDatas di actions masih belum sesuai (Masih Belum sesuai dengan yang ada di Mutations)</li>
    <li>Belum membuat Actions untuk INCREMENT (Untuk merubah data Count di State)</li>
  </ol>
  <li>Di mutation-types.js</li>
  <ol>
    <li>Kurang menambahkan variable INCREMENT (Agar mudah untuk di pakai)</li>
  </ol>
</ul>

## Solutions

<ul>
  <li>Di Users.vue</li>
  <ol>
    <li>Memperbaiki kesalahan typo agar dapat berjalan</li>
    <li>Menghilankan Import yang tidak di butuhkan</li>
    <li>Menambahkan console.log(error) agar variable error terpakai </li>
    <li>Membuat method untuk menambahkan Count</li>
    <li>Memakai Bootstrap untuk membuat styling</li>
  </ol>
  <li>Di Store.js</li>
  <ol>
    <li>Menambahkan variable Count di State</li>
    <li>Melakukan Import variable INCREMENT dari mutation-types.js agar dapat di pakai di Mutation</li>
    <li>Menambahkan state sebagai parameter pertama agar dapat mengambil data di State</li>
    <li>Membuat methods INCREMENT di Mutation agar dapat men Track perubahan di State</li>
    <li>Merubah setData di methods setDatas di actions menjadi sesuai dengan yang ada di Mutations</li>
    <li>Membuat methods setCounts untuk melakukan perubahan pada count di State</li>
  </ol>
  <li>Di mutation-types.js</li>
  <ol>
    <li>Membuat variable INCREMENT agar mudah untuk di gunakan dan di maintenance</li>
  </ol>
</ul>
