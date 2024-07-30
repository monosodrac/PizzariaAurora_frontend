import React from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CadCliente() {

    const { register, handleSubmit, setValue, setFocus, reset } = useForm();

    const onSubmit = (e) => {
        console.log(e);
        reset();
    };

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setValue('address', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('uf', data.uf);
                setFocus("addressNumber");
            });
    };

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <div className="container">
                <form className="form__client" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome:
                    </label>
                    <input autoFocus type="text" {...register("name")} />
                    <label>
                        Telefone:
                    </label>
                    <input type="tel" {...register("tel")} />
                    <label>
                        E-mail:
                    </label>
                    <input type="email" {...register("email")} />
                    <label>
                        CEP:
                    </label>
                    <input type="text" {...register("cep")} onBlur={checkCEP} />
                    <label>
                        Rua:
                    </label>
                    <input type="text" {...register("address")} />
                    <label>
                        Numero:
                    </label>
                    <input type="number" {...register("addressNumber")} />
                    <label>
                        Bairro:
                    </label>
                    <input type="text" {...register("neighborhood")} />
                    <label>
                        Cidade:
                    </label>
                    <input type="text" {...register("city")} />
                    <label>
                        UF:
                    </label>
                    <input type="text" {...register("uf")} />
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </div>
            <a href="/"><IoMdArrowRoundBack /></a>
        </div>
    );
};