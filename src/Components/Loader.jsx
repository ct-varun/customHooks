import React from "react";
import { useState, useEffect } from "react";

function useLoader(url) {
  const [showLoader, setShowLoader] = useState(true);
  const [jsonData, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url);
        const jsondata = await data.json();
        if (jsondata) {
          setShowLoader(false);
          setData(jsondata);
          console.log(jsondata);
        }
        console.log("hello");
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return () => {
      setShowLoader(true);
    };
  }, [url]);
  return [showLoader, jsonData];
}

export default useLoader;
