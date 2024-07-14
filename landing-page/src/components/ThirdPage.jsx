import ai from "/ai.jpg"
import Buttons from "./Buttons";
const ThirdPage = () => {
    return (
        <div className="relative flex flex-1">
            <div className="flex-1 ml-20">
                <h1 className="text-5xl text-black text-left mb-8 pl-12 pt-12">
                    Create amazing content <br /> with AI technology.
                </h1>
                <p className="mt-2 text-left text-gray-500 pl-12">
                    AI opens up various opportunities to improve video quality to <br /> make it more interesting, informative, and memorable.
                </p>
                <div className="flex items-left justify-left space-x-4 mt-12 pl-12">
                    <Buttons
                 title="Start for free"   
                title2="Learn more"
                    />
                </div>
            </div>
            <div className="flex-1 items-center justify-center p-6 mb-10 pr-20 pt-12">
                <div className="w-full h-full bg-gradient-to-b from-pink-200 to-white rounded-lg p-6">
                    <img src={ai} className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;
