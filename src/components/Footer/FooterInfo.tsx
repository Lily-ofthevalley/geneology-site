import Navigation from "./Navigation";

const FooterInfo = () => {
  return (
    <div className="bg-blue-800 flex justify-evenly text-white">
      <Navigation />
      <div className="p-4 self-end">Contact</div>
    </div>
  );
};

export default FooterInfo;
