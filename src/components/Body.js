import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let searchFunc = undefined;


export let Body = () => {
    window.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchFunc();
            // console.log(event);
        }
    });
    let html = document.getElementsByTagName("html");
    let [rests, setRests] = useState([]);
    let [searchTxt, setSearchTxt] = useState(``);
    let [restsCopy, setRestsCopy] = useState([]);
    // console.log("RestsCopy: ", restsCopy);
    useEffect(() => {
        fetchData?.();
    }, []);

    let fetchData = async () => {
        console.log("useEffect called");
        let data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.1582215%26lng%3D72.9597433%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        let dataJson = await data.json();
        restList = dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restList);
        setRestsCopy(restList);
        setRests(restList);
    }

    if (rests.length === 0) {

        return (
            // html[0].style = "overflow: hidden",
            <div className='body'>
                <div className="search-box">
                    <input type="text" id="search" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={
                    (e) => {
                        setSearchTxt(e.target.value);
                    }
                }/>
                    <button id="searchBtn">Search</button>
                </div>
                <div id="filter">
                    <button id="filter-rating">4.3+ Rating</button>
                </div>
                <div className='card-container'>
                    <Shimmer />
                </div>
            </div>
        )
    }
    
    searchFunc = function () {
        let search = document.getElementById("search");
        let rests = restsCopy.filter(
            (rest) => {
                return (rest.info.name.toLowerCase().includes(searchTxt.toLowerCase()) || rest.info.cuisines.some(
                    (item) => {
                        return item.toLowerCase().includes(searchTxt.toLowerCase());
                    }
                ));
            }
        );
        if(rests != false) {
            setRests(rests);
        }
    }

    return (
        // html[0].style = "overflow: auto",
        <div className='body'>
            <div className="search-box">
                <input type="text" id="search" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={
                    (e) => {
                        setSearchTxt(e.target.value);
                    }
                }/>
                {/* <Search /> */}
                <button id="searchBtn" onClick={
                    () => {
                        searchFunc();
                    }
                }>Search</button>
            </div>
            <div id="filter">
                <button id="filter-rating" onClick={
                    () => {
                        let rests = restsCopy.filter((rest) => rest.info.avgRating > 4)
                        setRests(rests);
                    }
                }>4+ Rating</button>
            </div>
            <div className='card-container'>
                {rests.map((restaurant) => <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}><Card restaurant={restaurant} /></Link>)}
                {/* This is a js comment inside JSX */}
            </div>
        </div>
    );
}

export default Body;