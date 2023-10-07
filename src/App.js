import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experince from './component/experince/Experince'
import Servces from './component/servces/Servces'
import Portfolio from './component/portfolio/Portfolio'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import './App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper";

function App() {
  return (
    <div className="App">
      <>
        {/* <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}


    < Header />
      <Nav />
      <About />
      <Experince />
      <Servces />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </>
    </div>
  );
}

export default App;
