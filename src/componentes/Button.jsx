import { useState } from "react"

export const Button = () => {
    const [count, setCount] = useState(0)

    function handlerButon() {
        //setCount(count + 5)
        const randomValue = Math.floor(Math.random() * 100) + 1
        alert(`Valor aleatorio: ${randomValue}`)
    }

    return(
        <button onClick={handlerButon}>
            {count}
        </button>
    )
}

