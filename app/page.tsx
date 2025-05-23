import Slider from "./components/Home/Slider";
import Announcement from './components/Home/Announcement';
import Main from './components/Home/page';
// import Gallery from "./components/Home/Gallery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { defaultMetadata } from './metadata';
import type { Metadata } from 'next';



// Client components are imported here but the page itself is a server component
export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full mx-auto p-2 mb-10 relative z-10">
        {/* Slider Section */}
        <div className="mt-2 sm:w-2/3 w-full">
          <Slider />
        </div>

        {/* Announcement Section */}
        <div className="mt-2 sm:ml-2 sm:w-1/3 w-full">
          <Announcement className=""/>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-2 relative z-10">
        <Main />
      </div>
    </>
  );
}
