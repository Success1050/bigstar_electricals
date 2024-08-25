import Carousel from "react-material-ui-carousel";
import Home from "@/app/page";
import { items } from "@/constants";

export const Slider = () => {
  return (
    <Carousel
      interval={3000} // Auto change every 3 seconds
      animation='slide' // Transition animation, can be "fade" or "slide"
      indicators={true} // Show navigation dots
      stopAutoPlayOnHover={true} // Pause when hovering
      navButtonsAlwaysVisible={true} // Show navigation buttons
    >
      {items.map((item, index) => {
        const { imageUrl, name, description } = item;
        console.log(imageUrl);

        return <Home img={imageUrl} id={index} name={name} />;
      })}
    </Carousel>
  );
};
