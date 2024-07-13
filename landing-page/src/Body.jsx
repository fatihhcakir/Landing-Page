
const Body = () =>{
    return(
        <body className="bg-gradient-to-r from-indigo-300 to-purple-300 text-white min-h-screen" >
            <div className="flex items-center justify-center pt-32 text-7xl text-black">
                <h1 className=" text-7xl text-black text-center mb-8">Make short videos from <br/> long ones instantly</h1>
            </div>
            <div className="flex items-center justify-center text-xl text-gray-100">
                <p > Create social ready short clips from your long videos with AI & Save %90 time and effort</p>
            </div >
            <div className="flex items-center justify-center pt-12 space-x-4">
            <div  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
                <button>
                 Start for free 
                </button>
            </div>
            <div  className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
                <button>
                Play demo Video
                </button>
            </div>
          
            </div>
            <div className="flex items-center justify-center pt-4 space-x-4">
                <p>
                    Get 75 mins of upload for free every month
                </p>
            </div>
            <div className="flex items-center justify-center pt-32 space-x-4">
                <p>
                    Make VIRAL short clips with captions, templates, emojis, & more for
                </p>
            </div>
                <div className="flex justify-center pt-4 space-x-24">
                    <a href="#" className="text-white hover:text-gray-400">
                        <i className="fab fa-tiktok text-4xl">TikTok</i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <i className="fab fa-instagram text-4xl">Instagram</i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <i className="fab fa-youtube text-4xl">Youtube</i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <i className="fab fa-linkedin text-4xl">Linkedin</i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <i className="fab fa-facebook text-4xl">Facebook</i>
                    </a>
                </div>
        </body>
 


    )

}
export default Body