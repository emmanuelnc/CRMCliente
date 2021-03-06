import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import {gql, useQuery} from '@apollo/client'
import { useRouter} from 'next/router'
import Link from 'next/link'

const OBTENER_CLIENTES_USUARIO = gql`
{
  obtenerClientesVendedor{
    id
    nombre
    apellido
    empresa
    email
  }
}
`

const Index = () => {
  
  const router = useRouter();

  //conmsulta de apollo
  const { data, loading, error} = useQuery(OBTENER_CLIENTES_USUARIO);
  
 //console.log('data OBTENER_CLIENTES_USUARIO', data);
// console.log('loading', loading);
// console.log('error', error);

if (loading) return 'Cargando...';

console.log(data);

if(!data){
  return router.push('/login'); //( 'Iniciar sesion!') 
}

////router.push('/login');

  
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 fornt-light">
        <Link href='/nuevocliente'>
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white  rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold ">Nuevo Cliente</a>
        </Link>

          <table className='table-auto shadow-md mt-10 w-full w-lg'>
            <thead className='bg-gray-800'>
              <tr className='text-white'>
                <th className='w-1/5 py-2'>Nombre</th>
                <th className='w-1/5 py-2'>Empresa</th>
                <th className='w-1/5 py-2'>Email</th>
              </tr>
            </thead>
            <tbody className='bg-white' >


            {
            
           
                    data.obtenerClientesVendedor.map( cliente => (
                      <tr key={cliente.id}>
                        <td className='border px-4 py-2'>{cliente.nombre} {cliente.apellido}</td>
                        <td className='border px-4 py-2'>{cliente.empresa} </td>
                        <td className='border px-4 py-2'>{cliente.email} </td>
                      </tr>
                    ) ) 
           
            }

            </tbody>

          </table>

        </h1>
      </Layout>
  
    </div>
  
  )
}
export default Index;