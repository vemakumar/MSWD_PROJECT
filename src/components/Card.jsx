
const Card = ({title,price,rating,imga}) => {
  return (
    <div style={{
      width:250,
      
    }} className="p-4 bg-red">
      <div>
        <img src={imga} alt="" />
      </div>
      <div className="text-xl my-2">
        <p>{title}</p>
        <p>Price:{price}</p>
        <p>Rating:{rating}</p>
      </div>
    </div>
  );
};
export default Card;
