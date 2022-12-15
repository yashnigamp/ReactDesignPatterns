import React, { useEffect, useState } from "react";
import axios from "axios";

const usersData = (WrappedComponent, entity) => {
  return () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const {data} = await axios.get(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        //console.log(data)
        // const json = await response.data.json();

        setData(data);
      };
      fetchData();
    }, []);

    let filteredData = data.slice(0,20).filter((ind) => {
      if (entity === "users") {
        const { name } = ind;
        return name.indexOf(term) >= 0;
      }
      if (entity === "todos") {
        const { title } = ind;
        return title.indexOf(term) >= 0;
      }
    })

    return(
        <div className="gridStr">
        <h2>
            {entity.toUpperCase()}
        </h2>
        <input type="text" value = {term} onChange ={(inp)=> {
          setTerm(inp.target.value);
        }}/>
        <WrappedComponent data = {filteredData}></WrappedComponent>
        </div>
    )
  };
};
export default usersData;
