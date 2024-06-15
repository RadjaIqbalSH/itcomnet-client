import TemplateLayout from '@/components/templates/Layout'
import React, { FC, useEffect, useState } from 'react'
import Image from "next/image"

const SERVICES_LIST = []

interface IIndexPageProps {
  aboutUs: any;
  contactUs: any;
  contents: any;
  categories: any;
  subCategories: any;
  home: any;
  visiDanMisi: any;
}

const IndexPage: FC<IIndexPageProps> = (props) => {

  const {
    home,
    subCategories,
    aboutUs,
    visiDanMisi,
    contents,
    contactUs,
  } = props

  const [ servicesOption, setServiceOption ] = useState("");
  const [ subServices, setSubServices ] = useState([]);
  const [ layananInternet, setLayananInternet ] = useState([]);
  const [ services, setServices ] = useState([]);
  const [ packages, setPackages ] = useState([]);

  useEffect(() => {
    const fillteredSubServices = subCategories.data.filter((subCategory: any) => subCategory.attributes.category.data.attributes.slug === "services");
    setSubServices(fillteredSubServices)
    setServiceOption(fillteredSubServices?.[0]?.attributes?.slug || "");
    const filteredLayananInternet = contents.data.filter((item: any) => item.attributes.category.data.attributes.slug === "layanan-internet");
    setLayananInternet(filteredLayananInternet)
    const filteredPakages = contents.data.filter((item: any) => item.attributes.category.data.attributes.slug === "bundling-packages");
    setPackages(filteredPakages)
    const filteredServices = contents.data.filter((item: any) => item.attributes.category.data.attributes.slug === "services");
    setServices(filteredServices)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div suppressContentEditableWarning>
      <TemplateLayout categories={props.categories}>
        <section className='container flex flex-col justify-center items-center mt-8 md:mt-28 mx-auto px-6'>
          <h1 className='font-clashgrotesk-md text-5xl md:text-6xl lg:text-8xl text-center' style={{color: "#344054"}}>{home.data.attributes.title}</h1>
          <h1 className='font-clashgrotesk-md text-5xl md:text-6xl lg:text-8xl text-center' style={{color: "#FFA500"}}>{home.data.attributes.second_title}</h1>
          <p className='w-full sm:w-4/5 font-manrope-regular text-justify sm:text-center leading-6 tracking-widest mt-6 text-sm md:text-base' style={{color: "#667085", "wordBreak": "break-all"}}>{home.data.attributes.description}</p>
        </section>
        <section id='about-us' className='container mx-auto'>
          <h1 className='w-full text-center text-3xl md:text-5xl font-clashgrotesk-md mt-12 md:mt-16' style={{color: "#344054"}}>About Us</h1>
          <p className='w-full px-6 sm:px-0 sm:w-1/2 font-manrope-regular text-justify sm:text-center text-sm md:text-base leading-6 tracking-widest mx-auto mt-6' style={{color: "#667085", "wordBreak": "break-all"}}>{aboutUs.data.attributes.description}</p>
          <h1 className='w-full text-center text-3xl md:text-5xl font-clashgrotesk-md mt-12 md:mt-16' style={{color: "#344054"}}>Visi</h1>
          <p className='w-full px-6 sm:px-0 sm:w-1/2 font-manrope-regular text-justify sm:text-center text-sm md:text-base leading-6 tracking-widest mx-auto mt-6' style={{color: "#667085", "wordBreak": "break-all"}}>{visiDanMisi.data.attributes.visi_description}</p>
          <h1 className='w-full text-center text-3xl md:text-5xl font-clashgrotesk-md mt-12 md:mt-16' style={{color: "#344054"}}>Misi</h1>
          <p className='w-full px-6 sm:px-0 sm:w-1/2 font-manrope-regular text-justify sm:text-center text-sm md:text-base leading-6 tracking-widest mx-auto mt-6' style={{color: "#667085", "wordBreak": "break-all"}}>{visiDanMisi.data.attributes.misi_description}</p>
        </section>
        <section id='services' className='h-full mt-20 md:mt-32 pt-20 mt:pt-32 pb-28 md:pb-40' style={{backgroundColor:"#0B101C", clipPath: "ellipse(170% 50% at 50% 50%)"}}>
          <div className='container mx-auto'>
            <h1 className='w-full text-center text-3xl md:text-5xl font-clashgrotesk-md' style={{color: "#E0E0E0"}}>Services</h1>
              <div className='w-11/12 flex flex-row flex-wrap gap-4 justify-center items-center mt-8 md:mt-14 mx-auto' style={{color: "#E0E0E0"}}>
                {
                  subServices.map((service: any) => (
                    <button key={service.id} className='w-fit py-2 px-4 md:py-4 md:px-8 rounded-full font-manrope-md text-sm md:text-lg transition-all duration-200' onClick={setServiceOption.bind(null, service.attributes.slug)} style={{backgroundColor: servicesOption === service.attributes.slug ? "#FFA500" : "#0F1626"}}>
                      {service.attributes.title}
                    </button>
                  ))
                }
              </div>
              <div className='mt-10 md:mt-24 flex flex-col gap-10 md:gap-14 px-6'>
                {
                  services.map((item: any) => {
                    if (item.attributes.sub_category.data.attributes.slug === servicesOption) {
                      return (
                        <div key={item.id} className='w-full flex flex-col md:flex-row gap-6 md:gap-10'>
                          {
                            item.attributes?.image?.data?.attributes?.url && (
                              <div className='relative flex-none rounded-lg md:rounded-3xl overflow-hidden aspect-video w-full md:w-80'>
                                <Image src={`${process.env.NEXT_PUBLIC_DOMAIN}${item.attributes.image.data.attributes.url}`} alt="" fill style={{objectFit: "cover"}}/>
                              </div>
                            )
                          }
                          <div>
                            <p className='font-clashgrotesk-md text-2xl md:text-4xl' style={{color: "#E0E0E0"}}>{item.attributes.title}</p>
                            <div className='text-sm md:text-lg mt-2 text-justify md:text-start' style={{color: "#667085",  "wordBreak": "break-all"}} dangerouslySetInnerHTML={{__html: item.attributes.content}}/>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })
                }
              </div>
          </div>
        </section>
        <section id='layanan-internet' className='container mx-auto mt-16 md:mt-24 pb-4 md:pb-8 relative z-20'>
          <h1 className='w-full text-center font-clashgrotesk-md text-3xl md:text-5xl' style={{color: "#344054"}}>Layanan Internet</h1>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 mt-8 md:mt-20 px-6 mx-auto' style={{maxWidth: "1024px"}}>
            {
              layananInternet.map((layanan: any, index) => (
                <div key={layanan.id} className={`w-full  p-8 rounded-3xl shadow-lg ${layananInternet.length % 2 !== 0 ? layananInternet.length - 1 === index ? "lg:col-span-2 lg:h-fit" : "" : ""}`} style={{backgroundColor: "#E0E0E0"}}>
                  <h2 className='font-clashgrotesk-md text-2xl md:text-2xl' style={{color: "#344054"}}>{layanan.attributes.title}</h2>
                  <p className='w-full mt-2 md:mt-6 font-manrope-regular leading-6 tracking-widest text-sm md:text-base' style={{  color: "#667085" }} dangerouslySetInnerHTML={{__html: layanan.attributes.content}}/>
                </div>
              ))
            }
          </div>
        </section>
        <section id='bundling-packages' className='h-full mt-10 md:mt-20 py-16 md:py-20' style={{backgroundColor:"#0B101C", clipPath: "ellipse(130% 100% at 50% 50%)"}}>
          <div className='container mx-auto'>
            <h1 className='w-full text-center text-3xl md:text-5xl font-clashgrotesk-md' style={{color: "#E0E0E0"}}>Bundling Pakage</h1>
            <p className='mt-2 text-base md:text-xl text-center px-6' style={{color: "#667085"}}>kami memberikan solusi yang sesuai dengan kebutuhan pelanggan (customize)</p>
            <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-6 md:gap-10 mt-8 md:mt-20 px-6'>
              {
                packages.map((item: any) => (
                  <div key={item.id} className='w-full p-6 rounded-lg border' style={{backgroundColor: "#0F1626", borderColor: "#324153"}}>
                    <p className='font-clashgrotesk-md text-2xl' style={{color: "#E0E0E0"}}>{item.attributes.title}</p>
                    <div className='mt-4 leading-6 text-justify md:text-start' style={{color: "#667085", "wordBreak": "break-all"}} dangerouslySetInnerHTML={{__html: item.attributes.content}}/>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section id='contact-us' className='container mx-auto py-16 md:py-40'>
          <h1 className='w-full text-center font-clashgrotesk-md text-3xl md:text-5xl' style={{color: "#344054"}}>Contact Us</h1>
          <div className='mt-12 md:mt-20 flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-6 md:gap-10'>
            <div className='flex-none flex flex-col items-center md:items-start justify-center '>
              <p className='font-clashgrotesk-md text-xl md:text-2xl' style={{color: "#344054"}}>Address</p>
              <div className='mt-4 leading-6 tracking-widest w-80 text-center md:text-start' style={{color: "#667085"}} dangerouslySetInnerHTML={{__html: contactUs.data.attributes.address}}/>
            </div>
            <div className='flex-none flex flex-col items-center md:items-start justify-center '>
              <p className='font-clashgrotesk-md text-xl md:text-2xl' style={{color: "#344054"}}>EMAIL</p>
              <div className='mt-4 leading-6 tracking-widest text-center md:text-start' style={{color: "#667085"}} dangerouslySetInnerHTML={{__html: contactUs.data.attributes.email}}/>
            </div>
            <div className='flex-none flex flex-col items-center md:items-start justify-center '>
              <p className='font-clashgrotesk-md text-xl md:text-2xl' style={{color: "#344054"}}>Phone</p>
              <div className='mt-4 leading-6 tracking-widest text-center md:text-start' style={{color: "#667085"}} dangerouslySetInnerHTML={{__html: contactUs.data.attributes.phone}}/>
            </div>
            <div className='flex-none flex flex-col items-center md:items-start justify-center '>
              <p className='font-clashgrotesk-md text-xl md:text-2xl' style={{color: "#344054"}}>Whatsapp</p>
              <div className='mt-4 leading-6 tracking-widest text-center md:text-start' style={{color: "#667085"}} dangerouslySetInnerHTML={{__html: contactUs.data.attributes.whatsapp}}/>
            </div>
          </div>
        </section>
      </TemplateLayout>
    </div>
  )
}

export async function getStaticProps() {
  let datas: any[] = []
  const URL_LIST = ["about-us", "contact-us", "contents", "categories", "sub-categories", "home", "visi-dan-misi"]

  await Promise.all(URL_LIST.map(async(url) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/api/${url}?populate=*`)
    return await response.json()
  })).then((response) => {
    datas = response
  })

  return {
    props: {
      aboutUs: datas?.[0] || {},
      contactUs: datas?.[1] || {},
      contents: datas?.[2] || {},
      categories: datas?.[3] || {},
      subCategories: datas?.[4] || {},
      home: datas?.[5] || {},
      visiDanMisi: datas?.[6] || {},
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: false, // In seconds
  }
}

export default IndexPage