import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})  
    useEffect(() => {
        console.log('Message Mounted')

        return () => {
            console.log('Message Unmounted')
        }
    }, [])

    useEffect(() => {
        // Cuando se monta
        const onMouseMove = ({ x, y }) => {
            setCoords({x,y});
            // const coords = { x, y };
            // console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove)
        // Cuando se desmonta
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}

        </>
    )
}
