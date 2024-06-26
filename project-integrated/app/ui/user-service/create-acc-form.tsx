'use client'

import Link from 'next/link';
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from "react";
import { AlreadyHaveAccount } from '@/app/ui/user-service/buttons';
import { CreateAccountButton } from '@/app/ui/button';
import { createUser } from '@/app/lib/action';

export default function Form() {

  function handleFormAction(formData: FormData) {
    const rawFormData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    createUser(rawFormData);
  }

  return (
    <form action={handleFormAction}> {/* todo: action={handleFormAction} */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block text-sm font-medium">
            Username
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id='username'
                name='username'
                type="string"
                placeholder="Enter your username"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

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
                defaultValue=""
                required
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
                defaultValue=""
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        {/*<CreateAccountButton />*/}
        <CreateAccountButton type="submit"></CreateAccountButton>
      </div>
      <div>
        <AlreadyHaveAccount />
      </div>


    </form >
  );
}
