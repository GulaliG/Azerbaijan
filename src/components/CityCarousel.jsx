import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CityCard from "./CityCard";

const CityCarousel = ({ cities }) => {
    return (
        <div className="py-12 px-4 md:px-10">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {cities.map((city) => (
                    <SwiperSlide key={city.slug}>
                        <CityCard city={city} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CityCarousel;
