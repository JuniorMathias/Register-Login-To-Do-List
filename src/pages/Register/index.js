import { useState } from 'react'
import * as S from './styles';
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true })
      })
      .catch((error) => {
        console.log("Error creating" + error.message)
      })


    }else{
      toast.warn("fill in email and password");
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