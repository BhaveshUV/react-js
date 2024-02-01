const ShimmerRest = () => {
    const dummyCat = [];
    for (let i = 0; i < 15; i++) {
        dummyCat.push(i);
    }

    return (
        <div className="restaurant">
            <div className="rest-container" style={{ height: "5rem", backgroundColor: "#a9a9a9" }}>
            </div>
            <div className="menu">
                <div className="veg-nonVeg-toggle">
                    <div style={{ width: "3.5rem", height: "1.5rem", backgroundColor: "#a9a9a9" }}></div>
                    <hr />
                </div>
                <h2 style={{ width: "4rem", height: "1.7rem", backgroundColor: "#a9a9a9" }}></h2>
                <div className="categories">
                    {dummyCat.map((categ) => {
                        return (
                            <div key={categ} id="categ" style={{ backgroundColor: "#a9a9a9" }}>
                                <h4>{categ?.card?.card?.title}</h4>
                                <span style={{ height: "1rem" }}></span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShimmerRest;