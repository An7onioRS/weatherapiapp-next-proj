import React from 'react'
import Image from 'next/image'

const Weather = ({ data }) => {
  return (
    <div className='relative flex flex-col justify-center w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
        <p className='pt-24 text-5xl text-center pb-6'>Weather in {data.name}</p>
        <div className='relative flex items-center justify-center gap-3 pt-12 md:max-w-[800px] w-full m-auto'>
            <div className='flex flex-column justify-center items-center'>
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt=''
                width='100'
                height='100'
                />
                <p className='text-2xl md:text-5xl'>{data.weather[0].main}</p>
            </div>
            <p className='flex justify-center items-center text-2xl md:text-5xl'>{data.main.temp.toFixed(0)}&#176; Fahrenheit</p>
        </div>
        <div className='bg-black/50 m-auto p-8 rounded-md max-w-[800px] w-full'>
            <div className='flex justify-between text-center items-center'>
                <div>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed()}&#176;</p>
                    <p className='text-2xl md:text-5xl'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.main.humidity}%;</p>
                    <p className='text-2xl md:text-5xl'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.wind.speed.toFixed()} mph</p>
                    <p className='text-2xl md:text-5xl'>Wind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather