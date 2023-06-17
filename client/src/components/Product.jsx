import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div>
          <img
            className="w-full h-[400px] object-cover"
            src={details.image}
            alt="productImg"
          />
        </div>

        <div className="w-3/5 ">
          <div>
            <h2 className="text-2xl font-medium">{details.title}</h2>
            <div>${details.price}</div>
            <p>{details.description}</p>
            <p>Category : {details.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
