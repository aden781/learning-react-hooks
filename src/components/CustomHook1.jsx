import React from "react";
import useFetch from "./hooks/useFetch";
function CustomHook1() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  console.log(data);
  
  if (loading) {
    return <h3>Loading</h3>;
  }
  
  return (
    <div>
      {data.map((d, index) => (
            <p key={index}>{d.title}</p>
        ))}
    </div>
  );
}

export default CustomHook1;
