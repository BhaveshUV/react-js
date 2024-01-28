const ShimmerCard = () => {
    return (
        <div className='shimmer-card'>
            <div className="image"></div>
            <div className="card-title">
                <span id="title"></span>
                <button></button>
            </div>
            <span></span>
        </div>
    );
}

const Shimmer = () => {
    let arr = [];
    for(let i=0; i<20; i++) {
        console.log("Shimmercard");
        arr.push(<ShimmerCard key={i} />);
    }
    return arr;
}

export default Shimmer;