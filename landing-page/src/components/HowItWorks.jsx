import Box from "./Box";
import uploadImage from "/upload.jpg";
import textImage from "/text.png";
import socialMedia from "/socialmedia.jpg";
import "../assets/App.css";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border-b border-gray-200 pt-40">
      <h1 className="text-5xl font-bold">How it works?</h1>
      <p className="mt-2 text-center text-gray-500">
        Video AI automatically selects, edits & captions top moments from your videos.
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-4 lg:space-y-0 mt-10 pt-8">
        <Box
          imageSrc={uploadImage}
          title="Upload a image"
          description="Upload a image from your computer."
        />
        <Box
          imageSrc={textImage}
          title="Write text"
          description="Write a text that will appear over the video."
        />
        <Box
          imageSrc={socialMedia} // Aynı resmi kullanarak üçüncü kutuyu oluşturabilirsiniz.
          title="Create Your Videos"
          description="Customize short videos with our AI change colors, fonts, subtitles, and more."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
