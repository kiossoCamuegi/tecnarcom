import React from 'react'
import { LuHeartHandshake } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';


function Services() {
 const Data = [
   {
     icon:<><LuHeartHandshake/></>,
     title:"Venda de materiais",
     description:`Com recurso a soluções tecnológicas e a processos inovadores, acrescentamos valor à sua operação, sempre com a flexibilidade de poder funcionar nas instalações do cliente ou nas nossas.`,
   },
   {
    icon:<><LuHeartHandshake/></>,
    title:"Manutenção de compressores",
    description:`Com recurso a soluções tecnológicas e a processos inovadores, acrescentamos valor à sua operação, sempre com a flexibilidade de poder funcionar nas instalações do cliente ou nas nossas.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"Instalação de compressores",
    description:`Com recurso a soluções tecnológicas e a processos inovadores, acrescentamos valor à sua operação, sempre com a flexibilidade de poder funcionar nas instalações do cliente ou nas nossas.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"Assistencia Tecnica",
    description:`Com recurso a soluções tecnológicas e a processos inovadores, acrescentamos valor à sua operação, sempre com a flexibilidade de poder funcionar nas instalações do cliente ou nas nossas.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"consultoria",
    description:`Com recurso a soluções tecnológicas e a processos inovadores, acrescentamos valor à sua operação, sempre com a flexibilidade de poder funcionar nas instalações do cliente ou nas nossas.`,
  },
 ];


  return (
    <div className='services bg-black'>
      <div className="wrapper">
          <div className="space">
              <h1>Os serviços com a melhor qualidade para sua empresa</h1>
              <div className="txt"> 
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolores ducimus suscipit voluptas, libero excepturi ex omnis corporis ad aperiam blanditiis, debitis optio consequatur. Inventore sapiente laboriosam rem porro nobis!</p>
                 <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
              </div>
          </div>
         <section className="wrap-boxes">
            {Data.map((item)=>{
               return(
                <article>
                 <div className="stamp">
                 <div className="icon">{item.icon}</div>
                   <h3>{item.title}</h3>
                   <p>{item.description}</p>
                   <Link className='text-main'>Saiba mais   <GoArrowUpRight /></Link>
                 </div>
                </article>
               )
            })}
           <article className="bg"><div className="stamp bg-main"><div className="center"><h1 className="text-white">Saiba mais</h1></div></div></article>
         </section>
      </div>
    </div>
  )
}

export default Services