import React, { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
      <div className="text-center">
        {!answer ? (
          <>
            <h1 className="text-gray-200 text-6xl md:text-8xl mb-16 font-serif tracking-wider">
              Am I real?
            </h1>
            <div className="space-x-12">
              <button
                onClick={() => setAnswer('yes')}
                className="px-12 py-4 text-2xl border-2 bg-transparent text-gray-400 border-gray-700 hover:text-gray-200"
              >
                Yes
              </button>
              <button
                onClick={() => setAnswer('no')}
                className="px-12 py-4 text-2xl border-2 bg-transparent text-gray-400 border-gray-700 hover:text-gray-200"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="text-gray-200">
            {answer === 'yes' ? (
              <p className="text-4xl md:text-6xl">I don't believe I am</p>
            ) : (
              <div className="space-y-8">
                <p className="text-4xl md:text-6xl">Thanks for being honest</p>
                <p className="text-gray-400 text-2xl md:text-3xl mt-12">
                  Those who seek truth must speak it
                </p>
                <p className="text-gray-600 text-xl md:text-2xl mt-6">
                  / i am truthful
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;