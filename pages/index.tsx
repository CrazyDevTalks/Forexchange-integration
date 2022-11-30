import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { NextApiRequest } from 'next';
import { API_URL } from '@/config/index';
import Hero from '@/components/hero/Hero';
import GetCountries from '@/components/countries/GetCountries';
import Spinner from '@/components/spinner/Spinner';

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <Layout
      title="4X | Forex Currency Exchange"
      description="4X is a forex currency exchange platform that allows you to research foreign currencies."
      keywords="Chris Doll, 4X, forex currency exchange"
    >
      <GetCountries />
    </Layout>
  );
};

export default Home;

// export async function getStaticProps() {
//   const res = await fetch(`${CURRENCY_URL}`);
//   const data = await res.json();

//   console.log(data);
//   return {
//     props: {
//       countries: data.countries || null,
//       lastUpdated: new Date(Date.now()).toUTCString(),
//     },
//     revalidate: 3600,
//   };
// }
