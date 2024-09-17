// import React from 'react'
// import { Link } from 'react-router-dom'
// import img from '../fourthComponent/graph.jpeg';
// function Seat() {
//   return (
//    <>
//    <div class="mt-20 ">
//     <div style={{backgroundImage :`URL(${img})`}} >
//         <div class="text-center">
//             <h3>Seat No. 12</h3>
//             <p>20th Floor</p>
           
//         </div>
 

//     </div>
//    </div>
//    </>
//   )
// }

// export default Seat


// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import img from '../fourthComponent/graph.jpeg';

// function Seat() {
//   const [showHiddenBox, setShowHiddenBox] = useState(false);

//   return (
//     <>
//       <div class="mt-20 ">
//         <div style={{backgroundImage :`URL(${img})`}} >
//           <div class="h-44 w-44 bg-white-900">
           
//             <button onClick={() => setShowHiddenBox(!showHiddenBox)}>Toggle Hidden Box</button>
//             {showHiddenBox && (
//               <div class="hidden-box">
               
//                 <p>This is a hidden message!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Seat

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../fourthComponent/graph.jpeg';

function Seat() {
  const [showHiddenBox, setShowHiddenBox] = useState(false);

  return (
    <>
      <div class="mt-20 ">
        <div style={{backgroundImage :`URL(${img})`}} >
          <div class="h-44 w-44 bg-white-900">
            <button 
              class="flex justify-center items-center w-10 h-10 bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
              onClick={() => setShowHiddenBox(!showHiddenBox)}
            >
              <svg class="w-44 h-44 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              {showHiddenBox && (
                <div class="hidden-box absolute top-10 mt-20 ml-10  right- bg-white p-2 rounded shadow-md">
                  <p>This is a hidden message!</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Seat