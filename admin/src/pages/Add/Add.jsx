import React, { useEffect, useState } from 'react'
import styles from "./Add.module.css"
import { assets } from '../../assets/assets'
import axios from "axios"
const Add = () => {
    const url = "http://localhost/4000"
    const [image , setImage] = useState(false)
    const [data , setData] = useState({
        name : "",
        description : "",
        price : "",
        category : "Salad"
    })

    const onChangeHandler = (e)=>{
        const {name , value} = e.target
        setData(prevData =>({...prevData , [name] : value}))
    }

    useEffect(()=>{
        console.log(image)
    },[image])

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('category', data.category);
        formData.append('image', image);

        try {
            const res = await axios.post(`${url}/api/food/add`, formData );
            if (res.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                });
                setImage(null);
                console.log("Success");
            } else {
                console.log("Fail");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

  return (
    <div className={styles.add}>
        <form className={styles.flexCol} onSubmit={onSubmitHandler}>
            <div className={`${styles.addImgUpload} ${styles.flexCol}`}>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={ image ? URL.createObjectURL(image): assets.upload_area} alt="" />
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden required />
                </label>
            </div>
            <div className={`${styles.addProductName} ${styles.flexCol}`}>
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text"  name='name' placeholder='Type here'/>
            </div>
            <div className={`${styles.addProductDescription} ${styles.flexCol}` }>
                <p>Product Description</p>
                <textarea  onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required />
            </div>
            <div className={styles.addCategoryPrice}>
                <div className={`${styles.addCategory} ${styles.flexCol}` }>
                    <p>Product category</p>
                    <select  onChange={onChangeHandler} name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className={`${styles.addPrice} ${styles.flexCol}` }>
                    <p>Product Price</p>
                    <input  onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20'/>
                </div>
            </div>
            <button type='submit' className={styles.addBtn}>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
