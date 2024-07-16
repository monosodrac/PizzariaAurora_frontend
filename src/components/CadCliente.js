import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';

export default function CadCliente() {
    // const navegacao = useNavigate();

    const { register, handleSubmit, setValue, setFocus } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    };

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setValue('address', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('uf', data.uf);
                setFocus("addressNumber");
            });
    };

    return (
        <div className="cadastro">
            <div class="hsection">
                <h2>Cadastro</h2>
            </div>
            <div class="container">
                <form className="flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome:
                        <input type="text" {...register("name")} />
                    </label>
                    <label>
                        Telefone:
                        <input type="tel" {...register("tel")} />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" {...register("email")} />
                    </label>
                    <label>
                        CEP:
                        <input type="text" {...register("cep")} onBlur={checkCEP} />
                    </label>
                    <label>
                        Rua:
                        <input type="text" {...register("address")} />
                    </label>
                    <label>
                        Numero:
                        <input type="number" {...register("addressNumber")} />
                    </label>
                    <label>
                        Bairro:
                        <input type="text" {...register("neighborhood")} />
                    </label>
                    <label>
                        Cidade:
                        <input type="text" {...register("city")} />
                    </label>
                    <label>
                        UF:
                        <input type="text" {...register("uf")} />
                    </label>
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </div>
            <a href="/">Voltar ao início</a>
        </div>
    );
};