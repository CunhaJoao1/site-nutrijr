import React from 'react'

export function Home() {
  return (
    <main  className='w-full h-[85vh] top-0 bg-cover bg-top bg-home-image '>
      <div className=' w-full h-[85vh] absolute text-center  bg-gradient-to-tr from-[#112e2eba] to-[#2e612f26]  lg:px-[10%] 2xl:px-[20%]'>      
        <div className='mt-[15rem] px-4 text-center lg:max-w-[35rem] lg:text-left lg:mt-[20rem]'>
          <h2 className='text-white font-medium text-2xl font-title lg:text-4xl'>Soluções personalizadas de alto impacto para o seu negócio</h2>
          <p className=' text-white font-base mt-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolore quidem id aperiam perspiciatis eaque obcaecati eveniet accusamus nesciunt  labore fuga reiciendis cupiditate exercitationem, beatae sit iste iure ullam est.
          </p>
          <button className='font-base w-60 h-20 bg-brand-h2 mt-8 text-white'>
            SAIBA MAIS
          </button>
        </div>
      </div>
    </main>
  )
}
