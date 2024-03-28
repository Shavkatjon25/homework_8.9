import { addDoc, collection, getDocs } from "firebase/firestore"
import { setDoc } from "firebase/firestore"; 
import { doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { ml } from "./fribaseApp"


function Book() {
    const [load, setLoad]=useState(false)
    const [title, setNom]=useState('')
    const [mt, setMt]=useState()
    const [year, setNm]=useState('')
    const [edit, setEdit]=useState(false)
    const [edi, setEdi]=useState()

 async   function Qosh(e){
    e.preventDefault()
        if (title.length>0) {
            setLoad(true)
            if (edit) {
                const cityRef = doc(ml, 'kitoblar', edi);
                setDoc(cityRef,{title : title, year:year},);
                getData()
                setEdit(false)
            }else{ const ref= await addDoc(collection(ml, 'kitoblar' ),{title, year})}
            getData()
            setNm('')
            setNom('')
            setLoad(false)
        }
    }


    useEffect(()=>{

    
        getData()
    }, [])
    async function getData(){
        let arr=[]
        const dt=await getDocs(collection(ml, 'kitoblar'));
        dt.forEach(d=>{
            let mas={title:d.data().title, year:d.data().year, id: d.id}
            arr.push(mas)
        })
        setMt(arr)
    }
    async function Delet(e){

      const mal=  await deleteDoc(doc(ml, "kitoblar" , e));
      getData()
    }

    function Edit(a){
        setNom(a.title);
        setNm(a.year)
        setEdit(true)
        setEdi(a.id)
    }

  return (
    <div className="w-full bg-slate-300 h-[100vh] pt-24">
        <div className="mx-auto  w-[600px] flex flex-col items-center  gap-5 bg-slate-500 py-5 rounded-3xl">
        <h2 className="text-[28px] text-white">Kotoblar olami</h2>
        <form action="" className=" flex gap-3">
            <input type="text" className="px-3 py-1 rounded-md" placeholder="Kitob nomi" value={title} onChange={e=>setNom(e.target.value)} />
            
            <input type="number" className="px-3 py-1 rounded-md"  value={year} placeholder="yozilgan yili" onChange={e=>setNm(e.target.value) }/>
            <button onClick={e=>Qosh(e)} disabled={load || title.length==0 || year.length==0} className="px-4 py-2 bg-indigo-500  rounded-md">{edit ? 'Edit': 'Add'}</button>
        </form>
       <ul>
       {mt?.map(k=> <div className="text-white text-[20px]  flex w-[450px]" key={k.id}><span className="flex-1">{k.title} ({k.year}) </span> <button className="flex justify-end items-center mx-2"  onClick={()=>Edit(k)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(47,87,212,1)"><path d="M9.24264 18.9967H21V20.9967H3V16.754L12.8995 6.85453L17.1421 11.0972L9.24264 18.9967ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg></button> <button onClick={()=>Delet(k.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(230,29,29,1)"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg></button></div>)}
       </ul>
        </div>
    </div>
  )
}

export default Book