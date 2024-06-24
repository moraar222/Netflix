import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Login from '@/Pages/auth/login';

function Page() {
  return (
    <>
      {/* Uncomment if Navbar is needed */}
      {/* <Navbar /> */}
      <Hero />
      <Footer />
      <Login />
    </>
  );
}

export default Page;
