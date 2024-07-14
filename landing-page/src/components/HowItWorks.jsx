<<<<<<< HEAD
import Box from "./Box";
import uploadImage from "../assets/upload.png";
import textImage from "../assets/upload.png";
=======
//import React from "react";
import Box from "./Box";
import uploadImage from "/upload.jpg";
import textImage from "/text.png";
import socialMedia from "/socialmedia.jpg"
>>>>>>> origin/nis2
import "../assets/App.css";

const HowItWorks = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center space-y-4 p-4 border-b border-gray-200 pt-40">
=======
    <div className="flex flex-col items-center space-y-4 p-4 border-b border-gray-200">
>>>>>>> origin/nis2
      <h1 className="text-5xl font-bold">How it works?</h1>
      <p className="mt-2 text-center text-gray-500">
        Video AI automatically selects, edits & captions top moments from your videos.
      </p>
<<<<<<< HEAD
      <div className="flex justify-center space-x-4 mt-10 space-x-12 pt-8">
        <Box
          imageSrc={uploadImage}
          title="Import Your Video"
=======
      <div className="flex justify-center space-x-4 mt-10 pt-8">
        <Box
          imageSrc={uploadImage}
          title="Upload a image"
>>>>>>> origin/nis2
          description="Upload a image from your computer."
        />
        <Box
          imageSrc={textImage}
<<<<<<< HEAD
          title="Set Your Preferences"
          description="Write a text that will appear over the video."
        />
        <Box
          imageSrc={uploadImage} // Aynı resmi kullanarak üçüncü kutuyu oluşturabilirsiniz.
          title="Get Your Videos In Minutes"
          description="This is the third box."
=======
          title="Write text"
          description="Write a text that will appear over the video."
        />
        <Box
          imageSrc={socialMedia} // Aynı resmi kullanarak üçüncü kutuyu oluşturabilirsiniz.
          title="Create Your Videos"
          description="Customize short videos with our AI change colors, fonts, subtitles, and more."
>>>>>>> origin/nis2
        />
      </div>
    </div>
  );
};

export default HowItWorks;
