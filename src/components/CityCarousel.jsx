import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CityCard from "./CityCard";

const CityCarousel = ({ cities }) => {
    return (
        <div className="py-12 px-4 md:px-10">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
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
