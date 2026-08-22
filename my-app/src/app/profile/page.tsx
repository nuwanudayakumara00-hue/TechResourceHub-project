'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // LocalStorage වලින් Data ලබා ගැනීම
    const savedName = localStorage.getItem('userName') || 'Nuwan Udayakumara';
    const savedEmail = localStorage.getItem('userEmail') || 'nuwanudayakumara00@gmail.com';
    setName(savedName);
    setEmail(savedEmail);
  }, []);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
        <p className="text-slate-400 text-sm mb-8">Manage your personal information and password.</p>

        {/* Success Alert */}
        {isSaved && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm flex items-center gap-2">
            ✓ Profile details updated successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Avatar Card */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center h-fit">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl font-bold text-white mb-4 border-2 border-blue-400/30 shadow-lg shadow-blue-600/20">
              {name.charAt(0)}
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-xs text-slate-400 mt-1">{email}</p>
            
            <button 
              onClick={handleLogout}
              className="mt-6 w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold rounded-xl transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Right Form Details */}
          <div className="md:col-span-2 space-y-6">
            
            {/* General Info Form */}
            <form onSubmit={handleUpdateProfile} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h2 className="text-lg font-semibold text-blue-400 border-b border-slate-800 pb-3">Personal Details</h2>
              
              <div>
                <label className="block text-xs text-slate-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Save Changes
              </button>
            </form>

            {/* Password Change Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Password updated successfully!'); }} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h2 className="text-lg font-semibold text-blue-400 border-b border-slate-800 pb-3">Change Password</h2>
              
              <div>
                <label className="block text-xs text-slate-400 mb-1">Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword} 
                  onChange={(e) => setCurrentPassword(e.target.value)} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">New Password</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <button 
                type="submit" 
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Update Password
              </button>
            </form>

          </div>

        </div>
      </div>
    </main>
  );
}