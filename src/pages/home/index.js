import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import Carrocel2 from '../../assets/carrocel2.jpg';
import Carrocel1 from '../../assets/carrocel1.gif';
import Carrocel from '../../assets/carrocel.jpg';

import About from '../../assets/about.svg';

import Item1 from '../../assets/ecomerce/item1.jpg';
import Item2 from '../../assets/ecomerce/item2.jpg';




import './style.css';



import Header from "../sections/header";
import Footer from '../sections/footer';



export default function Home(){
   
    return (
        <div>
            <Header />
            <div className="carrocel-cont">
                <Carousel className="carrocel">
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Carrocel1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Carrocel}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Carrocel2}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="about">
                    <div className="about-text">
                        <img src={About} alt=""/>
                        <div className="text">
                            <h1>SOBRE A EQUIPE</h1>
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
                            Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p>
                        </div>
                    </div>
                    <div className="news-home">
                        <h1>NOTICIAS MAIS LIDAS</h1>
                        <ul>
                            <li>
                                <Link to="/news" className="link">
                                    <p>Enem 2020: Estão abertas as inscrições para os pedidos de isenção de taxa</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="link">
                                <p>Isenção de taxa de inscrição do Enem está disponível a 8 mil estudantes do AP; veja requisitos</p>
                                </Link>
                            </li>
                        </ul>
                        <h1>ITEMS MAIS VENDIDOS</h1>
                        <ul>
                            <li>
                                <Link to="/infoProduto" className="link">
                                <img src={Item1}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/infoProduto" className="link">
                                <img src={Item2}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            <Footer />




           
        </div>
        
    );

}