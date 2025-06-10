import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
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
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Login
          </button>
          <p className="text-gray-400 text-center mt-4">
            Don't have an account? 
            <Link to="/signup" className="text-blue-500 hover:text-blue-400 ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}