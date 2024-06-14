import React from "react";
import { useState, useEffect } from "react";

function useLoader(url) {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        if (jsonData) {
          setShowLoader(() => {
            console.log("fetched1");
            // console.log(jsonData);
            return false;
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return () => {
      setShowLoader(true);
    };
  }, [url]);
  return showLoader;
}

export default useLoader;
