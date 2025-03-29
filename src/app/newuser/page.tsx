"use client";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

interface FormData {
  name: string;
  start_date: string;
  end_date: string;
  token: number;
  reg_no: string;
}

export default function FormComponent() {
  const router = useRouter(); // ✅ Initialize router
  const [formData, setFormData] = useState<FormData>({
    name: "",
    start_date: "",
    end_date: "",
    token: 60,
    reg_no: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "token" ? Number(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://pm-backend-au7h.onrender.com/members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json(); // Parse JSON response

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          start_date: "",
          end_date: "",
          token: 60,
          reg_no: "",
        });
      } else {
        setMessage(responseData.message || "Error submitting the form.");
      }
      router.push("/");  
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
    
  };

  return (
<div className="mx-auto px-4 mt-10 max-w-lg rounded-lg bg-white p-6 shadow-lg w-[90%] sm:w-96 md:w-[400px]">
<h2 className="mb-4 text-center font-semibold text-2xl text-black">
        Mess Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block font-medium text-gray-700 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="date" className="block font-medium text-gray-700 text-sm">Start Date</label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <label htmlFor="date" className=" block font-medium text-gray-700 text-sm">End Date</label>
          <input
            id="date"
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            required
            className="appearance-none mt-1 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
           {/* <CalendarIcon className=" absolute right-2 top-8 text-gray-500" /> */}
        </div>

        <div>
          <label  htmlFor="number" className="block font-medium text-gray-700 text-sm">Token (Remaining)</label>
          <input
            type="number"
            name="token"
            value={formData.token}
            onChange={handleChange}
            min="0"
            max="60"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="text" className="block font-medium text-gray-700 text-sm">Register Number</label>
          <input
            type="text"
            name="reg_no"
            value={formData.reg_no}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter register number"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
}
