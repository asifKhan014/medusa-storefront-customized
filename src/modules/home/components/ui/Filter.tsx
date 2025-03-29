"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import filter from "../../../../lib/data/filter";
import { useState } from "react";

const Filter = () => {
  const [openStates, setOpenStates] = useState(Array(filter.length).fill(false));

  const toggleOpen = (index: number) => {
    setOpenStates((prev) =>
      prev.map((state, idx) => (idx === index ? !state : state))
    );
  };

  return (
    <div className="w-full font-jet-brains-mono space-y-2">
      {filter.map((filterItem, idx) => (
        <Collapsible
          key={idx}
          open={openStates[idx]}
          onOpenChange={() => toggleOpen(idx)}
          className={`rounded-lg bg-[#FAFAFA] overflow-hidden border-[3px] hover:border-black ${openStates[idx] ? 'border-black' : 'border-gray-200'}`}
        >
          <CollapsibleTrigger
            className={`w-full flex items-center justify-between font-bold text-lg xl:text-xl text-black uppercase hover:text-white hover:bg-black focus:outline-none transition-colors ease-linear gap-1 py-2.5 px-3 ${openStates[idx]
              ? "text-white bg-black border-black"
              : ""
              }`}
          >
            <span className="text-left">{filterItem.trigger}</span>
            <span className="font-light text-2xl">
              {openStates[idx] ? "-" : "+"}
            </span>
          </CollapsibleTrigger>
          {filterItem.content.map((contentItem, id) => (
            <CollapsibleContent
              key={id}
              className="transition-[height] ease-linear"
            >
              <div className="py-2 px-3">
                <div className="flex items-center justify-between">
                  <p>{contentItem.item}</p>
                  <p>{contentItem.number}</p>
                </div>
              </div>
            </CollapsibleContent>
          ))}
        </Collapsible>
      ))}
    </div>
  );
};

export default Filter;
