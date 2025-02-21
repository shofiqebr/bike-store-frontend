import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px", // Adjust height as needed
        width: "100%",
      }}
      className="flex justify-evenly"
    >
      <div>
        
        The worlds Most Latest Technology</div>
      <div></div>
    </div>
  );
};

export default Banner;
