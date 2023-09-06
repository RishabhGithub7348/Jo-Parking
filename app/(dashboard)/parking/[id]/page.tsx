"use client";
import { useParams } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type Props = {};

const page = (props: Props) => {
  const params = useParams();
  const data = params.id
  console.log(data)
  const router = useRouter()
  const floor = data.slice(0,2)
  const spot = data.slice(3,4)
  const floorNames = {
    "1G": "Ground floor",
    "1F": "First floor",
    "2F": "Second floor",
    "3F": "Third floor",
    "4F": "Fourth floor",
    "5F": "Fifth floor",
    "6F": "Sixth floor",
    // Add more mappings as needed
  };
//@ts-ignore
  const floorName = floorNames[floor] || "";
  const handleClick = () => {
    //@ts-ignore
    localStorage.setItem('floor', floor);
    //@ts-ignore

    localStorage.setItem('spot', spot);
    router.push(`/parking/${data}/calandy`)
  }

  return (
    <div>
      <div>
      <Tabs defaultValue="car" className="w-[400px] text-center justify-center ">
      <TabsList className="grid h-50 w-full grid-cols-2 border-2 rounded-2xl border-[#5369e7]">
        <TabsTrigger value="car">Car</TabsTrigger>
        <TabsTrigger value="bike">Bike</TabsTrigger>
      </TabsList>
      <TabsContent value="car">
        <div className="flex flex-col shadow-md p-5 rounded-3xl bg-[#fff] text-black text-xl font-bold mt-10 mb-10 w-[400px] h-[130px]  border-2 border-[#5369e7]">
          <p className=" text-heading3-bold mr-auto">Car spot</p>
          <p className="  mr-auto">Spot at {floorName} at {spot}</p>
          <Button className="ml-auto bg-[#5369e7] p-3 rounded-2xl text-white" onClick={() => handleClick()}>Reserve</Button>
        </div>

        
      </TabsContent>
      <TabsContent value="bike">
      <div className="flex flex-col shadow-md p-5 rounded-3xl bg-[#fff] text-black text-xl font-bold mt-10 mb-10 w-[400px] h-[130px]  border-2 border-[#5369e7]">
          <p className=" text-heading3-bold mr-auto">Bike spot 1</p>
          <p className="  mr-auto">Spot at {floorName} at {spot}</p>

          <Button className="ml-auto bg-[#5369e7] p-3 rounded-2xl text-white" onClick={() => handleClick()}>Reserve</Button>
        </div>
        <div className="flex flex-col shadow-md p-5 rounded-3xl bg-[#fff] text-black text-xl font-bold mt-10 mb-10 w-[400px] h-[130px]  border-2 border-[#5369e7]">
          <p className=" text-heading3-bold mr-auto">Bike spot 1</p>
          <p className="  mr-auto">Spot at {floorName} at {spot}</p>

          <Button className="ml-auto bg-[#5369e7] p-3 rounded-2xl text-white" onClick={() => handleClick()}>Reserve</Button>
        </div>

      </TabsContent>
    </Tabs>
      </div>
    </div>
  );
};

export default page;
