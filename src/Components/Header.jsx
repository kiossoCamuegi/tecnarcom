import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'

function Header() {
  return (
    <div className='fh-header' >
        <div className="wrapper">
            <div className="header-content">
                <aside className="text">
                    <h2 className="text-main">ESCOLHA OS MELHORES</h2>
                    <h1>Acreditamos que cada novo colaborador irá trazer os seus talentos.</h1>
                    <p>
                    Acreditamos que as pessoas estão no centro e a tecnologia deve facilitar o seu trabalho
                     </p>
                    <button className="btn bg-main">Entrar em contacto</button><br /><br />
                    <small className='text-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </aside>
                <aside className="image">
                  <ImageLazyLoading source={"https://le-de.cdn-website.com/8159d5ad611046c8a46e6ffcf7de58e1/dms3rep/multi/opt/509-629w.jpg"} alt="" /> 
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                </aside>
            </div>
        </div>
    </div>
  )
}

export default Header