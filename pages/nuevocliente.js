import React from 'react';
import Layout from '../components/Layout';
import {useFormik} from 'formik';
import * as YUP from 'yup';
import { valueToObjectRepresentation } from '@apollo/client/utilities';




const NuevoCliente = () => {

    const formik = useFormik({
        initialValues:{
            nombre:'',
            apellido:'',
            empresa:'',
            email:'',
            telefono: ''
        },
        validationSchema: YUP.object({
            nombre: YUP.string()
                    .required('El nombre del cliente es obligatorio'),
            apellido: YUP.string()
                    .required('El apellido del cliente es obligatorio'),
            empresa: YUP.string()
                    .required('El nombre de la empresa es obligatorio'),
            email: YUP.string()
                    .email('email no válido')
                    .required('El nombre del cliente es obligatorio'),

            }),
            onSubmit : valores => {
                console.log(valores);
            }
    })





    return ( 
        <Layout>
            <h1 className="text-2xl text-gray-800 fornt-light" >Nuewvo cliente</h1>


            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg"   >
                    <form
                    className="bg-white shadow-md px-8 pt-6 pb-8 m-4"
                    onSubmit={formik.handleSubmit}>


                            <div className="mb-4">
                                    <label className ="block text-gray-700 text-sm front-bold mb-2" htmlFor="nombre">
                                        Nombre
                                    </label>
                                    <input 
                                        className = "shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                        id="nombre" 
                                        type="text" 
                                        placeholder="Nombre Cliente" 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.nombre}
                                        />
                                    
                                </div>

                                { formik.touched.nombre && formik.errors.nombre ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                                        <p className="font-bold" >Error</p>
                                        <p> { formik.errors.nombre } </p>
                                    </div>
                                ) : null }






                                
                            <div className="mb-4">
                                    <label className ="block text-gray-700 text-sm front-bold mb-2" htmlFor="apellido">
                                        Apellido
                                    </label>
                                    <input 
                                        className = "shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                        id="apellido" 
                                        type="text" 
                                        placeholder="Apellido Cliente" 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.apellido}
                                        />
                                    
                                </div>


                                { formik.touched.apellido && formik.errors.apellido ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                                        <p className="font-bold" >Error</p>
                                        <p> { formik.errors.apellido } </p>
                                    </div>
                                ) : null }



                                <div className="mb-4">
                                    <label className ="block text-gray-700 text-sm front-bold mb-2" htmlFor="empresa">
                                    Empresa
                                    </label>
                                    <input 
                                        className = "shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                        id="empresa" 
                                        type="text" 
                                        placeholder="Empresa" 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.empresa}
                                        />
                                    
                                </div>


                                { formik.touched.empresa && formik.errors.empresa ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                                        <p className="font-bold" >Error</p>
                                        <p> { formik.errors.empresa } </p>
                                    </div>
                                ) : null }


                                <div className="mb-4">
                                    <label className ="block text-gray-700 text-sm front-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input 
                                        className = "shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                        id="email" 
                                        type="email" 
                                        placeholder="e-mail" 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.email}
                                        />
                                    
                                </div>

                                { formik.touched.email && formik.errors.email ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                                        <p className="font-bold" >Error</p>
                                        <p> { formik.errors.email } </p>
                                    </div>
                                ) : null }



                                <div className="mb-4">
                                    <label className ="block text-gray-700 text-sm front-bold mb-2" htmlFor="telefono">
                                        Telefono
                                    </label>
                                    <input 
                                        className = "shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                        id="telefono" 
                                        type="tel" 
                                        placeholder="Telefono" 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.telefono}
                                        />
                                    
                                </div>

                                <input type="submit"
                                className = "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold bg-gray-900"
                                value='Registrar Cliente'
                                 />
                                




                    </form>
                </div>
            </div>

        </Layout>
        
     );
}
 
export default NuevoCliente;