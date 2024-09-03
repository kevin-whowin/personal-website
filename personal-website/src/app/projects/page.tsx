'use client';

import { useRouter } from 'next/navigation';
import EvaIcon from '../../components/EvaIcons';

export default function Projects() {
  const router = useRouter()

  return (
    <main className="flex bg-background min-h-screen flex-col justify-start p-24">
      <button 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        type="button" 
        onClick={() => router.push('/')}
        aria-label="Go back to home"
      >
        <EvaIcon name="arrow-back" size={24} fill="#FFFFFF" />
      </button>
      <h1 className="pb-24 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-orange flex items-center justify-center">
            My Projects
            <div className="ml-3">
            <EvaIcon name="paper-plane" size={32} fill="#FFFFFF" animation="zoom" />
            </div>
      </h1>      
      <div className="grid grid-cols-1 md:gri1-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-secondary-purple rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Personal Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Portfolio thing that you are on right now actually blah blah blah</p>
            <div className="grid justify-items-end">
            <a 
              href="https://github.com/kevin-whowin/personal-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-purple font-bold text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
            >
              <EvaIcon name="github" size={24} fill="#FFFFFF" />
              <span>GitHub</span>
            </a>
            </div>
          </div>
        </div>    
        
        <div className="bg-secondary-purple rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Google Workspace User Script</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">A user script that adds a few features to the Google Admin Console</p>
            <div className="grid justify-items-end">
              <a 
                href="https://github.com/kevin-whowin/google-admin-user-script" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-purple text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
              >
                <EvaIcon name="github" size={24} fill="#FFFFFF" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>    

        <div className="bg-secondary-purple rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Minikube</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learning Kubernetes with minikube cluster and hosting simple websites on it</p>
            <div className="grid justify-items-end">
              <a 
                href="https://github.com/kevin-whowin/Learning-Kubernetes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-purple text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
              >
                <EvaIcon name="github" size={24} fill="#FFFFFF" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>    

        <div className="bg-secondary-red rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Pizza shop</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">First code I ever made which is a pizza shop written in Python</p>
            <div className="grid justify-items-end">
              <a 
                href="https://github.com/kevin-whowin/First-Code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-red text-white text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
              >
                <EvaIcon name="github" size={24} fill="#FFFFFF" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>    

        <div className="bg-secondary-red rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Lorem ipsum</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid justify-items-end">
              <a 
                href="https://github.com/kevin-whowin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-red text-white text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
              >
                <EvaIcon name="github" size={24} fill="#FFFFFF" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>    

        <div className="bg-secondary-red rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Lorem ipsum</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid justify-items-end">
              <a 
                href="https://github.com/kevin-whowin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-red text-white text-sm px-2 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 flex items-center space-x-1"
              >
                <EvaIcon name="github" size={24} fill="#FFFFFF" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>    
      </div>
    </main>
  );
}
