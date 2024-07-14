import { AiFillTikTok, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

function Brands() {
  return (
    <div>
      <div className="flex justify-center pt-4 space-x-24">
        <a href="https://www.tiktok.com/tr-TR/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillTikTok className="text-4xl pt-2" />
          <span className="text-4xl">TikTok</span>
        </a>
        <a href="https://www.instagram.com/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillInstagram className="text-4xl pt-2" />
          <span className="text-4xl">Instagram</span>
        </a>
        <a href="https://www.youtube.com/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillYoutube className="text-4xl pt-2" />
          <span className="text-4xl">Youtube</span>
        </a>
        <a href="https://www.linkedin.com/feed/" className="transition text-gray-400 hover:text-red-500 flex items-center">
          <span className="text-4xl">Linked</span>
          <AiFillLinkedin className="pt-2 text-4xl" />
        </a>
        <a href="https://www.facebook.com/" className="transition text-gray-400 hover:text-blue-500 flex items-center space-x-2">
          <span className="text-4xl">Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default Brands;
