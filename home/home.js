import React from 'react';
import food from '../assets/img/food.jpg';

function Home() {
    return(
        <>
            <body class="bg-secondary bg-gradient pt-4">
                <main>
                    <section class="container m-0">
                        <h2 class="mb-4">Categoria1</h2>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={food} alt=""></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Nome Produto</h5>
                                        <p class="card-text">Descrição</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-muted">R$10,00</small>
                                            <button type="button" class="btn btn-primary">Adicione</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={food} alt=""></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Nome Produto</h5>
                                        <p class="card-text">Descrição</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-muted">R$10,00</small>
                                            <button type="button" class="btn btn-primary">Adicione</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={food} alt=""></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Nome Produto</h5>
                                        <p class="card-text">Descrição</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-muted">R$10,00</small>
                                            <button type="button" class="btn btn-primary">Adicione</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={food} alt=""></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Nome Produto</h5>
                                        <p class="card-text">Descrição</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-muted">R$10,00</small>
                                            <button type="button" class="btn btn-primary">Adicione</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </>
    );
}

export default Home;