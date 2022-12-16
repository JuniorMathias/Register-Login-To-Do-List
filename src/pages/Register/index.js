import * as S from './styles';
import { useState } from "react";


export default function Register(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleRegister(e){
  e.preventDefault();
  if(email !== '' && password !== ''){
    alert("You are logged in.");
    setEmail("");
    setPassword("");
  }else{
    alert("Fill in email and password.");
  }
}



  return(
  <>
  <S.Container>
    <S.Title>Sign In</S.Title>
    <S.Span>Let's Create Your Account</S.Span>

    <S.Form onSubmit={handleRegister}>
      <S.Input
        type="text"
        placeholder="Type your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        autoComplete={false}
        type="password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button type="submit">Register</S.Button>

    </S.Form>
    
    <S.Link to="/">
      Already have an account? Sign in
    </S.Link>


  </S.Container>
  </>
  )
}