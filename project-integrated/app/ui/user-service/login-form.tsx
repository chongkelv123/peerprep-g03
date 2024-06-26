'use client'

import Link from 'next/link';
import {
  EnvelopeIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from "react";
import { DontHaveAccount } from '@/app/ui/user-service/buttons';
import { LogInButton } from '@/app/ui/button';
import { loginUser } from '@/app/lib/action';

export default function Form({router}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  async function handleFormAction(event) {
    event.preventDefault();
    const rawFormData = {
      email: email,
      password: password,
    }
    
    const result = await loginUser(rawFormData);
    if (result && result.success) {
    router.push('/dashboard')
    } else {
      setPassword('');
      setEmail('')
      setErrorMessage('Invalid username / password')
    }
  }

  return (
    <form onSubmit={handleFormAction}> {/* todo: action={handleFormAction} */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id='email'
                name='email'
                type="email"
                placeholder="Enter your email address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
                value = {email}
                onChange={e => setEmail(e.target.value)}
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id='password'
                name='password'
                type="password"
                placeholder="Enter password"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
                value = {password}
                onChange={e => setPassword(e.target.value)}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {errorMessage && (<div className="text-red-500 text-center mb-2">{errorMessage}</div>)}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        {/*<LogInButton />*/}
        <LogInButton type="submit"></LogInButton>
      </div>
      <div>
        <DontHaveAccount />
      </div>
    </form >
  );
}
