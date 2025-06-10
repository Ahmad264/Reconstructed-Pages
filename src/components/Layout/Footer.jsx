import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHome, FaCode, FaFlask, FaProjectDiagram, FaUserGraduate } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#232946] to-[#181f2a] pt-12 pb-4 text-gray-200">
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6">
        <div className="flex-1 min-w-[270px]">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 p-2 rounded-lg text-white text-xl">
              <FaUserGraduate />
            </span>
            <span className="font-bold text-xl text-white">TechLearn Solutions</span>
          </div>
          <p className="text-gray-300 mb-5">
            Empowering students and professionals with the skills and knowledge needed to excel in the technology industry through expert-led training programs.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com/yourpage" className="hover:text-blue-400 transition"><FaFacebookF size={20} /></a>
            <a href="https://twitter.com/yourprofile" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
            <a href="https://instagram.com/yourprofile" className="hover:text-blue-400 transition"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400 transition"><FaLinkedinIn size={20} /></a>
          </div>
          {/* Newsletter */}
          <div className="bg-[#232d3b] bg-opacity-90 rounded-xl p-5 mb-4 w-full max-w-md">
            <div className="font-semibold mb-1 text-white">Stay Updated</div>
            <div className="text-gray-400 text-sm mb-3">Get the latest updates on courses and tech trends</div>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg px-4 py-2 bg-[#22243a] text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-lg flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaTelegramPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <div className="font-bold text-lg mb-3 text-white flex items-center gap-2">
            <span className="w-2 h-4 bg-blue-500 rounded-full mr-2"></span> Quick Links
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaCode /> TechPrep
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaFlask /> DesignLab
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaUserGraduate /> Summer Internship
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaProjectDiagram /> Mini Projects
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[240px]">
          <div className="font-bold text-lg mb-3 text-white flex items-center gap-2">
            <span className="w-2 h-4 bg-blue-500 rounded-full mr-2"></span> Contact Us
          </div>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center gap-2 bg-[#232d3b] rounded-lg px-4 py-2">
                <FaEnvelope className="text-blue-400" /> techlearnsolutions@gmail.com
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 bg-[#232d3b] rounded-lg px-4 py-2">
                <FaPhoneAlt className="text-blue-400" /> +91 1234567891
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 bg-[#232d3b] rounded-lg px-4 py-2">
                <FaMapMarkerAlt className="text-blue-400" /> TechLearn Solutions, Telangana, India - 500087
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm px-6">
        <div className="mb-2 md:mb-0">
          © 2024 TechLearn Solutions. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="cookie-policy" className="hover:text-blue-400 transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}