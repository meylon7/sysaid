import React,{useState, useEffect} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import '../styles/list.css'
const History = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    if(data.length > 19) data.pop()
    setData(JSON.parse(localStorage.getItem("history")))
  },[])
 
  return (
    <div className="history-list">
      <ul>
        {
          data?.map((res, id) => {
            return <li key={id}>{res}</li>
          })
        }
      </ul>  
    </div>
  )
}

export default History