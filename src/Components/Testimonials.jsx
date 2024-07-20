import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


function Testimonials() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }, 
          ]
    };

    const Data = [
        {
            name: "Pedro Mateus",
            type: "Consultor",
            image: "https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712102400&semt=ais",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum soluta id quisquam vitae perspiciatis, ullam porro.`
        },
        {
            name: "Tomé Higgins",
            type: "Consultor",
            image: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum soluta id quisquam vitae perspiciatis, ullam porro .`
        },
        {
            name: "Jose Gomes",
            type: "Consultor",
            image: "https://www.globalcosmeticsnews.com/wp-content/uploads/2017/07/4b88ed982c8560839411b24068b91abb.jpg",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum soluta id quisquam vitae perspiciatis, ullam porro.`
        },
        {
            name: "Sara Pinheiro",
            type: "Consultor",
            image: "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum soluta id quisquam vitae perspiciatis, ullam porro.`
        },
    ];



    return (
        <div className='Testimonials'>
            <div className="wrapper">
                <div className="space">
                    <div>
                        <h1>Clientes e Empresas satsifeitas falam por nós com sabedoria</h1>
                        <div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolores ducimus suscipit voluptas, libero excepturi ex omnis corporis ad aperiam blanditiis, debitis optio consequatur. Inventore sapiente laboriosam rem porro nobis!</p>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {Data.map((item, index) => (
                        <article key={index + 1}>
                            <div className="curved-edge">
                                <div className="content">
                                    <div className="image"><img src={item.image} alt="" /> </div>
                                    <div className="name">{item.name}</div>
                                    <small>{item.type}</small>
                                    <div className="flex">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials