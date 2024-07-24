import { AiFillTikTok, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

function Brands() {
  return (
    <div className="pt-4">
      <div className="flex flex-wrap justify-center items-center space-x-6 lg:space-x-12">
        <a href="https://www.tiktok.com/tr-TR/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillTikTok className="text-3xl sm:text-4xl" />
          <span className="text-sm sm:text-lg">TikTok</span>
        </a>
        <a href="https://www.instagram.com/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillInstagram className="text-3xl sm:text-4xl" />
          <span className="text-sm sm:text-lg">Instagram</span>
        </a>
        <a href="https://www.youtube.com/" className="transition text-gray-400 hover:text-red-500 flex items-center space-x-2">
          <AiFillYoutube className="text-3xl sm:text-4xl" />
          <span className="text-sm sm:text-lg">YouTube</span>
        </a>
        <a href="https://www.linkedin.com/feed/" className="transition text-gray-400 hover:text-blue-500 flex items-center space-x-2">
          <AiFillLinkedin className="text-3xl sm:text-4xl" />
          <span className="text-sm sm:text-lg">LinkedIn</span>
        </a>
        <a href="https://www.facebook.com/" className="transition text-gray-400 hover:text-blue-500 flex items-center space-x-2">
          <span className="text-sm sm:text-lg">Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default Brands;
