import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext("");
const API_URL = `https://www.omdbapi.com/?s=batman&apikey=746ce11b`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMoives = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoives(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{isLoading, isError, movie}}> {children} </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
