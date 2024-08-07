import fetchItems from "../../services/ProductServices";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CategoryFilmItem = ({ title, api, action }) => {
  const navigate = useNavigate();
  const inputElement = useRef();

  const { data: films, loading } = fetchItems(
    `https://phimapi.com/v1/api/danh-sach/${api}?limit=12&page=2`
  );

  const handleClick = (id, slug) => {
    navigate(`/play/${id}/${slug}`);
  };

  const handleRight = () => {
    inputElement.current?.scrollBy({ left: 300 });
  };

  const handleLeft = () => {
    inputElement.current?.scrollBy({ left: -300 });
  };

  //   useEffect(() => {
  //     // This will run whenever inputElement.current changes (becomes available)
  //     inputElement.current?.scrollBy({ left: 300 }); // Initial scroll (optional)
  //   }, [inputElement.current]); // Add inputElement.current to the dependency array

  return (
    <>
      <div className="flex justify-between items-center md:items-end col-start-2 col-end-6 text-quinary md:pb-4 border-b-2 border-quinary">
            <h1 onClick={action} className="cursor-pointer">{title}</h1>
            <p onClick={action} className="px-2 py-1 border-2 border-quinary hover:bg-secondary hover:text-quinary cursor-pointer">View all</p>
        </div>

        <div ref={inputElement} className="flex h-[220px] md:h-[300px] lg:h-[600px] gap-5 mt-8 loading overflow-x-auto scrollbar scrollbar-thumb-tertiary scrollbar-track-transparent scroll-smooth">
            {films && films.data && films.data.data && films.data.data.items.map((item, index) => {
                return <div onClick={() => handleClick(item._id, item.slug)} className={`relative min-w-[40%] md:min-w-[25%] pb-10 lg:pb-20 ${loading ? 'bg-slate-500' : 'bg-quaternary'} rounded overflow-hidden`}>
                    <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} alt="" loading="lazy" />
                    <p className="absolute px-4 py-2 w-full text-white lg:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[15%] md:top-[12.5%] lg:top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                </div>
            })}
        </div>

        <FaChevronLeft onClick={() => handleLeft()} className="hidden md:block absolute h-[48px] w-[48px] top-[50%]  left-3 p-2  bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full" />
        <FaChevronRight onMouseDown={() => handleRight()} className="hidden md:block absolute h-[48px]  w-[48px] top-[50%] right-3 p-2 bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full" /> 

      {/* <div className="flex justify-between items-center md:items-end col-start-2 col-end-6 text-quinary md:pb-4 border-b-2 border-quinary">
        <h1 onClick={action} className="cursor-pointer">
          {title}
        </h1>
        <p
          onClick={action}
          className="px-2 py-1 border-2 border-quinary hover:bg-secondary hover:text-quinary cursor-pointer"
        >
          View all
        </p>
      </div>

      <Swiper spaceBetween={16}
              slidesPerView={4}
        ref={inputElement}
        className="flex h-[220px] md:h-[300px] lg:h-[600px] gap-5 mt-8 loading overflow-x-auto scrollbar scrollbar-thumb-tertiary scrollbar-track-transparent scroll-smooth"
      >
        {
          films?.data?.data?.items.map((item, index) => {
            return (
              <SwiperSlide 
                onClick={() => handleClick(item._id, item.slug)}
                className={`relative min-w-[40%] md:min-w-[25%] pb-10 lg:pb-20 ${
                  loading ? "bg-slate-500" : "bg-quaternary"
                } rounded overflow-hidden`}
              >
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-t-[4px]"
                  src={`https://img.phimapi.com/${item.poster_url}`}
                  alt=""
                  loading="lazy"
                />
                <p className="absolute px-4 py-2 w-full text-white lg:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.origin_name}
                </p>
                <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">
                  {item.year}
                </p>
                <p className="absolute text-[12px] text-black top-[15%] md:top-[12.5%] lg:top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">
                  {item.quality}
                </p>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <FaChevronLeft
        onClick={() => handleLeft()}
        className="hidden md:block absolute h-[48px] w-[48px] top-[50%]  left-3 p-2  bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full"
      />
      <FaChevronRight
        onMouseDown={() => handleRight()}
        className="hidden md:block absolute h-[48px]  w-[48px] top-[50%] right-3 p-2 bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full"
      /> */}
    </>
  );
};

export default CategoryFilmItem;
