import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import Card from "../components/Card";

const images = ["/images/banner.jpg", "https://via.placeholder.com/800x400?text=Slide+2", "https://via.placeholder.com/800x400?text=Slide+3", "https://via.placeholder.com/800x400?text=Slide+4"];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center">
                <div className="w-4/5 sm:w-1/2 ">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-center">
                                    <img src={image} alt={`Slide ${index + 1}`} className="w-auto rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-white">Episode Terbaru</h1>
                        <Link to="/anime" className="text-lg font-medium text-white hover:text-blue-700 animate ease-in-out duration-300">
                            Lihat Semua {" >> "}
                        </Link>
                    </div>
                    <Card />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
