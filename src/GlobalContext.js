import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import url from './Components/BaseUrl';
const GlobalStateContext = createContext();
const GlobalStateUpdateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalUpdate = () => useContext(GlobalStateUpdateContext);

export function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        TotalConfirmed: null,
        TotalDeaths: null,
        TotalRecovered: null,
        Countries: []
    })
    useEffect(() => {
        async function covidData() {
            axios({
                method: "get",
                url: 'https://api.covid19api.com/summary',
                withCredentials: true
            }).then((res) => {
                console.log("Data", res.data.Global.TotalConfirmed)
                setData((prev) => ({
                    ...prev,
                    TotalConfirmed: res?.data?.Global?.TotalConfirmed,
                    TotalDeaths: res?.data?.Global?.TotalDeaths,
                    TotalRecovered: res?.data?.Global?.TotalRecovered
                }))
            }).catch((err) => {
                console.log("Context Api Error", err);
            })
            return () => {
                console.log("cleanup");
            }
        }
        covidData();
    }, []);

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}
