/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {
        title,
        image_url,
        details,
        _id
        }=news;
        console.log(news)
    return (
        <div className="card card-compact mb-16 border-b-2 bg-base-100 shadow-xl">
        <figure><img  src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {
                details.length > 200 
                ? <p>{details.slice(0,200)} <Link
                 to={`/news/${_id}`}
                 className="font-bold text-blue-600">Read More...</Link></p>
                : <p>{details}</p>
            }
          </p>
        </div>
      </div>
    );
};

export default NewsCard;