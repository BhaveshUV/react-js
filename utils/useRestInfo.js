// import { MENU_URL } from "./constant";
// import { useState, useEffect } from "react";
import { useGetRestaurantByIdQuery } from "./appStore/apiSlice";


const useRestInfo = (resId) => {
    // const [restInfo, setRestInfo] = useState(null);
    const restInfo = useGetRestaurantByIdQuery(resId);


    // const fetchData = async () => {
    //     const info = await fetch(MENU_URL + resId);
    //     const json = await info.json();
    //     console.log(json);
    //     setRestInfo(json.data);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return restInfo;
}

export default useRestInfo;