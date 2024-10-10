'use client';
import { useState } from 'react';
import FloatingInput from './FloatingInput';
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { validateForm } from './Validation';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState<{ [key: string]: string}>(form);
  const [formError, setFormError] = useState<{ [key: string]: string}>(form);

  const handleChange=(id:string, value:string) => {
    setFormData({...formData, [id]:value})
    setFormError({...formData, [id]:validateForm(id, value)})
  }

  const handleSubmit = async() => {
    let valid = true;
    let newFormError: {[key:string]:string} = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if(error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if(valid){
      setFormData(form);
      toast.success("Form Submission Success!", {duration:4000});
      const docRef = await addDoc(collection(db, "portfolio"), formData);
    }else {
      toast.error("Form Submission Failed.", {duration:4000});
    }
  }
  return (
    <div className="px-16 mx-20 my-5 mb-28 font-mono" id="Contact">
      <h1 className="text-4xl mb-10 font-bold text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div data-aos="fade-left" data-aos-duration="8000" className="flex flex-col items-center">
        <div className="w-[70%] shadow-[0_0_10px_0_#64FFDA50] flex flex-col gap-6 border border-primaryColor rounded-3xl p-8">
          <div className="text-2xl text-white font-semibold">Let&apos;s Connect</div>
          <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name}/>
          <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email}/>
          <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone}/>
          <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message}/>
          <Button fullWidth onClick={handleSubmit} className='!text-bgColor !font-bold !text-2xl' rightSection={<IconArrowRight size={20} />} variant="filled" size="lg" radius="lg" color='#64FFDA'>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
