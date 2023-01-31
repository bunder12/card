import React from 'react'
import soal from '../atable/tb_soal'

const App = () => {

  return (
    <div className='bg-[#F3F7F7] h-screen w-full flex justify-center items-center gap-4'>
        <div className='bg-[#FFFFFF] p-6 w-[30%] h-[230px] shadow-2xl cursor-pointer relative'>
            <p className='text-[#9EB1B4]'>RUANGAN</p>
            <h2 className='text-black font-bold text-5xl mb-4'>{soal.detail_type.detail_ruangan.nama_ruangan}</h2>
            <p className='text-[#9EB1B4] mt-4'><span>Ruangan </span>{soal.detail_type.detail_ruangan.detail_pengawas.nama}</p>
            <button className='bg-[#1BA94C] text-white py-2 px-4 rounded-[4px] mt-2'>Masuk Ruangan</button>
            <div className='absolute top-[-40px] right-[-40px] bg-[#1BA94C] text-white text-center flex justify-center items-center w-[120px] h-[120px] rotate-45'>
                <p className='flex flex-col rotate-[-45deg]'>RUANGAN<span>FREE</span></p>
            </div>
        </div>
    </div>
  )
}

export default App