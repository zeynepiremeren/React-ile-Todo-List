import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
   const [yeniBaslik, setyeniBaslik]= useState("");

  const addNew = title =>{
    setListe([...liste, {id: Date.now(), baslik:title, tamamlandi: false}])
  setyeniBaslik('')
  }


   console.log(yeniBaslik)

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input value={yeniBaslik} onChange={(e)=>{setyeniBaslik(e.target.value)}}   placeholer="listeye ekle" />
        <button onClick={()=>
          
          
         { addNew(yeniBaslik) }    
          
          
         } >Ekle</button>
      </div>
      <div className="liste">
        {liste.map(item => (
          <div 
          key={item.id}
          onClick={()=>{
            setListe(liste.map(el => el.id === item.id ? {...el, tamamlandi: !el.tamamlandi} : el ))
          
          }}
          
          
          
          className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button onClick={()=> setListe(liste.filter(item => !item.tamamlandi))}
      
      className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}
