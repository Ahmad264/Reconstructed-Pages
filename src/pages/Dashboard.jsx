import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { FaFire, FaHourglassHalf, FaGraduationCap } from "react-icons/fa";

const badges = [
  {
    icon: (
      <span className="bg-green-500 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-2">✔</span>
    ),
    text: "4/10 Exercises Completed",
  },
  {
    icon: <span className="text-pink-400 text-lg mr-2">🕑</span>,
    text: "Last Active: 2 hours ago",
  },
  {
    icon: <span className="text-pink-400 text-lg mr-2">🎯</span>,
    text: "Level: Intermediate",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181f2a] to-[#232946] text-white px-2 md:px-8 py-6">

      <Header />
      
      <div className="flex justify-center gap-6 mb-8 mt-6">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#232d3b] px-5 py-2 rounded-full text-gray-200"
          >
            {badge.icon}
            <span className="text-sm">{badge.text}</span>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
        <div className="bg-[#232d3b] rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
            JD
          </div>
          <div className="text-lg font-semibold mb-1">John Doe</div>
          <div className="text-gray-400 mb-4 text-sm">Frontend Developer</div>
          <div className="flex gap-2">
            <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs">JavaScript</span>
            <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs">React</span>
            <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs">CSS</span>
          </div>
        </div>

        <div className="bg-[#232d3b] rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Exercise Progress</span>
            <span className="text-blue-400 text-lg">✔</span>
          </div>
          <div className="text-2xl font-bold mb-2">0 of 0</div>
          <div className="text-gray-400 text-sm mb-2">Exercises Completed</div>
          <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
            <div className="h-full rounded-full bg-blue-500" style={{ width: "0%" }} />
          </div>
        </div>

        <div className="bg-[#232d3b] rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Continue Learning</span>
            <span className="text-blue-400 text-lg">★</span>
          </div>
          <div className="text-gray-400 mb-4">No exercises started yet</div>
          <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition">
            Start Learning
          </button>
        </div>

        <div className="bg-[#232d3b] rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Learning Goals</span>
            <span className="text-yellow-400 font-bold">30%</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">0% of Goals Met</div>
          <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
            <div className="h-full rounded-full bg-yellow-400" style={{ width: "30%" }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
        <div className="bg-[#22243a] rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <FaFire className="text-5xl text-orange-400 mb-2" />
          <div className="text-3xl font-bold text-orange-300 mb-1">0</div>
          <div className="text-gray-300 text-sm tracking-wide">DAY STREAK</div>
        </div>

        <div className="bg-[#22243a] rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <FaHourglassHalf className="text-5xl text-blue-300 mb-2" />
          <div className="text-3xl font-bold text-blue-300 mb-1">0m</div>
          <div className="text-gray-300 text-sm tracking-wide">LEARNING THIS WEEK</div>
        </div>

        <div className="bg-[#22243a] rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <FaGraduationCap className="text-5xl text-purple-400 mb-2" />
          <div className="text-3xl font-bold text-purple-300 mb-1">0</div>
          <div className="text-gray-300 text-sm tracking-wide">CERTIFICATES EARNED</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center text-2xl font-bold mb-4">
          <span className="bg-blue-700/80 text-white rounded-lg p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h6m-6 0V7a4 4 0 00-8 0v4a4 4 0 004 4h0" />
            </svg>
          </span>
          Frontend Development Exercises
        </h2>
      </div>
      <Footer />
    </div>
  );
}
