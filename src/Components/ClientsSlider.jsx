import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import ImageLazyLoading from './ImageLazyLoading';


function ClientsSlider() {
  const Data = [
    "https://loja.lello.ao/SWEG/files/Artigos/Artigo__20210403105550519.jpg",
    "https://future-health.care/wp-content/uploads/2024/04/Aegon_santander.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-17.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-8.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-19.png",
    "https://future-health.care/wp-content/uploads/2023/10/CTT.jpg",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-18.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-7.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-6-1.png",
    "https://future-health.care/wp-content/uploads/2023/10/Prancheta-1-copia-11.png"
  ]

  return (
    <div className="ClientsSlider bg-black">
      <div className="wrapper">
        <div className="space">
          <h1>Conheça alguns dos nossos Clientes institucionais.</h1>
          <div className="txt">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolores ducimus suscipit voluptas, libero excepturi ex omnis corporis ad aperiam blanditiis, debitis optio consequatur. Inventore sapiente laboriosam rem porro nobis!</p>
            <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
           </div>
        </div>
        <section className="content">
          {Data.map((item, index) => (
            <article>
              <ImageLazyLoading source={item} />
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ClientsSlider