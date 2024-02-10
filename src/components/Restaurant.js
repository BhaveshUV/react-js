import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerRest from "./ShimmerRest";
import useRestInfo from "../../utils/useRestInfo";

const VegIcon = () => {
    return (
        <div style={{ height: "0.8rem", width: "0.8rem", border: "1px solid green", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "0.5rem", lineHeight: "1" }}>
            <div style={{ height: "0.5rem", width: "0.5rem", borderRadius: "50%", backgroundColor: "green" }}></div>
        </div>
    )
}
const NonVegIcon = () => {
    return (
        <div style={{ height: "0.8rem", width: "0.8rem", border: "1px solid red", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "0.5rem", lineHeight: "1" }}>
            <div style={{ height: "0.5rem", width: "0.5rem", borderRadius: "50%", backgroundColor: "red" }}></div>
        </div>
    )
}

const Restaurant = () => {
    const [isVeg, setIsVeg] = useState(false);
    const { resId } = useParams();

    console.log(resId);

    const restInfo = useRestInfo(resId);

    if (restInfo == null) {
        return (
            <ShimmerRest />
        )
    }

    let { name, id, costForTwoMessage, cuisines, sla, avgRating } = restInfo?.cards[0]?.card?.card?.info;
    let { cards: categories } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(categories);
    let checkBox = document.getElementById("vegBtn");
    return (
        <div className="w-[60vw] m-auto text-white flex flex-col gap-8">
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
                    {categories?.filter((categ) => (categ?.card?.card?.title?.length > 0 && categ?.card?.card?.title != "Top Picks"))?.map((categ) => {
                        return (
                            <div key={categ?.card?.card?.title}>
                                <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between">
                                    <h4 className="text-[#daa520] text-xl font-semibold">{categ?.card?.card?.title}</h4>
                                    <span>&#8597;</span>
                                </div>
                                {categ?.card?.card?.categories?.map((categ) => {
                                    return (
                                        <div key={categ?.title}>
                                            <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between">
                                                <h5 className="font-semibold">{categ?.title}</h5>
                                                <span>&#8597;</span>
                                            </div>
                                            {categ?.itemCards?.filter((dish) => {
                                                if (isVeg) {
                                                    return dish?.card?.info?.isVeg;
                                                }
                                                else {
                                                    return dish;
                                                }
                                            })?.map((dish) => {
                                                return (
                                                    <div key={dish.card.info.name}>
                                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                            <span style={{ display: "flex", alignItems: "center" }}>
                                                                {(dish.card.info.isVeg == 1) ? <VegIcon /> : <NonVegIcon />}
                                                                {dish.card.info.name}
                                                            </span>
                                                            <span style={{ color: "#daa520" }}>{dish?.card?.info?.price / 100 || dish?.card?.info?.defaultPrice / 100 || ""}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                                {categ?.card?.card?.itemCards?.filter((dish) => {
                                    if (isVeg) {
                                        return dish?.card?.info?.isVeg;
                                    }
                                    else {
                                        return dish;
                                    }
                                }).map((dish) => {
                                    return (
                                        <div key={dish.card.info.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ display: "flex", alignItems: "center" }}>
                                                {(dish.card.info.isVeg == 1) ? <VegIcon /> : <NonVegIcon />}
                                                {dish.card.info.name}
                                            </span>
                                            <span style={{ color: "#daa520" }}>{dish.card.info.price / 100 || dish.card.info.defaultPrice / 100 || ""}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Restaurant;