import React from 'react'

const Footer = () => {
  return (
    // <footer>
    //     <div className='p-10 bg-gray-800 text-gray-200'>
    //         <div className='max-w-7Xl mx-auto'>
    //             <div className='grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
    //                 <div className='mb-5'></div>
    //                 <li>Audio Description</li>
    //                 <li>Invester Relations</li>
    //                 <li>Legal Notices</li>
    //                 <div className='mb-5'></div>
    //                 Help center<br/>
    //                 Jobs<br/>
    //                 Cookie Preferences<br/>
    //                 <div className='mb-5'>
    //                     Gift Cards<br/>
    //                     Terms of Use <br/>
    //                     Corporate Information<br/>
    //                 </div>
    //                 <div className='mb-5'>
    //                     Media Centre<br/>
    //                     Privecy<br/>
    //                     Contact Us<br/>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // </footer>
    <footer className="w-full bg-[#141414] text-gray-400">

  <div className="w-full p-10 space-y-2">
    <div className="">Questions? Call 000-800-040-1843
    </div>

    <div className="flex justify-center flex-wrap w-full my-4">

      <div className="sm:w-1/4 w-1/2">

        <ul className="space-y-2">
          <li>FAQ </li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>

        </ul>
      </div>
      <div className="sm:w-1/4 w-1/2">
        <ul  className="space-y-2">
          <li className="">Help Centre </li>
          <li className=""> Jobs</li>
          <li className=""> Cookie Preferences</li>
          <li className=""> Legal Notices</li>
        </ul>
      </div>
      <div className="sm:w-1/4 w-1/2">
        <ul  className="space-y-2">
          <li className="">Account </li>
          <li className="">Ways to Watch </li>
          <li className="">Corporate Information </li>
          <li className="">Netflix Originals </li>

        </ul>

      </div>
      <div className="sm:w-1/4 w-1/2">
        <ul  className="space-y-2">
          <li className=""> Media Centre</li>
          <li className="">Terms of Use </li>
          <li className="">Contact Us </li>
        </ul>
      </div>

    </div>

     <div className=" space-y-4 pt-3" >
       
        <div className="">
              <select className="bg-transparent rounded border border-white px-4 py-1  text-white" name="" id="cars">

                <span className="text-black">
                  <option value="">English</option>
                  <option value="">हिन्दी</option>
                </span>
              </select>

            </div>
       
       
        <div className="">Netflix India</div>

     </div> 
  </div>

</footer>
  )
}

export default Footer