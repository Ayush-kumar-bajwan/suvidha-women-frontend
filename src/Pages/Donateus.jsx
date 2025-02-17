import { Heart } from "lucide-react";

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-[#FFEDFA] flex flex-col items-center p-6 text-center">
      {/* Hero Section */}
      <div className="max-w-2xl text-center py-10">
        <h1 className="text-4xl font-bold text-[#DE3163]">Support Suvidha Foundation</h1>
        <p className="text-lg text-[#E195AB] mt-4">
          Help us empower rural women by contributing to their health and wellness.
        </p>
      </div>

      {/* QR Code Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg ">
        <h2 className="text-xl font-semibold text-[#DE3163]">Scan to Donate</h2>
        <div className="mt-4 border-2 border-dashed border-[#E195AB] p-4 rounded-xl flex flex-col items-center">
          <img src="/suvidha-qr.jpeg" alt="QR Code" className="w-40 h-40 object-cover" />
        </div>
      </div>

      {/* Donation Methods */}
      <div className="mt-8 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-[#DE3163]">Other Ways to Donate</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-[#DE3163]">Bank Transfer</h3>
            <p className="text-gray-600">Account Name: Suvidha Mahila Mandal</p>
            <p className="text-gray-600">Account No: 97840100027609</p>
            <p className="text-gray-600">IFSC Code: BARB0DBKPAR</p>
            <p className="text-gray-600"> BANK NAME : Bank Of Baroda</p>
            <p className="text-gray-600"> CITY : Nagpur</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-[#DE3163]">UPI Payment</h3>
            <p className="text-gray-600">UPI ID : suvid801091@barodampay </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button className="bg-[#DE3163] text-white px-6 py-3 rounded-full flex items-center gap-2">
          <Heart className="w-5 h-5" /> Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationPage;
