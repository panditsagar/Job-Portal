import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from '@/redux/jobSlice'

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
  }

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Portal Website
        </span>

        <h1 className="text-5xl font-bold">
          Find Your<span className="text-[#6A38C2] ml-2">Dream Job</span>
        </h1>
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-5xl font-bold">and get</h1>
          <img src="/logo-dark.png" className="h-16 " alt="Hirrd Logo" />
        </div>
        <p>
          Connecting talent with opportunity. Find your dream job or the perfect
          candidate with us.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full placeholder:pl-2"
        
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className="rounded-r-full bg-[#6A38C2]"
            onClick={searchJobHandler}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
