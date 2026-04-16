import { Surface, Badge } from '@/components/ui';
import { Mail, ShieldCheck, Bell, Settings2, LogOut, Star, MapPinned } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      <Surface className="p-5 sm:p-6">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-slate-200 text-3xl font-bold text-slate-600">R</div>
          <div className="mt-4 sm:mt-0 sm:pl-5">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">Example Name</h1>
            <p className="mt-1 text-sm text-slate-600">Personalized account, reviews, passwords, support, and sign-out actions.</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Badge><Star className="h-3.5 w-3.5" /> 4.9 rating</Badge>
              <Badge><MapPinned className="h-3.5 w-3.5" /> 18 saved places</Badge>
            </div>
          </div>
        </div>
      </Surface>
      <Surface className="p-4 sm:p-5">
        <div className="space-y-2">
          {[
            ['Edit Profile', 'Name, email, phone, and photo', Settings2],
            ['Reviews', 'Update your reviews', Star],
            ['Password Change', 'Update your account password', ShieldCheck],
            ['Support', 'Get help and contact support', Mail],
            ['Notifications', 'Control alerts and reminders', Bell],
          ].map(([title, desc, Icon]) => (
            <button key={title as string} className="flex w-full items-center justify-between rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-left transition hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-slate-900">{title as string}</div>
                  <div className="text-sm text-slate-500">{desc as string}</div>
                </div>
              </div>
            </button>
          ))}
          <button className="flex w-full items-center justify-between rounded-[22px] border border-rose-200 bg-rose-50 px-4 py-4 text-left transition hover:bg-rose-100/80">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-rose-600"><LogOut className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-rose-700">Sign out</div>
                <div className="text-sm text-rose-600/80">Log out of your account</div>
              </div>
            </div>
          </button>
        </div>
      </Surface>
    </div>
  );
}
