"use client"
import { useState } from 'react';
import "./addsoda.css"

export default function MyForm() {
  const [formData, setFormData] = useState({});
  const [dataArray, setDataArray] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataArray([...dataArray, formData]);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:<br/>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      </label>
      <label>
        Where can one buy this:<br/>
        <input type="text" name="buy" value={formData.buy || ''} onChange={handleChange} />
      </label>
      <label>
        How much does it cost:<br/>
        <input type="text" name="cost" value={formData.cost || ''} onChange={handleChange} />
      </label>
      <label>
        Rate the taste out of 10:<br/>
        <input type="text" name="taste" value={formData.taste || ''} onChange={handleChange} />
      </label>
      <label>
        Rate the price out of 10:<br/>
        <input type="text" name="price" value={formData.price || ''} onChange={handleChange} />
      </label>
      <label>
        Add picture:<br/>
        <input type="file" name="img" value={formData.img || ''} onChange={handleChange} />
      </label>
      <label>
        Write a few words about the product:<br/>
        <textarea name="description" value={formData.description || ''} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(dataArray, null, 2)}</pre>
    </form>
  );
}