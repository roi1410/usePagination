import { useState } from "react";
import "./App.css";
import { fetchPosts, IAllData } from "./utils";
import { usePagination } from "./usePagination";

function App() {
  const [count, setCount] = useState(1);
  const { queryData, add1Page } = usePagination<IAllData[]>({
    currentPage: count,
    maxPage: 10,
    queryFn: fetchPosts,
    setCurrentPage: setCount,
    tag: "tag",
    refetchInterval: 12000,
  });
  const { data, isLoading } = queryData;
  console.log(queryData);
  return (
    <>
      <h1>usePagination example</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((elm) => {
          return (
            <div key={elm.id} className="card">
              {elm.title}
            </div>
          );
        })
      )}
      <button onClick={add1Page}>add page</button>
    </>
  );
}

export default App;
