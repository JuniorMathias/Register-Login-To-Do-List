import * as S from './styles';
import { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth'; 
import { toast } from 'react-toastify';

import {
    addDoc, 
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc,
    updateDoc } from 'firebase/firestore';

export default function Admin(){
  const [taskInput, setTaskInput] = useState('');
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState({});

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
          toast.error("Type your task...");
          return;
      }

      if(edit?.id){
        handleUpdateTask();
        return;
      }

      await addDoc(collection(db, "tasks"),{
          task: taskInput,
          created: new Date(),
          userUid: user?.uid

      })
      .then(() => {
        toast.success("Your task has been registered");
        setTaskInput('');
      })
      .catch((error) => {
        toast.warn("Something went wrong, please try again" + error)
      })
  }
  async  function handleLoagout(e){
    await signOut(auth);
}
async function deleteTask(id){
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
    toast.success("Task has been deleted");
}
function editTask(item){
    setTaskInput(item.task);
    setEdit(item);
}
async function handleUpdateTask(){
    const docRef = doc(db, "tasks", edit?.id)
    await updateDoc(docRef, {
        task: taskInput
    })
    .then(() => {
       toast.success("Task updated");
        setTaskInput('');
        setEdit({});
    })
    .catch((error) => {
        toast.warn("Error to Update, please try again" + error);
        setTaskInput('');
        setEdit({});
    });
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
          {Object.keys(edit).length > 0 ?(
            <S.Button type="submit">Update Task</S.Button> 
          ) : (
            <S.Button type="submit">Add Task</S.Button>
          )}
        </S.Form>
        {tasks.map((item) => (
        <S.Article key={item.id}>

            <S.Paragraph>
               {item.task}
            </S.Paragraph>
            <S.Buttons>
                <S.ButtonEdit onClick={() => editTask(item)}>Edit</S.ButtonEdit>
                <S.ButtonDelete onClick={ () => deleteTask(item.id)}>Delete</S.ButtonDelete>
            </S.Buttons>
        </S.Article>
        ))}
        <S.ButtonLogout onClick={handleLoagout}>Log out</S.ButtonLogout>

        </S.Container>
    )
}