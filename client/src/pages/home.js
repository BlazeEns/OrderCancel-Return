import React from "react";
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = ({input, setInput}) => {
  const navigate= useNavigate();

 
  const changeValue = (event) => {
    const newValue = event.target.value;
    setInput(newValue.replace('https://', '').replace('/',''));
}

const handleInstall = (e)=>{
  e.preventDefault();
  console.log(input);
}
console.log(input);
  
  return (
    <form onSubmit= {handleInstall} className="needs-validation login" novalidate>
      <div className="containerBox ">
        <div className="form-group mb-4">
          <label forHtml="exampleInputEmail1">Enter your URL Shop</label>&nbsp;
          <input
            type="url"
            name="shop"
            required
            autoComplete="off"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={changeValue}
            placeholder="ShopName.myshopify.com"
          />
        </div>
        
                    
        <button className="btn btn-large btn-block btnSubmit" type="button" name="submit" onClick={()=>{ input && navigate('/shopify')}} value="Install">Submit</button>
      </div>
    </form>
  );
};

export default Home;