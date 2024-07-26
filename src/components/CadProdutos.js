import React from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CadProdutos() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    };

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <div class="container">
                <form className="form__Prod" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome do produto:
                        <input type="text" {...register("name")} />
                    </label>
                    <label>
                        Foto do produto:
                        <img src="" alt="" {...register("imgProd")} />
                        <input type="text" />
                    </label>
                    <label>
                        quantidade:
                        <input type="number" {...register("quant")} />
                    </label>
                    <label>
                        Preço unitário:
                        <input type="number" {...register("uni")} />
                    </label>
                    <label>
                        Preço total:
                        <input type="number" {...register("total")} />
                    </label>
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </div>
            <a href="/"><IoMdArrowRoundBack /></a>
        </div>
    );
};