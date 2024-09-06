'use client';
import { useFadeIn, useSlideIn } from './useFadeIn';
import EvaIcon from '../components/EvaIcons';
import { useRouter } from 'next/navigation';

export default function Home() {
  const fadeRef1 = useFadeIn();
  const slideRef1 = useSlideIn(0);
  const slideRef2 = useSlideIn(200);
  const slideRef3 = useSlideIn(400);
  const slideRef4 = useSlideIn(600);
  const router = useRouter()

  return (
    <main className="flex bg-background flex-col items-center bg-cover">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div ref={fadeRef1} className="opacity-0 transition-opacity duration-1000 ease-in-out text-center mb-16">
          <div className="flex justify-center gap-x-10 font-bold"> 
            <button type="button" onClick={() => router.push('/projects')}>
              Projects
            </button>     
            <button type="button" onClick={() => router.push('/aboutme')}>
              About Me
            </button>
          </div>
          <h1 className="pb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-orange sm:text-7xl flex items-center justify-center">
            Kevin Huynh
            <EvaIcon name="heart" size={32} fill="#FFFFFF" animation="zoom" />
          </h1>
          <a className="flex font-bold text-2xl justify-center mt-2"> 
            i like trains  
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-4 mt-64 md:px-24">
          <div ref={slideRef1} className="transform -translate-x-full opacity-0 transition-all duration-500 ease-out">
            <a href="https://www.linkedin.com/in/kevin-huynh-a6269a258"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EvaIcon name="linkedin" size={32} fill="#FFFFFF" animation="pulse" />
              <h2 className="my-1 text-2xl font-semibold text-white">
                LinkedIn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-400">
                Where you can find out about my social work life.
              </p>
            </a>
          </div>
          <div ref={slideRef2} className="transform -translate-x-full opacity-0 transition-all duration-500 ease-out">
            <a href="https://github.com/kevin-whowin"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EvaIcon name="github" size={32} fill="#FFFFFF" animation="pulse" />
              <h2 className="my-1 text-2xl font-semibold text-white">
                Github{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-400">
                Featuring all my projects! Including this one~
              </p>
            </a>
          </div>
          <div ref={slideRef3} className="transform -translate-x-full opacity-0 transition-all duration-500 ease-out">
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EvaIcon name="email" size={32} fill="#FFFFFF" animation="pulse" />
              <h2 className="my-1 text-2xl font-semibold text-white">
                Email{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-400">
                If u send me spam mail,  
                <code className="font-mono font-bold"> I'll eat it.</code>
              </p>
            </a>
          </div>
          <div ref={slideRef4} className="transform -translate-x-full opacity-0 transition-all duration-500 ease-out">
            <a href="/cv.pdf" download="cv" 
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EvaIcon name="file" size={32} fill="#FFFFFF" animation="pulse" />
              <h2 className="my-1 text-2xl font-semibold text-white">
                Resume{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-400">
                Download resume here.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}