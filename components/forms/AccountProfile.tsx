"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    vechile_number: string;
    vechileImage:string
    vechileName: string;
    userImage:string;
    userName:string;
    email:string
    vechileType: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");
  const [selectedOption, setSelectedOption] = useState<string>(''); // State to track the selected option
  console.log(user)
  // Function to handle option selection
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      vechileImage: user?.vechileImage ? user.vechileImage : "", // Ensure it's included here
      name: user?.vechileName ? user.vechileName : "",
      vechile_number: user?.vechile_number ? user.vechile_number : "",
      vechileType: user?.vechileType ? user.vechileType : "",
    },
  });

  const [image,setImage] =useState("")
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.vechileImage;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.vechileImage = imgRes[0].fileUrl;
        setImage(imgRes[0].fileUrl)
      
      }
    }
    await updateUser({
        userId: user.id,               // Pass the user's id
        email: user.email,
        userName: user.userName,
        userImage: user.userImage,
        vechileName: values.name,
        vechileType: selectedOption,
        vechileImage: image,
        vechile_number: values.vechile_number,
        path: pathname,
        vechile_cardNumber:"",
        phoneNumber:"",
        dateofBirth:"",
        drivingExperience:"",
        address:""

      });
    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/dashboard");
    }
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="vechileImage"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
              
              {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile_icon'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image
                    src='/car.jpg'
                    alt='profile_icon'
                    width={99}
                    height={99}
                    className='object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-slate-900">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add profile photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold ">
                Vechile Name
              </FormLabel>
              <FormControl>
              <Input
                  type='text'
                  className=' no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vechile_number"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold">
                Vechile Model No : 
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className=" no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vechileType"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold text-black">
                Vechile Type
              </FormLabel>
              <FormControl>
              <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Vehicle:</h1>
      <select
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        id="vehicleDropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select</option>
        <option value="car">Car</option>
        <option value="bike">Bike</option>
      </select>
     
    </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          //@ts-ignore
        />

        <Button type="submit" className="bg-primary-500 mt-12">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
