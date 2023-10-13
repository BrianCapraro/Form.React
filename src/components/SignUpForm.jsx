import { useState } from "react";



export default function SignUpForm({ setToken }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event){
    event.preventDefault();
    try {
        const url = 'https://fsa-jwt-practice.herokuapp.com/signup';
        const response = await fetch(url)
        const result = response.json()
        setToken(result.token);
        console.log(result.token)

        
    } catch(error){
        console.log(error)
    }
    }
    return (
    <>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <label>
               Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label><br />
            <label>
               Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label><br />
            <button>Submit</button>
        </form>
    </>
    ) 
      
}