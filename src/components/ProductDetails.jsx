const ProductDetails = () => {
  return (
    <div>
      <div>
        <div>img1</div>
        <div>img2</div>
        <div>img3</div>
        <div>img4</div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Havic HV G-92 Gamepad</h1>
        <p>Rating:4</p>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <hr />
        <div className="flex gap-2">
          <p>Colors: </p>
          <div style={{
            width:20,
            height:20,
          }} className="border-2 bg-blue-400 rounded-full hover:border-gray-600" ></div>
          <div style={{
            width:20,
            height:20,
          }} className="border-2 bg-red-400 rounded-full hover:border-gray-600" ></div>
        </div>
        
      </div>
    </div>
  );
};
export default ProductDetails;
