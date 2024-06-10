import React, { useEffect, useState } from 'react'
import styles from "./List.module.css"
import axios from 'axios'
const List = () => {
  const url = "http://localhost:4000"
  const [list , setList] = useState([])

  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      console.log(res.data);
      setList(res.data.data);
    } catch (error) {
      console.error("An error occurred while fetching the list:", error);
      toast.error("An error occurred while fetching the list. Please try again.");
    }
  };

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className={`${styles.list} ${styles.add} ${styles.flexCol}`}>
      <p>All Food List</p>
      <div className="listTable">
      <div className={`${styles.listTableFormat} ${styles.title}`}>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item , index)=>{
          return(
            <div key={index} className={`${styles.listTableFormat}`}>
                <img src={`${url}/images/${item.image}`} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className={styles.cursor}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
