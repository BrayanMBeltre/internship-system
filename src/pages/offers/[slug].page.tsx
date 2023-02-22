import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function OfferPage() {
  return (
    <Layout>
      <Seo templateTitle='Offer Page' />

      <Header />

      <main>
        <section className=''>
          <div className='layout pt-4'>
            <div className='card bg-base-100  shadow-xl'>
              <NextImage
                className='relative h-[267px]'
                fill
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Shoes'
              />

              <div className='card-body'>
                <h2 className='card-title justify-center'>
                  Shoes!
                  <div className='badge-secondary badge'>NEW</div>
                </h2>
                <p className='text-center'>
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className='card-actions justify-center'>
                  <div className='badge-outline badge'>Fashion</div>
                  <div className='badge-outline badge'>Products</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='layout pt-4 '>
          <div className='tabs '>
            <a className='tab tab-bordered'>Tab 1</a>
            <a className='tab tab-bordered tab-active'>Tab 2</a>
            <a className='tab tab-bordered'>Tab 3</a>
          </div>

          <article className='prose pt-4'>
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
