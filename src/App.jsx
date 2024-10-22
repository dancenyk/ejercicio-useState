import './App.css'
import { useState } from "react";

function App() {
    const [name, setName] = useState("Sofía")
    const [newName, setNewName] = useState(" ")

    const handleChangeName = (teacherName) => {
        setName(teacherName)
    }

    const changeName = (e) =>{
       e.preventDefault() // evitar la recarga de la página 
       //newName ? setName(newName) : null
       if (newName.trim()){
        setName(newName)
        setNewName("")
       }
    }

    return (
        <>
            <h2>Teacher Name: {name} </h2>
            <ul>
                <li onClick={()=>handleChangeName("Data")}>Data</li>
                <li onClick={()=>handleChangeName("Reyes")}>Reyes</li>
                <li onClick={()=>handleChangeName("Soraya")}>Soraya</li>
            </ul>

            <form onSubmit={changeName}>
                <input 
                    type="text" 
                    placeholder="add a name"  
                    value={newName} 
                    onChange={(e)=>setNewName(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </>
    );
}



export default App
