import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://casago.com/sedona/wp-content/uploads/sites/4/2019/08/restuarant-AdobeStock_127886089.jpg",
      title: "Trending This Week",
      places: "30 Places",
    },
    {
      image:
        "http://blog.etundra.com/wp-content/Media/2018/06/family-style-1024x732.jpg",
      title: "Best of Bengaluru",
      places: "118 Places",
    },
    
    {
      image:
        "https://b.zmtcdn.com/data/reviews_photos/dd3/fb3e64d271d2d1f4cff8ded923855dd3_1630956756.jpg?fit=around|750:500&crop=750:500;*,*",
      title: "Newly Opened",
      places: "5 Places",
    },
    {
      image:
        "https://1fatgirlshrinking.files.wordpress.com/2013/02/heart-pizza.jpg",
      title: "Love for Pizza",
      places: "22 Places",
    },
    {
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg",
      title: "Brilliant Biriyanis",
      places: "15 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/19023305/b47b0db648d741ac3bb2db799e88c3b2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Flavors of Punjab",
      places: "25 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default DiningCarousel;
