import React from 'react';
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
// import { route } from 'next/dist/next-server/server/router';
//import  { Redirect } from 'react-router-dom'

const OBTENER_USUARIO = gql`
query ObtenerUsuario {
    ObtenerUsuario {
      id
      nombre
      apellido
    }
  }
`;

const Header = () => {


     const router = useRouter();

     const { data, loading } = useQuery(OBTENER_USUARIO);
     
     if (loading) return null;

     var UserGreating = ''

    // // proteger que no accedamos a data anrtes de tener resultados
     if (data) {
       if (data.ObtenerUsuario){
              const {nombre, apellido} = data.ObtenerUsuario;
            UserGreating = 'Hola: ' + nombre + ' ' + apellido;
       }
        
        
       
     }
      else{
        router.push('/login');
      }
    

        
            const cerrarSesion = () => {
                localStorage.removeItem('token');
                router.push('/login')
            }
        
            
            return (
                
                <div className="flex justify-between mb-6" >
                    <p className="mr-2" > {UserGreating} </p>
        
                    <button
                    onClick={() => cerrarSesion()}
                        type="button"
                        className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 xp-2 text-white shadow-md" >
                        Cerrar Sesión
                    </button>
                </div>
            )
    
}
export default Header;