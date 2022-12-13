import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState,onInputChange,onResetForm,username,email,password} = useForm({
        username:'',
        email:'',
        password:''
    });

    // const{username,email,password}=formState;
    



    return (
        <>

            <h1>Form con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            {/* {
                username==='n.mejias' && <Message />
            } */}

            <button 
                className="btn btn-primary mt-2"
                onClick={onResetForm}
                >
                    Borrar
                </button>

        </>
    )
}
