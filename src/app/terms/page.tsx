import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 md:pt-40 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1b3f] mb-4 tracking-tight uppercase">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using the ZHM Real Estate website or our services.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">1. Introduction</h2>
            <p className="mb-4">
              Thank you for visiting the ZHM Real Estate Terms and Conditions page. Through ZHM Real Estate, we offer a variety of services, and we allow requesting our services online through the website, social networking applications, and other channels of communication with the company. 
            </p>
            <p>
              We provide these terms and conditions to govern and regulate the legal relations between the company and its customer, so please read these terms with due care before agreeing to the terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">2. Tariffs & Definitions</h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li><strong>"Company", "ZHM Real Estate", "we", "us"</strong> refers to ZHM Real Estate LLC and its subsidiaries.</li>
              <li><strong>"Agreement"</strong> refers to this document and its terms and conditions, as well as the Privacy Policy.</li>
              <li><strong>"User", "you"</strong> refers to a person who uses or visits the Company's social media sites or website or visits the Company's content.</li>
              <li><strong>"Client"</strong> refers to individuals, institutions, companies, and public and private firms that submit requests for services provided by the Company.</li>
              <li><strong>"Services" or "Product"</strong> refers to the services offered by the Company that are provided in accordance with the specifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">3. Communications & Notices</h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>The company may contact you using the contact information you provided when expressing interest in our services. By agreeing to this, you authorize us to communicate with you via electronic or phone communication according to the laws of the U.A.E.</li>
              <li>The user authorizes the company to communicate with them if they have shown interest in the company's services through the company's communication channels.</li>
              <li>Any notices, offers, and promotions that the Company wants to communicate to the users are made through their contact details and no further permission is required to do so.</li>
              <li>By submitting inquiries, you agree to receive communications regarding various projects, products, and services from ZHM Real Estate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">4. Modifications to Terms</h2>
            <p>
              Please note that our services may be continually modified or updated, and our terms and conditions and privacy policy may be modified, updated, or added to from time to time. The company will not be obligated to notify any of its users or customers individually. Therefore, it is essential to review this agreement before conducting any transactions. Any use of ZHM Real Estate Products or Services constitutes your acceptance of any revisions or additions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">5. Copyrights & Intellectual Property</h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>The website and all of its materials and components are privately owned by us and may not be imitated, copied, or exploited in any way. All content (including texts, images, videos, symbols, numbers, and data) is legally protected under the laws of the State of U.A.E. and international conventions.</li>
              <li>"ZHM Real Estate" is a trademark owned by us and must not be infringed, imitated, copied, or used illegally on goods or services not associated with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">6. Disclaimer</h2>
            <p>
              You agree to waive the liability of ZHM Real Estate, its employees, and personnel for the use of the Website and social media channels, or the inability of the User to use it optimally. The disclaimer applies to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#005a9c] mb-4 border-b border-gray-100 pb-2">7. Jurisdiction</h2>
            <p>
              The UAE judiciary has the authority to resolve any disputes arising from the interpretation of any provision in this document. If any clause is found to be invalid by a court ruling, it will not affect the validity of the other clauses, which will remain in force and produce their legal effects unless the application cancels the agreement.
            </p>
          </section>

          {/* Footer Action */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-sm">
            <span className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
            <Link href="/contact" className="text-[#005a9c] font-bold hover:underline">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
