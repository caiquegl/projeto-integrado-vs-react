import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar  from 'react-bootstrap/ButtonToolbar';
import Button  from 'react-bootstrap/Button';






import Carrocel2 from '../../assets/ecomerce/carrocel.jpg';
import Carrocel1 from '../../assets/ecomerce/carrocel1.jpg';
import Carrocel from '../../assets/ecomerce/carrocel2.jpg';
import Carrocel3 from '../../assets/ecomerce/carrocel3.jpg';

import Item1 from '../../assets/ecomerce/item1.jpg';
import Item2 from '../../assets/ecomerce/item2.jpg';


import './style.css';

import Header from "../sections/header";
import Footer from '../sections/footer';

export default function News(){
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
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Carrocel3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>


                <div className="pai-ecomerce">
                    <div className="filter">
                        <h2>Categorias</h2>
                        <h3>Livros</h3>
                        <ul>
                            <li>Matemática</li>
                            <li>Português</li>
                            <li>Inglês</li>
                            <li>Geografia</li>
                            <li>História</li>
                            <li>Física</li>
                            <li>Química</li>
                            <li>Aulas Gerais</li>
                            <li>Concurso Público</li>
                            <li>Vestibulando</li>
                        </ul>
                        <h3>Cursos Online</h3>
                        <ul>
                        <li>Matemática</li>
                            <li>Português</li>
                            <li>Inglês</li>
                            <li>Geografia</li>
                            <li>História</li>
                            <li>Física</li>
                            <li>Química</li>
                            <li>Aulas Gerais</li>
                            <li>Concurso Público</li>
                            <li>Vestibulando</li>
                        </ul>
                        <h3>Material escolar</h3>
                        <ul>
                            <li>Mochilas</li>
                            <li>Cadernos</li>
                            <li>Lápis</li>
                            <li>Borraschas</li>
                            <li>Utilidades</li>
                            <li>Estojos</li>
                            <li>Canetas</li>
                        </ul>
                    </div>

                    <div className="box-produtos">
                        <div className="seletor">
                            <p>Categoria > seletor > X produtos encontrados</p>
                            <ButtonGroup>
                                    <DropdownButton as={ButtonGroup} title="Ordernar Por" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Preço maior ao menor</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Preço menor ao maior</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </div>

                        <ButtonToolbar aria-label="Toolbar with button groups" id="margin">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button className="button-ecomercer">1</Button> <Button className="button-ecomercer">2</Button> <Button className="button-ecomercer">3</Button> <Button className="button-ecomercer">4</Button>
                            </ButtonGroup>
                        </ButtonToolbar>

                        <div className="produtos">
                            <div className="card">
                                <img src={Item1}/>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                            </div>

                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
};