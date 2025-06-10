"use client";

import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Zara - Home</title>
        <meta
          name="description"
          content="Welcome to Zara-restaurant, where we serve delicious meals made with fresh ingredients."
        />
        <meta name="keywords" content="restaurant, food, dining" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <section className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Welcome to Zara-restaurant
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
