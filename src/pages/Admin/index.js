import * as S from './styles';
import { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth'; 

import { addDoc, collection, onSnapshot, query, orderBy, where, doc, deleteDoc } from 'firebase/firestore';

export default function Admin(){
  const [taskInput, setTaskInput] = useState('');
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      async function loadTasks(){
          const userDetail = localStorage.getItem("@detailUser");
          setUser(JSON.parse(userDetail))
          if(userDetail){
            const data = JSON.parse(userDetail);
            const taskRef = collection(db, "tasks");
            const q = query(taskRef, orderBy("created", "desc"), where("userUid", "==", data?.uid));
            const unsub = onSnapshot(q, (snapshot) => {
                let list = [];
                snapshot.forEach((doc) => {
                    list.push({
                      id: doc.id,
                      task: doc.data().task,
                      userUid: doc.data().userUid,
                    })
            })
            setTasks(list);
          })
        } 
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
async function deleteTask(id){
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
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
        {tasks.map((item) => (
        <S.Article key={item.id}>

            <S.Paragraph>
               {item.task}
            </S.Paragraph>
            <S.Buttons>
                <S.ButtonEdit>Edit</S.ButtonEdit>
                <S.ButtonDone onClick={ () => deleteTask(item.id)}>Done</S.ButtonDone>
            </S.Buttons>
        </S.Article>
        ))}
        <S.ButtonLogout onClick={handleLoagout}>Log out</S.ButtonLogout>

        </S.Container>
    )
}