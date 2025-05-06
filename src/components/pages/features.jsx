import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import images from '../theme/imagesPath';

const Features = () => {
    const featuresData = [
        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
        { title: 67, content: "Fixed Products", img: images.feature2 },
        { title: 97, content: "Retention", img: images.feature3 },
        { title: 98, content: "Satisfaction", img: images.feature4 },
        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
        { title: 67, content: "Fixed Products", img: images.feature2 },
        { title: 97, content: "Retention", img: images.feature3 },
        { title: 98, content: "Satisfaction", img: images.feature4 },
    ];

    return (
        <section id="features">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                grabCursor={false}
            >
                {featuresData.map((feature, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        <div
                            className="supplier-card"
                            style={{ backgroundImage: `url(${feature.img})` }}
                        >
                            <div className="overlay"></div>
                            <div className="supplier-percentage">{feature.title}%</div>
                            <div className="supplier-label">{feature.content}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Features;
