import React from "react";
import useLoader from "./Components/Loader";

function App() {
  const [showingLoader, data] = useLoader(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return showingLoader ? (
    <h1>"Loading..."</h1>
  ) : (
    <div>
      "Data Fetched" {console.log("data fetched", data)}
      {/* {data.map((item) => console.log(item))} */}
      {data.map((item) => (
        <div key={item.id}>{`${item.title}, ${item.id}`}</div>
      ))}
    </div>
  );
}

export default App;
