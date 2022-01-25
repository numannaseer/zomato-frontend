import React from "react";

//components
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";
import NutritionCard1 from "./NutritionCard1";
import NutritionCard2 from "./NutritionCard2";
import NutritionCard3 from "./NutritionCard3";

function Nutrition() {
  return (
    <div>
      <NutritionHeroCarousel />
      <div className="my-6">
        <NutritionCarousel />
      </div>
      <div className="flex justify-between flex-wrap">
        <NutritionCard
          bg="pink"
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e3c22952-786b-4602-93be-872a772550b3.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        />
        <NutritionCard1
          bg="pink"
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/958b691b-bea1-42e8-8b11-5d3aee6792c4.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        />
        <NutritionCard3
          bg="pink"
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/56a6d704-da55-4023-b2ff-fc72b1c5da94.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        />
        <NutritionCard2
          bg="pink"
          image="https://i.pinimg.com/736x/a7/85/72/a785724237c4fcac12bddb3bb337d8e9.jpg"
        />
       
      </div>
    </div>
  );
}

export default Nutrition;
