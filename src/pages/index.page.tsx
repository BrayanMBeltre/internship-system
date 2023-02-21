import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  FiClock,
  FiFacebook,
  FiFilter,
  FiMapPin,
  FiUser,
} from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';

import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const tags = ['Discover', 'Saved', 'Applied', 'Closed', 'Discarded'];

const cardData = {
  logo: 'https://s3-alpha.figma.com/profile/5bbe15ed-bea9-4787-904b-e96edb8c2f9c',
  title: 'Sr. UX Designer',
  company: 'Google',
  badges: [
    {
      icon: <FiMapPin />,
      title: 'New York',
    },
  ],
  except:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi distinctio quisquam ducimus aliquid libero sit animi. Quia iste provident rem commodi excepturi ratione, explicabo culpa eveniet libero porro, nihil dicta?',
  date: new Date(),
  price: '$50k/mo',
};

type FilterForm = {
  name: string;
};

export default function HomePage() {
  // const session = useSession();
  // const supabaseClient = useSupabaseClient();
  const methods = useForm<FilterForm>({
    mode: 'onTouched',
  });

  return (
    <Layout>
      <Seo />

      <header className='flex items-center justify-between pt-4'>
        <Typography color='light' variant='h3'>
          Sign in
        </Typography>
        <FiUser className='' />
      </header>

      <main>
        <section className=''>
          <Typography color='light' variant='h1' className='pt-8'>
            Find interships
          </Typography>

          <ul className='flex gap-4 overflow-x-auto pb-2 pt-4'>
            {tags.map((tag) => (
              <li key={tag}>
                <button className='rounded-full bg-light px-3 py-1 font-medium text-dark'>
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          <FormProvider {...methods}>
            <form className='mt-4 flex items-end gap-2'>
              <Input
                containerClassName='text-dark'
                id='search'
                label=''
                placeholder='Search something...'
                leftIcon={HiOutlineSearch}
              />

              <div className='flex h-[36px] w-[36px] items-center justify-center rounded-lg bg-primary-600'>
                <FiFilter />
              </div>
            </form>
          </FormProvider>

          <div className='mt-4 overflow-hidden rounded-3xl bg-primary-700 p-4'>
            <div className='flex items-center gap-2'>
              <div className='rounded-xl bg-dark p-2'>
                <FiFacebook className='h-[40px] w-[40px]' />
              </div>
              <div>
                <h3>{cardData.title}</h3>
                <p>{cardData.company}</p>
              </div>
            </div>

            <ul className='pt-4'>
              {cardData.badges.map((badge) => (
                <li key={badge.title}>
                  <button className='flex items-center gap-1 rounded-xl border border-primary-400 bg-primary-500 px-2 py-1 '>
                    {badge.icon}
                    <p>{badge.title}</p>
                  </button>
                </li>
              ))}
            </ul>

            <div className='pt-4'>
              <p className=' line-clamp-2'>{cardData.except}</p>
              <span className='underline'>Read More</span>
            </div>

            <div className='-mx-4 -mb-4 mt-4 flex justify-between bg-white px-4 py-4 text-dark '>
              <div className='flex items-center gap-2 font-semibold'>
                <FiClock />
                <p>{cardData.date.toLocaleDateString()}</p>
              </div>
              <Typography variant='h4'>{cardData.price}</Typography>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
