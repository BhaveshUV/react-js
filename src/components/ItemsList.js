import { CDN_URL } from "../../utils/constant";
import { VegIcon, NonVegIcon } from "./RestaurantCategory";
import { CDN_URL } from "../../utils/constant";

const ItemsList = ({ categ, isVeg, itemsVisibility }) => {
    return (
        <div>
            {itemsVisibility && categ?.itemCards?.filter((dish) => {
                if (isVeg) {
                    return dish?.card?.info?.isVeg;
                }
                else {
                    return dish;
                }
            }).map((dish) => {
                return (
                    <div key={dish.card.info.name} className="py-4 border-gray-400 border-b-[1px]">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="w-9/12">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    {(dish.card.info.isVeg == 1) ? <VegIcon /> : <NonVegIcon />}
                                </div>
                                <div>{dish.card.info.name}</div>
                                <div className="text-sm">₹{dish?.card?.info?.price / 100 || dish?.card?.info?.defaultPrice / 100 || ""}</div>
                                <div className="text-xs py-4 text-gray-400">{dish?.card?.info?.description}</div>
                            </div>
                            <div className="w-32 min-h-12 relative h-fit">
                                <button className="bg-white text-green-700 text-sm font-bold px-4 py-2 rounded-lg absolute left-[50%] translate-x-[-50%] bottom-[-0.5rem] w-max shadow-sm shadow-gray-400">ADD +</button>
                                <img className="rounded-lg" src={CDN_URL + dish?.card?.info?.imageId} alt=""/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsList;