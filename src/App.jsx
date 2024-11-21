/* eslint-disable no-unused-vars */

import { useState } from "react";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import OrderOverview from "./components/OrderOverview";

const App = () => {
  const [price, setPrice] = useState(28.40);
  const [sessions, setSessions] = useState(8);
  const [isRtl, setIsRtl] = useState(false);  

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-slate-100 flex justify-center py-10"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 shadow-2xl md:grid-cols-[60%_40%]">
        <div className="bg-white p-8 space-y-8">
          <Header />
          <OrderForm />
        </div>

   

        <div className="bg-gray-100 p-8 space-y-8">
          <OrderOverview price={price} sessions={sessions} />
        </div>
      </div>

      <button 
        onClick={() => setIsRtl(!isRtl)} 
        className="absolute top-4 right-4 p-2 bg-gray-500 text-white rounded">
        {isRtl ? 'Switch to LTR' : 'Switch to RTL'}
      </button>
    </div>
  );
};

export default App;
