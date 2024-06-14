import React from "react";
import useLoader from "./Components/Loader";

function App() {
  const showingLoader = useLoader(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return <h1>{showingLoader ? "Loading..." : ""}</h1>;
}

export default App;
