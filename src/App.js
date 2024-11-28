import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <nav className="pt-8 px-8">
        <div className="w-full flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-xl font-bold hover:text-gray-600"
          >
            VETINARI
          </button>
          <div className="space-x-6">
            <button 
              onClick={() => setCurrentPage('about')}
              className="text-gray-600 hover:text-gray-800"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('team')}
              className="text-gray-600 hover:text-gray-800"
            >
              Team
            </button>
          </div>
        </div>
      </nav>

      <main>
        {currentPage === 'home' && (
          <div className="max-w-2xl mx-auto text-center mt-32">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building something amazing here.
              Simple. Elegant. Effective.
            </p>
          </div>
        )}
        
        {currentPage === 'about' && (
          <div className="max-w-2xl mx-auto mt-32">
            <h2 className="text-3xl font-bold mb-8">About Vetinari</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Vetinari is a project dedicated to bringing elegance and simplicity
                to the digital world. We believe in creating solutions that are
                both powerful and intuitive.
              </p>
              <p>
                Our mission is to develop tools and services that enhance the way
                people interact with technology, making complex processes feel
                natural and effortless.
              </p>
              <p>
                Join us on our journey to reshape the digital landscape, one
                elegant solution at a time.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'team' && (
          <div className="max-w-2xl mx-auto mt-32">
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We are a dedicated group of innovators and problem solvers.
              </p>
              {/* Add team content here */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;