import image from "../assets/werkendam.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-row w-3/4 items-center h-2/4">
      <div className="w-1/2 text-6xl">
        <p>Familie</p>
        <p>van der Plas</p>
      </div>
      <div className="w-1/2 h-full">
        <img
          src={image}
          alt="a black and white image of werkendam"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
