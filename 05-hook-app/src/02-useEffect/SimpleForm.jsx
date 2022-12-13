import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'n.mejia',
        email: 'n.mejia@bona.com.do'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log(target.value)
        setFormState({
            ...formState,
            [name]: value
        })
    }
    // Se renderiza una sola vez
    useEffect(() => {
        // console.log('useEffect called')

    }, [])

    useEffect(() => {
        // console.log('formState changed')

    }, [formState])

    useEffect(() => {
        // console.log('email changed')

    }, [email])




    return (
        <>

            <h1>Simple Form</h1>
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
            {
                username==='n.mejias' && <Message />
            }
            
        </>
    )
}
