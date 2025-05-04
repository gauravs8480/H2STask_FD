import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1e27] min-h-[350px]  pt-12 pb-12 w-full">
      <div className="max-w-[1300px] mx-auto px-4 pt-12 pb-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between max-w-sm">
          <div>
            <div className="text-white font-playfair text-4xl font-semibold mb-4">
              <a href="#">MNTN</a>
            </div>
            <p className="text-white font-semibold leading-relaxed mb-8 mt-6 text-lg">
              Get out there & discover your next
              <br />
              slope, mountain & destination!
            </p>
          </div>
          <div className="text-sm text-white/60">
            Copyright © 2024 MNTN, Inc. Terms & Privacy
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24  md:gap-6  xl:gap-70 2xl:gap-55  3xl:gap-70 4xl:gap-00">
          <div>
            <h4 className="text-[#e9c675] font-semibold mb-4 text-xl">More on The Blog</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">About MNTN</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Contributors & Writers</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Write For Us</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Contact Us</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#e9c675] font-semibold mb-4 text-xl">More on MNTN</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">The Team</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Jobs</a></li>
              <li><a href="#" className="text-white text-lg hover:text-[#e9c675]">Press</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
