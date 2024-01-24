import { CDN_URL } from "../../utils/constant";

export let Card = (props) => {
    let { restaurant } = props;
    let { info } = restaurant;
    return (
        <div className='card'>
            <img src={CDN_URL + info.cloudinaryImageId} />
            <div className="card-title">
                <span id="title">{info?.name}</span>
                <button>{info?.avgRating}&#9733;</button>
            </div>
            <span>{info?.cuisines.join(", ")}</span>
        </div>
    );
}

export default Card;