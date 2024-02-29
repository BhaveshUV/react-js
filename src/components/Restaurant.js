import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerRest from "./ShimmerRest";
import useRestInfo from "../../utils/useRestInfo";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantNestedCategory from "./RestaurantNestedCategory";
import Error from "./Error";
import { MENU_URL } from "../../utils/constant";

const Restaurant = () => {
    const [isVeg, setIsVeg] = useState(false);
    const { resId } = useParams(); 
    const [showIndex, setShowIndex] = useState(null);
    const [restInfo, setRestInfo] = useState(null);

    // console.log(resId);

    // const {data: restInfo, error, isLoading} = useRestInfo(resId);

    // if (error) {
    //     return (
    //         <Error />
    //     )
    // } else if(isLoading) {
    //     return (
    //         <ShimmerRest />
    //     )
    // }

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = async () => {
        let response = await fetch(MENU_URL + resId);
        let data = await response.json();

        setRestInfo(data);
    }
    console.log(restInfo);

    if(!restInfo) {
        return <ShimmerRest />
    }

    let { name, id, costForTwoMessage, cuisines, sla, avgRating } = restInfo?.data.cards[0]?.card?.card?.info;
    let { cards: categories } = restInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(categories);
    let checkBox = document.getElementById("vegBtn");
    return (
        <div className="w-[60vw] m-auto pb-2 text-white flex flex-col gap-8">
            <div className="flex justify-between">
                <div className="restInfo">
                    <h2 className="text-2xl font-bold text-yellow-500">{name}</h2>
                    <div>{cuisines.join(", ")}</div>
                    <div>{sla.deliveryTime} mins</div>
                    <div>{costForTwoMessage}</div>
                </div>
                <div className="border-2 leading-none h-fit p-1 rounded-md">
                    {avgRating} &#9733;
                </div>
            </div>
            <div className="menu">
                <div className="veg-nonVeg-toggle">
                    <label htmlFor="vegBtn" className="p-2 cursor-pointer flex items-center gap-2 w-fit">
                        Veg only
                        <div className="toggler-container relative inline-flex box-border h-4 w-8 border-2 border-gray-400 rounded-lg">
                            <div className="toggler absolute inline-block h-full w-5 bg-gray-400 rounded-lg"></div>
                        </div>
                    </label>
                    <input id="vegBtn" type="checkbox" className="hidden" onChange={() => {
                        checkBox = document.getElementById("vegBtn");
                        setIsVeg(checkBox.checked);
                    }}></input>
                </div>
                <hr />
                <h2 className="text-xl font-semibold text-center p-2 text-[#daa520]">Menu</h2>
                <div className="flex flex-col gap-2">
                    {categories?.filter((categ) => (categ?.card?.card?.["@type"] == ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || (categ?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")))?.map((categ, index) => {
                        if(categ?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                            return <RestaurantCategory key={categ?.card?.card?.title} categ={categ?.card?.card} isVeg={isVeg} itemsVisibility={index==showIndex} setShowIndex={() => setShowIndex(showIndex != index ? index : null)} />
                        }
                        else{
                            return <RestaurantNestedCategory key={categ?.card?.card?.title} categ={categ} isVeg={isVeg} parentVisibility={showIndex == index} setShowIndex={() => setShowIndex(showIndex != index ? index : null)} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Restaurant;