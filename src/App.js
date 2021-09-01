import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [covdata, setCovdata] = useState('');

  useEffect(() => {
    const url = 'https://covid-api.mmediagroup.fr/v1//cases?country=Pakistan';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.All);
        setCovdata(json.All);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h1>Covid data in Pakistan</h1>
     
      <p>Country: {covdata.country}</p>
      <p>Confirmed: {covdata.confirmed}</p>
      <p>Deaths: {covdata.deaths}</p>
      <p>Life Expectancy {covdata.life_expectancy}</p>
      <p>Population: {covdata.population}</p>
      </center>
    </div>
    
  );
}
