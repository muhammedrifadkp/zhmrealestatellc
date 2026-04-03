import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 md:pt-40 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1b3f] mb-4 tracking-tight uppercase">
            Privacy Policy
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your privacy is critically important to us. Learn how we collect, use, and protect your data at ZHM Real Estate.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">1. Responsible Entity</h2>
            <p className="mb-4">
              ZHM Real Estate LLC (hereinafter also referred to as "ZHM Real Estate", "we" or "us") is responsible for the data processing governed by this Privacy Policy under the applicable UAE and international data protection regulations.
            </p>
            <p>
              When you use our website, we act as the data controller and ensure that your personal data is collected and processed transparently and lawfully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">2. Data We Collect</h2>
            <p className="mb-3">When you use our Website, we process personal data, in particular:</p>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li><strong>Contact Information:</strong> Expected data such as e-mail address, first name, last name, phone number, and property preferences provided to us by you during inquiries.</li>
              <li><strong>Technical Data:</strong> Personal data transmitted by your internet browser each time you access the website, including IP addresses, date and time of access, and device specifications.</li>
              <li><strong>Location Data:</strong> Information like GPS data if you have activated such settings on your browser or device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">3. Purpose of Data Collection</h2>
            <p className="mb-3">We process the personal data of our users for the following purposes:</p>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>To fulfill user contact requests and connect you with our real estate specialists.</li>
              <li>For the provision of online property valuations and market analysis.</li>
              <li>To send out newsletters containing our latest offers and real estate insights (you may opt-out at any time).</li>
              <li>For the optimization and operability of the Website, ensuring a seamless user experience.</li>
              <li>Direct marketing and promotional campaigns relevant to your property interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">4. Your Data Protection Rights</h2>
            <p className="mb-3">You possess several rights regarding the data we hold about you:</p>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> You can ask us to correct any inaccurate or incomplete data.</li>
              <li><strong>Right to Deletion:</strong> You can request that we delete your personal data ("Right to be forgotten"), subject to specific legal compliance retention.</li>
              <li><strong>Right to Object:</strong> You can object at any time to the processing of your personal data for direct marketing purposes.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">5. Disclosure of Personal Data</h2>
            <p>
              We prioritize the confidentiality of your data. As a rule, we will only pass on your personal data to relevant third parties (such as developers like Emaar or Aldar) if it is strictly necessary for the fulfillment of your contract or inquiry, or if we have a legal obligation to do so under UAE Law enforcement mandates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">6. Cookies & Tracking Technologies</h2>
            <p className="mb-3">
              We utilize analytics and tracking tools to better understand user interaction with our website:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li><strong>Google Analytics:</strong> Helps us analyze visitor behavior without directly collecting personally identifiable information without your explicit consent.</li>
              <li><strong>Advertising Pixels:</strong> We may employ pixels from platforms (like Facebook, Snapchat, Google Ads) to gauge the efficiency of our advertisements and optimize our campaigns.</li>
            </ul>
          </section>

          {/* Footer Action */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-sm">
            <span className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
            <Link href="/terms" className="text-[#005a9c] font-bold hover:underline">
              Read Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
