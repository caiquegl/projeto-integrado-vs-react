import React from 'react';
import {Link} from 'react-router-dom'

import './index.css';

import Header from "../sections/header";
import Footer from '../sections/footer';

export default function News(){
    return (
        <div>
            <Header />
                <div className="news-container">
                    <h1>Notícias</h1>

                    <div className="card-news">
                        <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                            <img src="https://conteudo.imguol.com.br/c/noticias/34/2020/01/21/concursos-publicos-provas-vestibular-1579643338912_v2_900x506.jpg"/>
                        </a>
                            <div>
                                
                                <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                                    <p>
                                        Enem 2020: Estão abertas as inscrições para os pedidos de isenção de taxa.
                                    </p>
                                    <p className="data">
                                        Data da notícia: 07/04/2020
                                    </p>
                                </a>
                            </div>                        
                    </div>   


                     <div className="card-news">
                        <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                            <img src="https://conteudo.imguol.com.br/c/noticias/34/2020/01/21/concursos-publicos-provas-vestibular-1579643338912_v2_900x506.jpg"/>
                        </a>
                            <div>
                                <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                                    <p>
                                        Enem 2020: Estão abertas as inscrições para os pedidos de isenção de taxa.
                                    </p>
                                    <p className="data">
                                        Data da notícia: 07/04/2020
                                    </p>
                                </a>
                            </div>                        
                    </div>    


                     <div className="card-news">
                        <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                            <img src="https://conteudo.imguol.com.br/c/noticias/34/2020/01/21/concursos-publicos-provas-vestibular-1579643338912_v2_900x506.jpg"/>
                        </a>
                            <div>
                                <a href="https://educacao.uol.com.br/noticias/2020/04/06/enem-isencao-2020.htm">
                                    <p>
                                        Enem 2020: Estão abertas as inscrições para os pedidos de isenção de taxa.
                                    </p>
                                    <p className="data">
                                        Data da notícia: 07/04/2020
                                    </p>
                                </a>
                            </div>                        
                    </div>                  

                </div>
            <Footer />
        </div>
    )
};