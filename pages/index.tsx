import Head from 'next/head'
import styles from '../styles/Home.module.css'
import app from '../lib/firebase'
import { DocumentData, getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from 'react';



const db = getFirestore(app)



export default function Home() {
  const [docs, setDocs] = useState<any[] | null>(null)

  async function testing() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
      updateState()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const updateState = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    setDocs(querySnapshot.docs)
  }

  useEffect(() => {
    updateState()
  }, [])
  
  console.log(docs)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <button className='bg-slate-300 p-2 rounded-lg' onClick={testing}>add user button</button>
    {docs ? docs.map(doc => (
      <div key={doc.id}>{doc.id}</div>
    ))
    : null}
    </div>
  )
}



