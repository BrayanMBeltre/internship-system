import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function ProfilePage() {
  return (
    <Layout>
      <Seo templateTitle='Profile' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='avatar'>
              <div className='w-32 rounded'>
                <NextImage
                  className='relative h-[200px]'
                  fill
                  src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  alt='Shoes'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
