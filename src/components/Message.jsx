import React from 'react'
import {picture6} from '../assets'
import {picture7} from '../assets'
import {picture8} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: picture6, title: 'Kita Sangat Lucu', description: "Kita selalu bersama, jangan tinggalin aku yaa, aku sayang kamuuu, kamu cantikk bgtt, muahhh"},   
    { Image: picture7, title: 'Comel Sekalii', description: "Jangan biarkan ada celah untuk orang ketiga ya sayang, jangan berikann kesempatann, ingatt tujuan kitaa"},   
    { Image: picture8, title: 'Harapanku, I Mean Kita', description: "Semoga kita selalu bersama apapun yang terjadi, tidak mudah but kita pasti bisa, aku doain kamu selalu sehat dan bahagia, jangan lupa makan, istirahat, dan ibadahnya, aku selalu disini kalo kamu butuh aku :)"},   
  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Pesan Kita
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

export default Message