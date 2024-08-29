import Image from 'next/image';
import kevinImage from './kevin.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cover p-24">

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image src={kevinImage} alt="Kevin Huynh" className="rounded-md" width={600} height={192} />
        <div className=" pl-16 pt-96 mt-72 absolute inset-0 z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Identity theft is not a joke, Jim!&nbsp;
          <code className="font-mono font-bold">Millions of families suffer every year.</code>
        </p>
      </div>

        <div>
          <h1 className=" pb-4 text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 sm:text-7xl sm:dark:from-sky-900 sm:dark:to-blue-900">
            Kevin Huynh!
          </h1>
          <div className="flex flex-col space-y-8 mx-20 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tincidunt metus. Sed molestie arcu a ligula auctor, eget condimentum dui egestas. Fusce scelerisque ligula ligula, a malesuada nibh maximus vitae. Maecenas tincidunt mi at laoreet commodo. Donec eleifend eros eget eros dapibus, nec vehicula tellus viverra. Donec faucibus magna ac efficitur pellentesque. Proin ultrices est ut tempus eleifend. Vivamus eu porta tortor. Etiam aliquam, nunc eget condimentum dapibus, libero tortor porta nibh, non ullamcorper lacus magna vel quam. Etiam nec malesuada erat. Maecenas accumsan ac odio at mattis. Aenean porta posuere scelerisque. 
          </div>
        </div>
      </div>

      <div className="pt-24 mb-32 grid place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 gap-4">
        <a href="https://github.com/kevin-whowin"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Featuring all my projects! Including this one~
          </p>
        </a>
        
        <a href="https://www.linkedin.com/in/kevin-huynh-a6269a258"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Where you can find out about my social work life.
          </p>
        </a>
        <a 
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Email{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            If u send me spam mail,  
            <code className="font-mono font-bold"> I'll eat it.</code>
          </p>
        </a>
      </div>
    </main>
  );
}
