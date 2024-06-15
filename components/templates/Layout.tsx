import React, { FC, ReactNode } from 'react'
import Navbar from '../organisms/Navbar';
import Head from 'next/head';

export interface ITemplateLayout {
  children: ReactNode;
  categories: any;
}

const TemplateLayout:FC<ITemplateLayout> = (props) => {
  return (
    <div id='home' className='h-full relative'>
      <Head>
        <meta name="author" content="Itcomnet" />
        <meta name="title" content="Itcomnet" />
        <meta name="keywords" content="itcomnet, indohadetama" />
        <meta name="description" content="PT. ITCOMNET INDOHADETAMA merupakan perusahaan jasa penyedia ICT (Information Communication and Technology), berpengalaman dalam bidang Wireless, Fiber Optic, Manage Services , VSAT dan Sumber Energi Baru Terbarukan (New Renewable Energy) Produk Energi Baru terbarukan untuk berbagai aplikasi perumahan, industry kecil, Perusahaan komersil, Instansi, Pemerintah, Sekolah, distrik dan lain lagi yang sangat inovatif serta senantiasa menawarkan produk produk dengan Teknologi terkini." />

        <meta property="og:locale" content="en_US" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Itcomnet" />
        <meta property="og:description" content="PT. ITCOMNET INDOHADETAMA merupakan perusahaan jasa penyedia ICT (Information Communication and Technology), berpengalaman dalam bidang Wireless, Fiber Optic, Manage Services , VSAT dan Sumber Energi Baru Terbarukan (New Renewable Energy) Produk Energi Baru terbarukan untuk berbagai aplikasi perumahan, industry kecil, Perusahaan komersil, Instansi, Pemerintah, Sekolah, distrik dan lain lagi yang sangat inovatif serta senantiasa menawarkan produk produk dengan Teknologi terkini." />
        <meta property="og:keywords" content="itcomnet, indohadetama" />
        <meta property="og:url" content="https://itcomnet.co.id" />
        <meta property="og:site_name" content="Itcomnet" />
        <meta property="og:image" content="/assets/images/itcomnet-logo.jpeg" />
        <meta property="og:image:url" content="/assets/images/itcomnet-logo.jpeg" />
        <meta property="og:image:width" content="240" />
        <meta property="og:image:height" content="240" />
      </Head>
      <Navbar categories={props.categories}/>
      <div className='pt-10'>
      {props.children}
      </div>
    </div>
  )
}

export default TemplateLayout