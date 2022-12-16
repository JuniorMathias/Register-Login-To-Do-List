import * as S from './styles';
import { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth'; 

import { addDoc, collection } from 'firebase/firestore';

export default function Admin(){
  const [taskInput, setTaskInput] = useState('');
  const [user, setUser] = useState({});


  useEffect(() => {
      async function loadTasks(){
          const userDetail = localStorage.getItem("@detailUser");
          setUser(JSON.parse(userDetail))
      }
      loadTasks();
     }, [])


  async function handleRegister(e){
      e.preventDefault();
      if(taskInput === ''){
          alert("Type your task...");
          return;
      }
      await addDoc(collection(db, "tasks"),{
          task: taskInput,
          created: new Date(),
          userUid: user?.uid
          
      })
      .then(() => {
        alert("Your task has been registered");
        setTaskInput('');
      })
      .catch((error) => {
          alert("Something went wrong, please try again" + error)
      })
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