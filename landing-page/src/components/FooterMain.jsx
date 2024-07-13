import Brands from "./Brands";
function FooterMain() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-4 text-gray-600">
        <p>
          Make VIRAL short clips with captions, templates, emojis, & more for
        </p>
      </div>
      <Brands />
    </div>
  );
}

export default FooterMain;
