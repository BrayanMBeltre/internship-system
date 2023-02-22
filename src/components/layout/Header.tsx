import Link from 'next/link';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function Header() {
  return (
    <header className=''>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <div className='dropdown-bottom dropdown '>
            <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
              <div className='w-10 rounded-full'>
                <NextImage
                  className='relative h-[40px]'
                  fill
                  src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  alt='Shoes'
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
            >
              <li>
                <Link href='/me/profile' className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex-none'>
          <button className='btn-ghost btn-circle btn'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
              <span className='badge-primary badge badge-xs indicator-item'></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
