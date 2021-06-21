import React, {useState,useContext} from 'react';

const SignUp = ({onRegister}) => {
    const [firstName,setFirstName] = useState('');
        const [password,setPassword] = useState('');
        const [email,setEmail] = useState('');
        const [people,setPeople] = useState([]);

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(firstName && password && email){
          setFirstName(" ");
          setPassword(" ");
          setEmail(" ");
        
    } else {
      alert("Fill the form completly");
    }
  };
       
    return (
        <article className='signup'>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Name:</label>
                   <input 
                   type='text'
                    id='firstName' 
                    value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                     type='password' 
                     id='password' 
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type='email' 
                    id='email'
                 value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button className="submit" type="submit"> Login </button>
            </form>
            {
                people.map((person)=>{
                    const{id,firstName,password,email} = person;
                    return <div className="item" key={id}>
                        <h4>{firstName}</h4>
                        <p>{password}</p>
                        <p>{email}</p>
                    </div>
                })
            }
        </article>
    )
}

export default SignUp
