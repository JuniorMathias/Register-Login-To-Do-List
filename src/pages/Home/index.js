import * as S from './styles';
import { useState } from 'react'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export default function Home(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navegate to /admin
        navigate('/admin', { replace: true } )
      })
      .catch(() => {
        alert("ERROR TO LOGIN")
      })

    }else{
      alert("Fill in your email and password")
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