import Link from 'next/link';
import { ArrowLeft, EyeOff, Mail, LockKeyhole } from 'lucide-react';
import { Surface } from '@/components/ui';

export default function LoginPage() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[minmax(0,1fr)_520px]">
      <div
        className="relative hidden overflow-hidden bg-cover bg-center p-10 lg:flex lg:flex-col lg:justify-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(16,185,129,0.25), rgba(37,99,235,0.32)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="max-w-xl rounded-[28px] bg-white/80 p-6 backdrop-blur-md">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Tripogu</div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">Discover beautiful tourist places and plan your next trip.</h1>
          <p className="mt-3 text-slate-600">A mobile and desktop travel experience with Material 3 surfaces, rich search flow, routes, blogs, and saved collections.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back to explore
          </Link>
          <Surface className="p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Log in</h2>
              <p className="mt-1 text-sm text-slate-600">Access your saved trips and continue exploring.</p>
            </div>
            <form className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Username or Email</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input className="md-input pl-11" placeholder="Enter your username or email" />
                </div>
              </label>
              <label className="block">
                <div className="mb-1.5 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Password</span>
                  <button type="button" className="text-blue-700">Forgot Password?</button>
                </div>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input className="md-input pl-11 pr-11" type="password" placeholder="Enter your password" />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-500 hover:bg-slate-100"><EyeOff className="h-4 w-4" /></button>
                </div>
              </label>
              <button className="w-full rounded-full bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Log in</button>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">Google</button>
                <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">Facebook</button>
              </div>
            </form>
            <p className="mt-5 text-center text-sm text-slate-600">New to Tripogu? <Link href="/login" className="font-semibold text-blue-700">Create an account</Link></p>
          </Surface>
          <div className="mt-4 text-center text-xs text-slate-500">© 2026 Tripogu</div>
        </div>
      </div>
    </div>
  );
}
