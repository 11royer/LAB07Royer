import { useState } from "react"

export const Button = () => {
    const [count, setCount] = useState(0)

    function handlerButon() {
        setCount(count + 5)
    }

    return(
        <button onClick={handlerButon}>
            {count}
        </button>
    )
}