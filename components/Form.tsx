import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';


import axios from 'axios';
import { createBooking } from '@/lib/actions/booking.action';
import { useRouter } from 'next/navigation';

const Form = (user:any) => {
  const storedFloor = localStorage.getItem('floor');
  const storedSpot = localStorage.getItem('spot');
  
  // You can use these values as needed

  console.log('Stored Floor:', storedFloor);
  console.log('Stored Spot:', storedSpot);
  console.log(user)

  const [form, setForm] = useState({

    name: user.user.userinfo.userName,
    email: user.user.userinfo.email,
    vechilCardNumber: user.user.userinfo.vechile_cardNumber,
    vechileName: user.user.userinfo.vechileName,
  });
  const [loading, setLoading] = useState(false);
   const {
    selectedDay,
    setSelectedDay,
    selectedtime,
    setSelectedtime,
   } = useContext<any>(UserContext)
   const [formSubmitted, setFormSubmitted] = useState(false);
   console.log(selectedtime)
   const router = useRouter()

   const { register, handleSubmit, formState: { errors } } = useForm();


   const handleChange = (e:any) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const date = selectedDay + "at" +  selectedtime
  const onSubmit = async () => {
    
    
    setLoading(true);
    await createBooking({
      //@ts-ignore
      floor: storedFloor,
      //@ts-ignore

      slot: storedSpot,
      author: user.user.userinfo._id,
      time:date

    
    })

    router.push('/dashboard');


    try {
    
    } catch (error) {
      setLoading(false);
      setFormSubmitted(false);
      console.error("Error submitting form data:", error);
      
    }
  };
  

  return (
    
    <>
    <div className='flex flex-col  w-[500px] bg-white rounded-lg  p-2'>
      <div className='border-2 h-full w-2 bg-[#5369e7]'></div>

     
     <div className=''>
        <div className='flex items-center justify-start'>
        <p className='text-2xl font-bold opacity-70'>Check Details</p>
      </div>
      <form className='flex flex-col mt-2 gap-2 w-full' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className='text-base font-semibold text-slate-600'>Name:</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center'>

          <input 
           {...register('name')}
          className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-[#5369e7] focus:border-[#5369e7] focus:outline-none border-2 rounded-lg bg-slate-100 p-2'
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text" placeholder='Enter your Name' />
          </div>
         <div>
         </div>
        </div>
        <div>
          <p className='text-base font-semibold text-slate-600'>Email:</p>
        </div>
        <div className='flex flex-col'>
        <div className='flex items-center'>
        <input
           {...register('email', {
            
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email address',
            },
          })}
          className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-[#5369e7] focus:border-[#5369e7] focus:outline-none border-2 rounded-lg bg-slate-100 p-2'
           name="email"
           value={form.email}
           onChange={handleChange}
          type="email" placeholder='Enter your Email' />
          
        </div>
        <div>
    
      
          </div>
        </div>
       
<div>
  <p className='text-base font-semibold text-slate-600'>Vechile Card Number</p>
</div>
<div className='flex flex-col'>
  <div className='flex items-center'>
    <input
      {...register('vechilCardNumber')} // Correct the name attribute here
      className='flex-1 items-center outline-0 focus:border focus:ring-2 focus:ring-[#5369e7] focus:border-[#5369e7] focus:outline-none border-2 rounded-lg bg-slate-100 p-2'
      name='vechilCardNumber'
      value={form.vechilCardNumber} // Correct the value property here
      type="text"
      onChange={handleChange}
      placeholder='Enter Vechil Card Number'
    />
  </div>
  <div></div>
</div>

<div>
  <p className='text-base font-semibold text-slate-600'>Vechile Name:</p>
</div>
<div className='flex items-center'>
  <input
    {...register('vechileName')} // Correct the name attribute here
    className='flex-1 items-center outline-0 focus:border focus:ring-2 focus:ring-[#5369e7] focus:border-[#5369e7] focus:outline-none border-2 rounded-lg bg-slate-100 p-2'
    name='vechileName'
    value={form.vechileName} // Correct the value property here
    type='text'
    onChange={handleChange}
    placeholder='Enter vechile name'
  />
</div>
<div className='flex items-center justify-start mt-3'>

</div>
        <div className='flex items-center justify-start mt-3'>
        <button type="submit" className='bg-[#5369e7] hover:bg-blue-700 text-heading4-medium text-white  w-2/5 ml-5 font-bold py-2 px-4 rounded-lg'>
        {loading ? "Submiting..." : "Submit"}
        </button>
        </div>
      </form>
    </div>
      </div>
      
    </>
  );
};

export default Form;
