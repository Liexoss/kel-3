import React from 'react';
import lenovoImg from '../images/lenovo.jpg';
import asusImg from '../images/asus.jpg';

function About() {
  return (
    <div className="hero bg-blue-950 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold text-white">Produk Laptop</h1>
        <div class="pruduct-container"></div>
        <div class="card">
         <img src={lenovoImg} alt="Laptop Lenovo" 
         className="mx-auto w-40 h-auto" />
         <h2 className="py-6 text-white">Lenovo IdeaPad Slim 3</h2>
          <p className="py-6 text-white">
          Lenovo IdeaPad Slim 3 14ABR8 adalah laptop 14 inci dengan prosesor Ryzen 5 7530U, RAM 8GB, SSD 512GB, dan grafis Radeon terintegrasi. Cocok untuk multitasking ringan, belajar, dan kerja harian. Desain tipis, ringan, dan sudah mendukung Wi-Fi 6. 
        </p>
        <button className="py-6 text-white">Rp7.999.000,00</button>
        <button className="btn btn-primary">Beli Sekarang</button>
        </div>
        <div class="card">
          <img src={asusImg} alt="Laptop asus" 
          className="mx-auto w-40 h-auto" />
          <h2 className="py-6 text-white">Asus VivoBook</h2>
          <p className="py-6 text-white">
          Asus VivoBook M415DAO-VIPS352 adalah laptop 14″ ringkas dengan prosesor AMD Ryzen3 3250U, RAM 8 GB, dan penyimpanan SSD (kapasitas tergantung konfigurasi). Ideal untuk kebutuhan sehari-hari—browsing, tugas kuliah/kantor, dan streaming—dengan bobot ringan dan desain portabel.
        </p>
        <button className="py-6 text-white">Rp6.765.000,00</button>
        <button className="btn btn-primary">Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
}

export default About;