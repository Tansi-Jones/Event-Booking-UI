import { useNavigate } from "react-router-dom";

export const PastEventCard = ({ img, title, id }) => {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-md w-full h-40 overflow-hidden">
      <img src={img} alt="event" className="object-cover w-full h-full z-0" />
      <div className="text-white z-50 absolute top-0 p-2">
        <h3 className="font-semibold text-2xl">{title}</h3>
      </div>
      <div className="absolute bottom-2 p-2">
        <button
          className="bg-white text-black p-2 rounded-md text-sm"
          onClick={() => navigate(`/gallery/${id}`)}
        >
          view more
        </button>
      </div>
    </div>
  );
};

export const UpcomingEventCard = ({ title, img, date, booking }) => {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-md w-full h-72 overflow-hidden">
      <img src={img} alt="event" className="object-cover w-full h-full z-0" />
      <div className="text-white z-50 absolute top-2 p-3 space-y-3">
        <mark className="bg-green-400 text-gray-900 font-bold text-sm rounded-full py-1 px-2">
          {date}
        </mark>
        <h3 className="font-bold text-3xl capitalize">{title}</h3>
      </div>
      <div className="absolute bottom-2 p-3">
        <button
          className="bg-white text-black py-2 px-4 rounded-md text-base"
          onClick={() => navigate(booking)}
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
};

export const GalleryCard = ({ title, img, date, id }) => {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-md w-full h-72 overflow-hidden">
      <img src={img} alt="event" className="object-cover w-full h-full z-0" />
      <div className="text-white z-50 absolute top-2 p-3 space-y-3">
        <mark className="bg-red-400 text-gray-900 font-bold text-sm rounded-full py-1 px-2">
          {date}
        </mark>
        <h3 className="font-bold text-3xl capitalize">{title}</h3>
      </div>
      <div className="absolute bottom-2 p-3">
        <button
          className="bg-white text-black py-2 px-4 rounded-md text-base"
          onClick={() => navigate(`/gallery/${id}`)}
        >
          view images
        </button>
      </div>
    </div>
  );
};
