'use client';

import { useFadeIn } from './useFadeIn';

export default function Home() {
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();

  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between bg-cover p-24">
      <div ref={fadeRef1} className="opacity-0 transition-opacity duration-1000 ease-in-out">
        <h1 className="pb-4 text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 sm:text-7xl">
          Kevin Huynh!
        </h1>
        <a href="/cv.pdf" download="cv">Download CV</a>
      </div>
      <div ref={fadeRef2} className="opacity-0 transition-opacity duration-1000 ease-in-out">
        <div className="flex text-white flex-col space-y-8 mx-40 pb-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tincidunt metus. Sed molestie arcu a ligula auctor, eget condimentum dui egestas. Fusce scelerisque ligula ligula, a malesuada nibh maximus vitae. Maecenas tincidunt mi at laoreet commodo. Donec eleifend eros eget eros dapibus, nec vehicula tellus viverra. Donec faucibus magna ac efficitur pellentesque. Proin ultrices est ut tempus eleifend. Vivamus eu porta tortor. Etiam aliquam, nunc eget condimentum dapibus, libero tortor porta nibh, non ullamcorper lacus magna vel quam. Etiam nec malesuada erat. Maecenas accumsan ac odio at mattis. Aenean porta posuere scelerisque.
        </div>
      </div>
    </main>
  );
}