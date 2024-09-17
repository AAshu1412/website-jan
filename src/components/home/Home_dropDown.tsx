// import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";

function Home_dropDown() {
  return (
    <div className=" flex flex-row justify-center mt-16 ">
      <div className="w-[1020px] flex flex-col pl-3 lg:pl-0">
        <h1 className="w-52 p-1 text-sm font-bold text-green-950 bg-green-400 ">
          Frequently asked Questions
        </h1>
        <br />
        <br />
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full grid lg:gap-12 gap-2 font-medium text-xl"
          >
            <AccordionItem value="item-1" className="grid gap-3">
              <AccordionTrigger>
                What is Product engineering and development?
              </AccordionTrigger>
              <AccordionContent>
                <h1 className=" font-medium text-[#1a191e]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum
                  sociis natoque penatibus et magnis dis parturient.
                </h1>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="grid gap-3">
              <AccordionTrigger>
                What is Product engineering and development?
              </AccordionTrigger>
              <AccordionContent>
                <h1 className=" font-medium text-[#1a191e]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum
                  sociis natoque penatibus et magnis dis parturient.
                </h1>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="grid gap-3">
              <AccordionTrigger>
                What is Product engineering and development?
              </AccordionTrigger>
              <AccordionContent>
                <h1 className=" font-medium text-[#1a191e]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum
                  sociis natoque penatibus et magnis dis parturient.
                </h1>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="grid gap-3">
              <AccordionTrigger>What is Product engineering?</AccordionTrigger>
              <AccordionContent>
                <h1 className=" font-medium text-[#1a191e]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum
                  sociis natoque penatibus et magnis dis parturient.
                </h1>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="grid gap-3">
              <AccordionTrigger>What is Product engineering?</AccordionTrigger>
              <AccordionContent>
                <h1 className=" font-medium text-[#1a191e]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum
                  sociis natoque penatibus et magnis dis parturient.
                </h1>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Home_dropDown;
