function Brands() {
  return (
    <div>
      <div className="flex justify-center pt-4 space-x-24">
        <a href="#" className="transition text-gray-400 hover:text-red-500">
          <i className="fab fa-tiktok text-4xl">TikTok</i>
        </a>
        <a href="#" className="transition text-gray-400 hover:text-red-500">
          <i className="fab fa-instagram text-4xl">Instagram</i>
        </a>
        <a href="#" className="transition text-gray-400 hover:text-red-500">
          <i className="fab fa-youtube text-4xl">Youtube</i>
        </a>
        <a href="#" className="transition text-gray-400 hover:text-blue-500">
          <i className="fab fa-linkedin text-4xl">Linkedin</i>
        </a>
        <a href="#" className="transition text-gray-400 hover:text-blue-500">
          <i className="fab fa-facebook text-4xl">Facebook</i>
        </a>
      </div>
    </div>
  );
}

export default Brands;
