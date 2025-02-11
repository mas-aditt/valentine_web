import React from 'react'
import { picture1 } from '../assets'
import { picture2 } from '../assets'
import { picture3 } from '../assets'
import { picture4 } from '../assets'
import { picture5 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: picture1, title: 'Mei 22, 2024', description: "Ini adalah Fotbar pertama kita, betapa mati gaya nya kita berdua, tapi kamu cantik hehe"},   
    { Image: picture2, title: 'Juni 04, 2024', description: "Ini adalah Foto kita pada saat setelah first anu hehe"},   
    { Image: picture3, title: 'Agustus 22, 2024', description: "Ini disaat anniversary sekolah, sangat seru sekali waktu itu"},
    { Image: picture4, title: 'Oktober 12, 2024', description: "Ini pada saat aku memberimu fresh flowers untuk pertama kalinya, besok harinya kita jalan jalan"},
    { Image: picture5, title: 'Januari 05, 2025', description: "Ini adalah fotbar kita yang terakhir di galeri, kita belum fotbar lagi karena aku sibuk pkl hehe"},
  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Foto Kita
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Halaman sebelumnya
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture