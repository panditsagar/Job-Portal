import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const companies = [
  {
    name: "amazon",
    path: "/companies/amazon.svg",
    id: 1,
  },
  {
    name: "atlassian",
    path: "/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "/companies/meta.svg",
    id: 5,
  },
  {
    name: "microsoft",
    path: "/companies/microsoft.webp",
    id: 6,
  },
  {
    name: "netflix",
    path: "/companies/netflix.png",
    id: 7,
  },
  {
    name: "Accenture",
    path: "/companies/Accenture.svg",
    id: 8,
  },
  {
    name: "capgemini",
    path: "/companies/capgemini.svg ",
    id: 9,
  },
  {
    name: "uber",
    path: "/companies/uber.svg",
    id: 10,
  },
];

function CompanyCarousel() {
  return (
    <div className="ml-28 mr-28 mb-10 ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10 "
      >
        <CarouselContent className="flex gap-5 sm:gap-20   items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CompanyCarousel;
