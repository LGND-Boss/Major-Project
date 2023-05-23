import React, { useState, useEffect } from 'react';
import "./app.css";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InfoCard from './InfoCard';


function SearchBar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if ( query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">

      <TextField
        id="standard-basic"
        className='search'
        label="Find 'Anuradha Raheja'"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Box p="2rem 0" />
      {query.length > 2 && data.map((item) => (
        <InfoCard  key={item.id} firstName={item.first_name} lastName={item.last_name} role={item.role} email={item.email} imgUrl={item.imgUrl} brief={item.brief} />
          ))}
    </div>
  );
}

export default SearchBar
