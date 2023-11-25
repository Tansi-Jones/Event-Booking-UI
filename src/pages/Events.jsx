import { UpcomingEventCard } from "../components/Cards";
import { upcomingEvents } from "../constants";

export default function Events() {
  return (
    <main>
      <h2 className="heading-2 my-8">Our Events</h2>
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
    </main>
  );
}
