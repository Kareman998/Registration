
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//  form schema with Zod validation
const orderFormSchema = z.object({
  loginPhoneNumber: z.string().min(1, "Phone number is required"),
  contactPhoneNumber: z.string().min(1, "Contact phone number is required"),
  contactEmail: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  contactName: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  nr: z.string().min(1, "Number is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  monthlySessions: z.string().min(1, "Please select a session plan"),
  paymentMethod: z.string().min(1, "Please select a payment method"),
  cardHolder: z.string().min(1, "Card holder name is required"),
  cardNumber: z.string().min(1, "Card number is required"),
});

const OrderForm = () => {
  const [sessionPlans, setSessionPlans] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    // Fetch session plans from WordPress REST API
    fetch("https://wordpress-site.com/wp-json/wp/v2/session-plans")
    // fetch("http://localhost/softwareiti/wp-json/wp/v2/session-plans")
      .then((response) => response.json())
      .then((data) => setSessionPlans(data));

    // Fetch payment methods from WordPress REST API
    fetch("https://wordpress-site.com/wp-json/wp/v2/payment-methods")
    // fetch("http://localhost/softwareiti/wp-json/wp/v2/payment-methods"")
      .then((response) => response.json())
      .then((data) => setPaymentMethods(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="rtl">
      <form
        className="bg-white p-6 rounded-lg space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Login Phone Number */}
        <div className="mb-4">
          <label className="block  font-normal  text-slate-400 mb-2 text-xs ">
            LOGIN PHONE NUMBER
            <span className=" text-black">
              {" "}
              (preferably <span className=" underline">the student’s</span>)
            </span>
          </label>
          <div className="flex space-x-4">
            <select
              className=" rounded p-4 text-sm bg-gray-100"
              {...register("loginPhoneNumber")}
            >
              <option value="+30">+30</option>
            </select>
            <input
              type="text"
              className="w-full p-3 rounded text-sm bg-gray-100"
              placeholder="+30"
              {...register("loginPhoneNumber")}
            />
          </div>
          {errors.loginPhoneNumber && (
            <span className="text-red-500 text-sm">
              {errors.loginPhoneNumber.message}
            </span>
          )}
        </div>

        {/* Contact Phone Number */}
        <div className="mb-4">
          <label className="block text-xs  mb-2 uppercase text-slate-400 font-normal">
            Contact Phone Number
            <span className=" text-black">
              {" "}
              (preferably <span className=" underline">the parent’s</span>)
            </span>
          </label>
          <div className="flex space-x-4">
            <select
              className="  rounded p-4 text-sm  bg-gray-100"
              {...register("contactPhoneNumber")}
            >
              <option value="+30">+30</option>
            </select>
            <input
              type="text"
              className="w-full p-4  text-sm  bg-gray-100"
              placeholder="+30"
              {...register("contactPhoneNumber")}
            />
          </div>
          {errors.contactPhoneNumber && (
            <span className="text-red-500 text-sm">
              {errors.contactPhoneNumber.message}
            </span>
          )}
        </div>

        {/* Contact Email */}
        <div className="mb-4">
          <label className="block text-xs  text-slate-400 font-normal mb-2 uppercase">
            Contact Email{" "}
            <span className=" text-black">
              {" "}
              (preferably <span className=" underline">the parent’s</span>)
            </span>
          </label>
          <input
            type="email"
            className="w-full p-4 text-sm bg-gray-100"
            placeholder="example@email.com"
            {...register("contactEmail")}
          />
          {errors.contactEmail && (
            <span className="text-red-500 text-sm">
              {errors.contactEmail.message}
            </span>
          )}
        </div>

        {/* Contact Name */}
        <div className="mb-4">
          <label className="block text-xs  text-slate-400 font-normal mb-2 uppercase">
            Contact Name
          </label>
          <input
            type="text"
            className="w-full p-4  text-sm  bg-gray-100"
            placeholder="first name"
            {...register("contactName")}
          />
          {errors.contactName && (
            <span className="text-red-500 text-sm">
              {errors.contactName.message}
            </span>
          )}
        </div>

        {/*  BillingAddress, Number */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Billing Address */}
          <div className="col-span-2">
            <label className="block text-xs text-slate-400 font-normal mb-2 uppercase">
              Billing Address
            </label>
            <input
              type="text"
              className="w-full p-4 text-sm bg-gray-100  rounded"
              placeholder="Address"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>

          {/* Nr */}
          <div>
            <input
              type="text"
              className="w-full p-4 text-sm bg-gray-100  rounded mt-6"
              placeholder="Nr"
              {...register("nr")}
            />
            {errors.nr && (
              <span className="text-red-500 text-sm">{errors.nr.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-4 border   bg-gray-100 rounded text-sm"
              placeholder="Postal code"
              {...register("postalCode")}
            />
            {errors.postalCode && (
              <span className="text-red-500 text-sm">
                {errors.postalCode.message}
              </span>
            )}
          </div>

          {/* City */}
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-4 border   bg-gray-100 rounded text-sm"
              placeholder="City"
              {...register("city")}
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>

          {/* Country */}
          <div className="flex-1">
            <select
              className="w-full p-4 border   bg-gray-100 rounded text-sm text-slate-400"
              {...register("country")}
            >
              <option>Country</option>
            
            </select>
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>
        </div>

        {/* Monthly Sessions */}
        <div className="mb-4">
      <label className="block text-xs font-normal text-slate-400 mb-2 ">
            Monthly Sessions
          </label>
          <select
            className="w-full p-4 text-sm bg-gray-100  rounded "
            {...register("monthlySessions")}
          >
            {sessionPlans.map((plan) => (
              <option key={plan.id} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
          {errors.monthlySessions && (
            <span className="text-red-500 text-sm">
              {errors.monthlySessions.message}
            </span>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Payment Method
          </label>
          {paymentMethods.map((method) => (
            <div key={method.id}>
              <input
                type="radio"
                id={method.name}
                name="paymentMethod"
                value={method.name}
                {...register("paymentMethod")}
              />
              <label htmlFor={method.name}>{method.name}</label>
            </div>
          ))}
          {errors.paymentMethod && (
            <span className="text-red-500 text-sm">
              {errors.paymentMethod.message}
            </span>
          )}
        </div>

        <div className="mb-4">
        <label className="block text-xs font-normal text-slate-400 mb-2">
            Card Holder Name
          </label>
          <input
            type="text"
             className="w-full p-4 border   bg-gray-100 rounded text-sm"
            placeholder="Card holder name"
            {...register("cardHolder")}
          />
          {errors.cardHolder && (
            <span className="text-red-500 text-sm">
              {errors.cardHolder.message}
            </span>
          )}
        </div>

        <div className="mb-4">
        <label className="block text-xs font-normal text-slate-400 mb-2">
            Card Number
          </label>
          <input
            type="text"
             className="w-full p-4 border   bg-gray-100 rounded text-sm"
            placeholder="Card number"
            {...register("cardNumber")}
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-sm">
              {errors.cardNumber.message}
            </span>
          )}
        </div>

        <div className="flex justify-center">
  <button
    type="submit"
    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 py-4 border-2 mt-5 rounded px-32  border-gray-400 shadow-lg transition-transform duration-300 hover:scale-105"
  >
    Order Now
  </button>
</div>


      </form>
    </div>
  );
};

export default OrderForm;
