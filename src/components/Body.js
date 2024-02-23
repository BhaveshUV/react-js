import Card, { withVegLabel } from "./Card";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useGetRestaurantListQuery } from "../../utils/appStore/apiSlice";

let searchFunc = undefined;


export let Body = () => {
    // console.log(`Body render`);
    let html = document.getElementsByTagName("html");
    // let [rests, setRests] = useState([]);
    let [searchTxt, setSearchTxt] = useState(``);
    // let [restsCopy, setRestsCopy] = useState([]);

    let { username, setUser } = useContext(UserContext);

    let { data: dataJson, error, isLoading } = useGetRestaurantListQuery();
    restList = dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restList);

    // console.log("RestsCopy: ", restsCopy);
    // useEffect(() => {
    //     let action = (event) => {
    //         if (event.key === "Enter") {
    //             searchFunc();
    //             console.log(event);
    //         }
    //     }
    //     window.addEventListener("keydown", action);
    //     fetchData?.();

    //     return () => {
    //         window.removeEventListener("keydown", action);
    //     }
    // }, []);

    let fetchData = async () => {
        console.log("useEffect called");
        let data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.07480%26lng%3D72.88560%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        let dataJson = await data.json();
        restList = dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restList);

        // setRestsCopy(restList);
        // setRests(restList);
    }

    let status = useOnlineStatus();
    if (!status) {
        return <h2 style={{ color: "white", textAlign: "center" }}>
            Looks like you are offline! Please check your internet connection
        </h2>;
    }

    if (error) {
        return (
            <Error />
        )
    } else if (isLoading) {
        return (
            // html[0].style = "overflow: hidden",
            <div className='flex flex-col gap-8 px-[10vw]'>
                <div className="w-[100%] h-10 flex gap-2">
                    <input type="text" className="w-[100%] rounded-lg text-lg placeholder:px-1" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={
                        (e) => {
                            setSearchTxt(e.target.value);
                        }
                    } />
                    <button className="rounded-md bg-gray-300 px-2">Search</button>
                </div>
                <div id="filter">
                    <button className="rounded-md bg-green-800 leading-8 text-white px-2">4+ Rating</button>
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Shimmer />
                </div>
            </div>
        )
    }

    searchFunc = function () {
        console.log(`SearchFunc through Event Listener`)
        // let search = document.getElementById("search");
        let rests = restsCopy.filter(
            (rest) => {
                return (rest.info.name.toLowerCase().includes(searchTxt.toLowerCase()) || rest.info.cuisines.some(
                    (item) => {
                        return item.toLowerCase().includes(searchTxt.toLowerCase());
                    }
                ));
            }
        );
        if (rests != false) {
            setRests(rests);
        }
    }

    // setRestsCopy(restList);
    // setRests(restList);

    let rests = restList;
    let restsCopy = restList;

    let VegCard = withVegLabel(Card);

    return (
        // html[0].style = "overflow: auto",
        <div className='flex flex-col gap-8 px-[10vw]'>
            <div className="w-[100%] h-10 flex gap-2">
                <input type="text" className="w-[100%] rounded-lg text-lg placeholder:px-1" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={
                    (e) => {
                        setSearchTxt(e.target.value);
                    }
                } />
                {/* <Search /> */}
                <button className="rounded-md bg-gray-300 px-2" onClick={
                    () => {
                        searchFunc();
                    }
                }>Search</button>
            </div>
            <div id="filter" className="flex gap-2 items-center h-8">
                <button className="rounded-md bg-green-800 text-white px-2 h-full" onClick={
                    () => {
                        let rests = restsCopy.filter((rest) => rest.info.avgRating > 4)
                        setRests(rests);
                    }
                }>4+ Rating</button>
                <label htmlFor="dynamic_username" className="text-white">Set the user from here: </label>
                <input type="text" id="dynamic_username" className="px-2 rounded-lg h-full" value={username} onChange={(e) => setUser(e.target.value)}></input>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {rests.map((restaurant) => <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                    {/* {console.log(restaurant)} */}
                    {restaurant.info.veg ? <VegCard restaurant={restaurant} /> : <Card restaurant={restaurant} />}
                </Link>)}
                {/* This is a js comment inside JSX */}
            </div>
        </div>
    );
}

export default Body;