import React, { useEffect, useState } from 'react';
import food from '../../assets/img/food.jpg';
import categ from '../data/categ.json';


function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(categ);
    }, []);


    return(
        <>
            <body class="bg-secondary bg-gradient py-4 px-2">
                <main>
                    <section class="container m-0">
                        <h2 class="mb-4">Categoria1</h2>
                        <div class="row g-3">
                            {items.map((item) => (
                                <div class="col-md-4 d-flex">
                                    <div class="card">
                                        <img class="card-img-top" src={food} alt=""></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.nome}</h5>
                                            <p class="card-text">{item.descricao}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <small class="text-muted">R${item.preco}</small>
                                                <button type="button" class="btn btn-primary">Adicione</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </body>
        </>
    );
}

export default Home;