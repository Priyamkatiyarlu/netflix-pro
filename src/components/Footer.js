import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] text-gray-400">
      <div className="w-full p-10 space-y-2">
        <div>Questions? Call 000-800-040-1843</div>

        <div className="flex justify-center flex-wrap w-full my-4">
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Netflix Originals</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li>Media Centre</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-3">
          <div className="">
            {/* Corrected usage of select and options */}
            <select className="bg-transparent rounded border border-white px-4 py-1 text-white" name="" id="languageSelect">
              <option value="">English</option>
              <option value="">हिन्दी</option>
            </select>
          </div>

          <div className="">Netflix India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

