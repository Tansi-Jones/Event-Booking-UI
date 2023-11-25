import { Swiper, SwiperSlide } from "swiper/react";
import { PastEventCard, UpcomingEventCard } from "../components/Cards";
import { pastEvents, upcomingEvents } from "../constants";
import { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import "swiper/css";

export default function Home() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  const updateBrowserWidth = () => {
    setBrowserWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateBrowserWidth);
    return () => {
      window.removeEventListener("resize", updateBrowserWidth);
    };
  }, []);

  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideNext();
  };

  return (
    <main className="py-8 space-y-10">
      <section>
        <h2 className="heading-2">Past Events</h2>
        <p className="text-gray-500 mb-3">Check out what you've missed</p>
        <Swiper
          slidesPerView={browserWidth >= 500 ? 4 : 1}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          onSwiper={(s) => {
            setSwiper(s);
          }}
          navigation={true}
          className="mySwiper relative"
        >
          {pastEvents.map((item, index) => (
            <SwiperSlide key={index}>
              <PastEventCard img={item.img} title={item.title} id={item.id} />
            </SwiperSlide>
          ))}
          <div className="flex items-center justify-between absolute top-14 z-50 left-0 right-0">
            <button
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
              onClick={() => swiper.slidePrev()}
            >
              <IconChevronLeft
                size={30}
                color="black"
                stroke={1.5}
                strokeLinejoin="miter"
              />
            </button>
            <button
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
              onClick={() => swiper.slideNext()}
            >
              <IconChevronRight
                size={30}
                color="black"
                stroke={1.5}
                strokeLinejoin="miter"
              />
            </button>
          </div>
        </Swiper>
      </section>

      <section>
        <h2 className="heading-2 mb-3">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingEvents.map((item, index) => (
            <UpcomingEventCard
              key={index}
              booking={item.booking}
              date={item.date}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
