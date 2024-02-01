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
    <footer class="w-full bg-[#141414] text-gray-400">

  <div class="w-full p-10 space-y-2">
    <div class="">Questions? Call 000-800-040-1843
    </div>

    <div class="flex justify-center flex-wrap w-full my-4">

      <div class="sm:w-1/4 w-1/2">

        <ul class="space-y-2">
          <li>FAQ </li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>

        </ul>
      </div>
      <div class="sm:w-1/4 w-1/2">
        <ul  class="space-y-2">
          <li class="">Help Centre </li>
          <li class=""> Jobs</li>
          <li class=""> Cookie Preferences</li>
          <li class=""> Legal Notices</li>
        </ul>
      </div>
      <div class="sm:w-1/4 w-1/2">
        <ul  class="space-y-2">
          <li class="">Account </li>
          <li class="">Ways to Watch </li>
          <li class="">Corporate Information </li>
          <li class="">Netflix Originals </li>

        </ul>

      </div>
      <div class="sm:w-1/4 w-1/2">
        <ul  class="space-y-2">
          <li class=""> Media Centre</li>
          <li class="">Terms of Use </li>
          <li class="">Contact Us </li>
        </ul>
      </div>

    </div>

     <div class=" space-y-4 pt-3" >
       
        <div class="">
              <select class="bg-transparent rounded border border-white px-4 py-1  text-white" name="" id="cars">

                <span class="text-black">
                  <option value="">English</option>
                  <option value="">हिन्दी</option>
                </span>
              </select>

            </div>
       
       
        <div class="">Netflix India</div>

     </div> 
  </div>

</footer>
  )
}

export default Footer