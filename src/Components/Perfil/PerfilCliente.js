import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { toast } from 'react-toastify';
import apiLocal from '../../Api/apiLocal';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();
    
    const [dadosUsuarios, setDadosUsuarios] = useState([]);

    useEffect(() => {
        try {
            async function consultarDadosusuarios() {
                const resposta = await apiLocal.get('/ConsultarUsuarios', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Resposta da API:', resposta);
                // Verificar se resposta.data é um array antes de atribuir
                if (Array.isArray(resposta.data)) {
                    setDadosUsuarios(resposta.data);
                } else {
                    setDadosUsuarios([]); // Caso não seja um array, defina como array vazio
                    toast.error('Dados inválidos retornados da API', {
                        toastId: 'ToastId'
                    });
                }
            }
            consultarDadosusuarios();
        } catch (err) {
            toast.error('Erro ao comunicar com o Backend', {
                toastId: 'ToastId'
            });
        }
    }, [token]);

    async function apagaUsuarios(id) {
        try {
            await apiLocal.delete(`/ApagarUsuarios/${id}`);
            toast.success('Registro apagado com sucesso', {
                toastId: 'ToastId'
            });
        } catch (err) {
            toast.error('Erro ao comunicar com o Backend', {
                toastId: 'ToastId'
            });
        }
    }

    return (
        <>
            {dadosUsuarios.length === 0 ? (
                <div className='conteinerDashboardGeral'>
                    <h1>Página de DashBoard</h1>
                    <h1>Sem dados</h1>
                </div>
            ) : (
                <div className='conteinerDashboardGeral'>
                    <h1>Página de DashBoard</h1>
                    <table className='usuariosTabela'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Edita</th>
                                <th>Apaga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosUsuarios.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={`/EditarUsuarios/${item.id}`}>Editar</Link></td>
                                    <td><button type='submit' onClick={() => apagaUsuarios(item.id)}>Apagar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};




// import React, { useState, useEffect, useContext } from 'react';
// import { AutenticadoContexto } from '../../Contexts/authContexts';
// import { toast } from 'react-toastify';
// import apiLocal from '../../Api/apiLocal';
// import { Link } from 'react-router-dom';

// export default function UserProfile() {
//     const { verificarToken, token } = useContext(AutenticadoContexto);
//     verificarToken();
    
//     const [dadosUsuarios, setDadosUsuarios] = useState(['']);

//     // const iToken = localStorage.getItem('@token')
//     // const token = JSON.parse(iToken)

//     useEffect(() => {
//         try {
//             async function consultarDadosusuarios() {
//                 const resposta = await apiLocal.get('/ConsultarUsuarios', {
//                     headers: {
//                        // Authorization: 'Bearer ' + `${token}`
//                         Authorization: `Bearer ${token}`
//                     }
//                 })
//                 setDadosUsuarios(resposta.data)
//             }
//             consultarDadosusuarios()
//         } catch (err) {
//             toast.error('Erro ao Comunicar com BackEnd', {
//                 toastId: 'ToastId'
//             })
//         }
//     }, []);

//     async function apagaUsuarios(id) {
//         try {
//             await apiLocal.delete(`/ApagarUsuarios/${id}`)
//             toast.success('Registro Apagado com Sucesso', {
//                 toastId: 'ToastId'
//             })
//         } catch (err) {
//             toast.error('Erro ao Comunicar com BackEnd', {
//                 toastId: 'ToastId'
//             })
//         }
//     }
//     return (
//         <>
//             {dadosUsuarios.length === 0
//                 ?
//                 <div className='conteinerDashboardGeral'>
//                     <h1>Pagina de DashBoard</h1>
//                     <h1>Sem dados</h1>
//                 </div>
//                 :
//                 <div className='conteinerDashboardGeral'>
//                     <h1>Pagina de DashBoard</h1>
//                     <table className='usuariosTabela'>
//                         <thead>
//                             <tr key="">
//                                 <th>ID</th>
//                                 <th>Nome</th>
//                                 <th>Email</th>
//                                 <th>Edita</th>
//                                 <th>Apaga</th>
//                             </tr>
//                             {dadosUsuarios.map((item) => {
//                                 return (
//                                     <>
//                                         <tr key="">
//                                             <td>{item.id}</td>
//                                             <td>{item.nome}</td>
//                                             <td>{item.email}</td>
//                                             <td><Link to={`/EditarUsuarios/${item.id}`}>Editar</Link></td>
//                                             <td><button type='submit' onClick={() => apagaUsuarios(item.id)}>Apagar</button></td>
//                                         </tr>
//                                     </>
//                                 )
//                             })}
//                         </thead>
//                     </table>
//                 </div>
//             }
//         </>
//     )
// }