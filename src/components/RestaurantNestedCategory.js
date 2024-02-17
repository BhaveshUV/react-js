import { useState } from "react";
import RestaurantNestedCategoryUtil from "./RestaurantNestedCategoryUtil";

const RestaurantNestedCategory = ({ categ, isVeg, setShowIndex, parentVisibility }) => {
    const [showNestedIndex, setShowNestedIndex] = useState(null);

    if(parentVisibility == false && showNestedIndex!=null) {
        setShowNestedIndex(null);
    }

    return (
        <div>
            <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between">
                <h4 className="text-[#daa520] text-xl font-semibold">{categ?.card?.card?.title}</h4>
                <span>&#8597;</span>
            </div>
            {categ?.card?.card?.categories?.map((categ, index) => {
                return <RestaurantNestedCategoryUtil key={categ?.title} categ={categ} isVeg={isVeg} itemsVisibility={index==showNestedIndex} setShowNestedIndex={() => setShowNestedIndex(showNestedIndex == index ? null : index)} setShowIndex={setShowIndex} parentVisibility={parentVisibility} />
            })}
        </div>
    );
}

export default RestaurantNestedCategory;