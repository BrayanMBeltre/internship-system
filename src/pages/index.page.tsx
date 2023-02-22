import Link from 'next/link';
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const tags = ['Discover', 'Saved', 'Applied', 'Closed', 'Discarded'];

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <Header />

      <main>
        <section className='layout'>
          {/* <Typography color='light' variant='h1' className='pt-8'>
            Find interships
          </Typography> */}

          <ul className='flex gap-4 overflow-x-auto pb-2 pt-4'>
            {tags.map((tag) => (
              <li key={tag}>
                <button className='badge-primary badge py-4 px-6 '>
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          <div className='form-control mt-4 '>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Search…'
                className='input-bordered input w-full'
              />
              <button className='btn-square btn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>

          <ul className='mt-4 grid grid-cols-1'>
            <li>
              <Link href='/offers/1'>
                <div className='card bg-base-100 shadow-xl'>
                  <NextImage
                    className='relative h-[267px]'
                    fill
                    src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                    alt='Shoes'
                  />
                  <div className='card-body'>
                    <h2 className='card-title'>
                      Shoes!
                      <div className='badge-secondary badge'>NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'>
                      <div className='badge-outline badge'>Fashion</div>
                      <div className='badge-outline badge'>Products</div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
