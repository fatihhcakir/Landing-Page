import Box from "./Box";
import uploadImage from "../assets/upload.png";
import textImage from "../assets/upload.png";
import "../assets/App.css";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border-b border-gray-200 pt-40">
      <h1 className="text-5xl font-bold">How it works?</h1>
      <p className="mt-2 text-center text-gray-500">
        Video AI automatically selects, edits & captions top moments from your videos.
      </p>
      <div className="flex justify-center space-x-4 mt-10 space-x-12 pt-8">
        <Box
          imageSrc={uploadImage}
          title="Import Your Video"
          description="Upload a image from your computer."
        />
        <Box
          imageSrc={textImage}
          title="Set Your Preferences"
          description="Write a text that will appear over the video."
        />
        <Box
          imageSrc={uploadImage} // Aynı resmi kullanarak üçüncü kutuyu oluşturabilirsiniz.
          title="Get Your Videos In Minutes"
          description="This is the third box."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
