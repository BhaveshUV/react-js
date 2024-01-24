import Search from "./Search";
import restaurants from "../../utils/mockData";
import Card from "./Card";
import { useState } from "react";


export let Body = () => {
    let [rests, setRests] = useState(restaurants);
    return (
        <div className='body'>
            <div className="search-box">
                <input type="text" id="search" placeholder='Search for restaurant, cuisine or a dish' />
                <button id="searchBtn" onClick={
                    () => {
                        rests = restaurants;
                        let search = document.getElementById("search");
                        let key = search.value;
                        key = key.toLowerCase();
                        let filtered = rests.filter(
                            (rest) => {
                                return (rest.info.name.toLowerCase().indexOf(key) !== -1 || rest.info.cuisines.some(
                                    (item) => {
                                        return item.toLowerCase().indexOf(key) != -1;
                                    }
                                ));
                            }
                        );
                        setRests(filtered);
                    }
                }>Search</button>
            </div>
            {/* <Search /> */}
            <div id="filter">
                <button id="rating4+" onClick={
                    () => {
                        let filtered = rests.filter((rest) => rest.info.avgRating > 4)
                        setRests(filtered);
                    }
                }>4+ Rating</button>
            </div>
            <div className='card-container'>
                {rests.map((restaurant) => <Card key={restaurant.info.id} restaurant={restaurant} />)}
                {/* This is a js comment inside JSX */}
            </div>
        </div>
    );
}

export default Body;