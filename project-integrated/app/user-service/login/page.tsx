'use client'

import PeerprepLogo from '@/app/ui/peerprep-logo';
import { CreateQuestion, CreateCategory, CreateAccountButton, LogInButton } from '@/app/ui/questions/buttons';
import { QuestionsTable, CategoriesTable } from '@/app/ui/questions/table';
// import { categories } from './lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import CreateAccountForm from '@/app/ui/user-service/create-acc-form';
import LogInForm from '@/app/ui/user-service/login-form';
import { useRouter } from 'next/navigation'


export default function Page() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-40">
        <div><PeerprepLogo /></div>

      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <h1 className="text-[30px]">Log In</h1>
        <div className="fflex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-3/6 md:px-20">
          {/* Add Hero Images Here */}
          <div className="relative ml-auto">
            <Image
              src="/MatchingService.png"
              width={3000}
              height={2100}
              className="hidden md:block"
              alt="The Matching Service showing the interview"
            />
            <Image
              src="/MatchingService.png"
              width={560}
              height={620}
              className="md:hidden block"
              alt="Screenshots of the Matching Service showing mobile version"
            />
          </div>
        </div>
        <div className="fflex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/6 md:px-20">
          <h1 className="text-[20px]">Log in here</h1>
          <div className="ml-auto flex gap-4">
            <LogInForm router={router} />
          </div>
        </div>
      </div>
    </main>
  );
}
