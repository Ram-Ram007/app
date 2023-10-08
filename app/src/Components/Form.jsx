import { useState } from "react"

function Form()
{

    const[name,setName] = useState("")
    // console.log(name)

    function handleSumit(e){
        e.preventDefault()
        console.log(name)
    }


    return(
        <form onClick={handleSumit}>
            <label>Enter your name</label>
            <input type="text" onChange={(e)=>
            {
                setName(e.target.value)
            }}></input>
            <input type="submit" value="click" />

        </form>
    )
}


export default Form;