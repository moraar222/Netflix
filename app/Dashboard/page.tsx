import React from 'react'

function page() {
  return (
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 1</h2>
                <p>Content for card 1</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">About us</h2>
                <p>Our projects/visitations</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 3</h2>
                <p>Content for card 3</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  
  
export default page