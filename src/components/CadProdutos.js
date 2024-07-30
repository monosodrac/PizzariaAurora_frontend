import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CadProdutos() {
    const [products, setProducts] = useState([]);
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const newProduct = {
            name: data.name,
            quant: data.quant,
            uni: data.uni,
            total: data.total,
            imageURL: imageURL
        };
        setProducts([...products, newProduct]);
        reset();
        setImageURL(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
        };
    };

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <section id="produtos">
                <div className="row">
                    <nav className="nav nav-pills flex-column col-lg-2 col-md-12">
                        <button data-bs-toggle="tab" data-bs-target="#aba1" className="nav-link active" type="button">Cadastro</button>
                        <button data-bs-toggle="tab" data-bs-target="#aba2" className="nav-link" type="button">Produtos Cadastrados</button>
                    </nav>
                    <div className="tab-content col-lg-10">
                        <div className="tab-pane active" id="aba1">
                            <div className="container">
                                <form className="form__Prod" onSubmit={handleSubmit(onSubmit)}>
                                    <label>
                                        Nome do produto:
                                    </label>
                                    <input type="text" {...register("name")} />
                                    <label>
                                        Foto do produto:
                                    </label>
                                    <input type="file" accept="image/png, image/jpeg"  onChange={handleImageChange} />
                                    <label>
                                        quantidade:
                                    </label>
                                    <input type="number" {...register("quant")} />
                                    <label>
                                        Preço unitário:
                                    </label>
                                    <input type="number" {...register("uni")} />
                                    <label>
                                        Preço total:
                                    </label>
                                    <input type="number" {...register("total")} />
                                    <button className="btn" type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane" id="aba2">
                            <h3>Produtos cadastrados</h3>
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <div key={index} className="product-item">
                                        {product.imageURL && (
                                            <div>
                                                <img src={product.imageURL} alt="Produto" style={{maxWidth: "300px", maxHeight: "300px"}} />
                                            </div>
                                        )}
                                        <p>Nome: {product.name}</p>
                                        <p>Quantidade: {product.quant}</p>
                                        <p>Preço Unitário: {product.uni}</p>
                                        <p>Preço Total: {product.total}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhum produto cadastrado</p>
                            )}
                        </div>
                    </div>
                </div>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    );
};