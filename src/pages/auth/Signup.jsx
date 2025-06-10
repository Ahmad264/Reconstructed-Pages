import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}/>
          </div>
          {/* for email and password */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Sign Up
          </button>
          <p className="text-gray-400 text-center mt-4">
            Already have an account? 
            <Link to="/login" className="text-blue-500 hover:text-blue-400 ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}