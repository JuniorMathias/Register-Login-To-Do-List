import * as S from './styles';
import { useState } from 'react';
import { auth } from '../../firebaseConnection';
import { signOut } from 'firebase/auth'; 

export default function Admin(){
  const [taskInput, setTaskInput] = useState('');


  function handleRegister(e){
      e.preventDefault();
      alert("click");
  }
  async  function handleLoagout(e){
    await signOut(auth);
}

    return(
        <S.Container>
        <S.Header>My Tasks</S.Header>

        <S.Form onSubmit={handleRegister}>
          <S.Textarea 
            placeholder="Type your task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <S.Button type="submit">Register Tasks</S.Button>
        </S.Form>
        <S.Article>
            <S.Paragraph>
                Study JavaScript and ReactJs tonight
            </S.Paragraph>
            <S.Buttons>
                <S.ButtonEdit>Edit</S.ButtonEdit>
                <S.ButtonDone>Done</S.ButtonDone>
            </S.Buttons>
        </S.Article>
        <S.ButtonLogout onClick={handleLoagout}>Log out</S.ButtonLogout>

        </S.Container>
    )
}