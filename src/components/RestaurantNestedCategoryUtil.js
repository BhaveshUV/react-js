import { VegIcon, NonVegIcon } from "../../utils/constant";
import { CDN_URL } from "../../utils/constant";
import ItemsList from "./ItemsList";

const RestaurantNestedCategoryUtil = ({ categ, isVeg, itemsVisibility, setShowNestedIndex, setShowIndex, parentVisibility }) => {
    // const [itemsVisibility, setItemsVisibility] = useState(false);

    let items = categ?.itemCards?.filter((dish) => {
        if (isVeg) {
            return dish?.card?.info?.isVeg;
        }
        else {
            return dish;
        }
    })

    const handleClick = () => {
        // setItemsVisibility(!itemsVisibility);
        // console.log(itemsVisibility);
        setShowNestedIndex();
        if(!parentVisibility){
            setShowIndex();
        }
    };
    return (
        <>
            {items.length ?
                <>
                    <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between" onClick={handleClick}>
                        <h4 className="text-white text-lg font-semibold">{categ?.title} ({items.length})</h4>
                        <span>&#8597;</span>
                    </div>
                    {parentVisibility && itemsVisibility && <ItemsList items={items} />}
                </> : <></>
            }
        </>
    );
}

export default RestaurantNestedCategoryUtil;