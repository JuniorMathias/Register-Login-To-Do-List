import * as S from './styles';
import { useState } from "react";


export default function Home(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleLogin(e){
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
    <S.Title>To-Do-List</S.Title>
    <S.Span>Manage your Tasks</S.Span>

    <S.Form onSubmit={handleLogin}>
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
      <S.Button type="submit">Login</S.Button>

    </S.Form>
    
    <S.Link to="/register">
      Don't have an account? Subscribe
    </S.Link>


  </S.Container>
  </>
  )
}