import { GalleryCard } from "../components/Cards";
import { upcomingEvents } from "../constants";

export default function Gallery() {
  return (
    <main className="pb-10">
      <h2 className="heading-2 my-8">Our Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {upcomingEvents.map((item, index) => (
          <GalleryCard
            key={index}
            id={1}
            date={item.date}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
    </main>
  );
}
