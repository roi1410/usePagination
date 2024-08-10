import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchPosts, IAllData } from "./utils";
import { usePagination } from "./usePagination";
import { useQueryClient } from "react-query";

function App() {
  const [count, setCount] = useState(1
  );
  const [allData, setAllData] = useState();

  const { queryData, add1Page } = usePagination<IAllData[]>(
    count,
    10,
    fetchPosts,
    setCount,
    "tag"
  );
  const { data, isLoading } = queryData;
  console.log(data);
  

 

  return (
    <>
      <h1>usePagination example</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((elm) => {
          return <div key={elm.id} className="card">{elm.title}</div>;
        })
      )}
      <button onClick={add1Page}>add page</button>
    </>
  );
}

export default App;
