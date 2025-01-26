import { useState } from "react"


const Login = () => {

  const [state, setState] = useState('Sing Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
      event.preventDefault();
  }


  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg">
          <p>{state === "Sing Up" ? "Create Account" : "Login"}</p>
          <p>Please {state === "Sing Up" ? "sing up" : "login"} to book appointment</p>

          {
            state === "Sing Up" && 
            <div className="w-full">
              <p>Full Name</p>
              <input className="border border-green rounded w-full p-2 mt-1" type="text" onChange={(e) => setName(e.target.name)} value={name} required />
            </div>
          }
          
          <div className="w-full">
              <p>Email</p>
              <input className="border border-gray rounded w-full p-2 mt-1" type="emil" onChange={(e) => setEmail(e.target.name)} value={email} required />
          </div>
          <div className="w-full">
              <p>Password</p>
              <input className="border border-gray rounded w-full p-2 mt-1" type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
          </div>
          <button className="button_style p-3 w-full cursor-pointer">{state === "Sing Up" ? "Create Account" : "Login"}</button>

          {
            state === "Sing Up" ? <p>Already have an account? <span onClick={() => setState('Login')} className="underline cursor-pointer text-green]">Login here</span></p> : <p>Create an new account? <span onClick={() => setState('Sing Up')} className="underline cursor-pointer text-green]">Click Here</span></p>
          }
      </div>
    </form>
  )
}

export default Login