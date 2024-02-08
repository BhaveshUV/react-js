import { useState } from "react";

const useSearchFunc = () => {
    let [searchTxt, setSearchTxt] = useState(``);

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

export default useSearchFunc;