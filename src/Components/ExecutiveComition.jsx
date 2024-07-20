import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ImageLazyLoading from './ImageLazyLoading';

function ExecutiveComition() {
  const Data = [
      {
        name:"Mateus Luther",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://su.ualberta.ca/media/uploads/33/2023_UASU_Council-6093.png",
      },
      {
        name:"Roger Lopes",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://su.ualberta.ca/media/uploads/33/2023_UASU_Council-6028.png",
      },
      {
        name:"Micaela Fransino",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://www.ualberta.ca/business/media-library/programs/bcom/images/lcp/lc6/emma.jpg",
      },
      {
        name:"Patricia Gomez",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://www.ualberta.ca/business/media-library/programs/bcom/images/lcp/lc6/sasha.jpg",
      },
      {
        name:"Manuel Pedro",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://www.ualberta.ca/business/media-library/programs/bcom/images/lcp/lc6/gabe.jpg",
      },
      {
        name:"André Nunes",
        position:"Chefe do departamento de inovação  e tenologia",
        image:"https://www.ualberta.ca/business/media-library/programs/bcom/images/lcp/lc6/kevin.jpg",
      }

  ];

  return (
    <div className='ExecutiveComition'>
      <div className="wrapper">
        <div className="space">
          <div> <h1>Conheça os lideres que têm levado a nossa empresa em direção ao sucesso.</h1></div>
          <div className="txt" >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestias! Natus reprehenderit iusto at consectetur autem laboriosam temporibus dolor labore, omnis ipsum eum, numquam quidem pariatur sapiente? Rerum, rem eveniet.</p>
            <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
          </div>
        </div>
        <div className="content">
           {Data.map((item, index)=>(
               <article key={index+1}>
                 <div className="image"><ImageLazyLoading source={item.image} alt={item.name} /></div>
                 <div className="over-content">
                    <h1>{item.name}</h1>
                    <p>{item.position}</p>
                    <div className="icons">
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                 </div>
               </article>
           ))}
        </div>
      </div>
    </div>
  )
}

export default ExecutiveComition