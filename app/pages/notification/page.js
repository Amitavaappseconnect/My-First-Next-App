
"use client"
import Link from "next/link"
import Modal from '../../component/Modal'
import React, { useState } from 'react'


   
const useNotification = () => {

   const [showModal, setShowModal] = useState (false);
   const [showModal2, setShowModal2] = useState (false);
   const [showModal3, setShowModal3] = useState (false);

   
  return (
   <>
   
        <div className="border-b border-gray-300 px-5 pt-4">
             <h1 className="text-xl font-semibold text-slate-900 mb-3">
             <Link href="" className="bg-blue-200 h-5 rounded-lg">  </Link>
                Notification               
            </h1> 
        </div> 
        <div className="p-5 pt-2"> 
         
          <h4 className="text-sm font-semibold text-slate-500 mt-2 mb-3">ProcessFlow Error Notifications</h4>  

          <div className="shadow-lg mb-5 rounded-lg">
              <div className="flex justify-start px-6 py-3  items-center border-b border-slate-100 border-solid">
                 <div className="pe-5">                  
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      
                    </label>
                  </div>
                 <div>
                   <h5 className="text-sm text-slate-800 font-bold">ProcessFlow Node Failure</h5>
                   <p className="text-xs text-slate-400 font-semibold">This error occurs when a node within a ProcessFlow fails to execute successfully. Resulting in no data sync or only partial process execution.</p>
                 </div>
              </div>

              <div className="px-6 py-3">
                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">When do you want to get notified</h5>
                        <p className="text-xs text-slate-400 font-semibold">Select a frequency and we will notify you via email</p>
                     </div>
                     <div className="w-3/6 ps-5">
                     <select id="countries" class="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-9">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                     </div>
                  </div>

                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Select ProcessFlows</h5>
                        <p className="text-xs text-slate-400 font-semibold">You can select speific ProcessFlow you want to get notified. By default you will get notified for every ProcessFlows</p>
                     </div>
                     <div className="flex justify-between items-center w-3/6 ps-5">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                        <button type="button" className="text-blue-600 bg-blue-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5  ml-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none py-2 hover:text-white" onClick={() => setShowModal(true)}>Select</button>
                     </div>
                  </div>

                  <div className="mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Recipients </h5>
                        <p className="text-xs text-slate-400 font-semibold">Add or select recipients you want to send the mail to. Use comma to add multiple</p>
                     </div>
                     <div className="flex justify-between items-center w-full mt-3">
                     <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                     </div>
                  </div>

                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 py-2" data-te-toggle="modal" data-te-target="#exampleModal" data-te-ripple-init  data-te-ripple-color="light">Save Changes</button>

              </div>
          </div>   

          <div className="shadow-lg mb-5 rounded-lg">
              <div className="flex justify-start px-6 py-3  items-center border-b border-slate-100 border-solid">
                 <div className="pe-5">                  
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      
                    </label>
                  </div>
                 <div>
                   <h5 className="text-sm text-slate-800 font-bold">Data Sync Failure</h5>
                   <p className="text-xs text-slate-400 font-semibold">This error occurs when a node within a ProcessFlow fails to execute successfully. Resulting in no data sync or only partial process execution.</p>
                 </div>
              </div>

              <div className="px-6 py-3">
                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">When do you want to get notified</h5>
                        <p className="text-xs text-slate-400 font-semibold">Select a frequency and we will notify you via email</p>
                     </div>
                     <div className="w-3/6 ps-5">
                     <select id="countries" class="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-9">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                     </div>
                  </div>

                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Select ProcessFlows</h5>
                        <p className="text-xs text-slate-400 font-semibold">This error happens when a ProcessFlow successfully executes, but certain sets of data fail to sync properly.</p>
                     </div>
                     <div className="flex justify-between items-center w-3/6 ps-5">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                        <button type="button" className="text-blue-600 bg-blue-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5  ml-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none py-2 hover:text-white" onClick={() => setShowModal2(true)}>Select</button>
                     </div>
                  </div>

                  <div className="mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Recipients </h5>
                        <p className="text-xs text-slate-400 font-semibold">Add or select recipients you want to send the mail to. Use comma to add multiple</p>
                     </div>
                     <div className="flex justify-between items-center w-full mt-3">
                     <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                     </div>
                  </div>

                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 py-2">Save Changes</button>
              </div>
          </div> 


          <div className="shadow-lg mb-5 rounded-lg">
              <div className="flex justify-start px-6 py-3  items-center border-b border-slate-100 border-solid">
                 <div className="pe-5">                  
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      
                    </label>
                  </div>
                 <div>
                   <h5 className="text-sm text-slate-800 font-bold">System and Agent Issues</h5>
                   <p className="text-xs text-slate-400 font-semibold">This error involves system-related issues like OP Agent not functioning, system installation issues, or pre-scheduled process flows failing to execute.</p>
                 </div>
              </div>

              <div className="px-6 py-3">
                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">When do you want to get notified</h5>
                        <p className="text-xs text-slate-400 font-semibold">Select a frequency and we will notify you via email</p>
                     </div>
                     <div className="w-3/6 ps-5">
                     <select id="countries" class="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-9">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                     </div>
                  </div>

                  <div className="flex justify-between items-center mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Select ProcessFlows</h5>
                        <p className="text-xs text-slate-400 font-semibold">You can select speific ProcessFlow you want to get notified. By default you will get notified for every ProcessFlows</p>
                     </div>
                     <div className="flex justify-between items-center w-3/6 ps-5">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                        <button type="button" className="text-blue-600 bg-blue-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5  ml-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none py-2 hover:text-white" onClick={() => setShowModal3(true)}>Select</button>
                     </div>
                  </div>

                  <div className="mb-5">
                     <div className="w-3/6">
                        <h5 className="text-sm text-slate-800 font-bold">Recipients </h5>
                        <p className="text-xs text-slate-400 font-semibold">Add or select recipients you want to send the mail to. Use comma to add multiple</p>
                     </div>
                     <div className="flex justify-between items-center w-full mt-3">
                     <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9" />
                     </div>
                  </div>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 py-2">Save Changes</button>

              </div>
          </div>

        </div>

       <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className='border-b border-gray-200 py-4 px-4 flex justify-between items-center'>
               <h1 className='font-bold text-sm text-slate-900 m-0 p-0'>Select the ProcessFlow(s) you want to get notified from</h1>
               <div>
                     <button className='bg-blue-600 text-white font-semibold text-sm px-6 py-2  me-8 rounded-md'>Save selections</button>                     
               </div>
            </div>
            <div className='px-4 pb-4'>
               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox"  value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

            </div>
           
       </Modal>


       <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
            <div className='border-b border-gray-200 py-4 px-4 flex justify-between items-center'>
               <h1 className='font-bold text-sm text-slate-900 m-0 p-0'>Select the ProcessFlow(s) you want to get notified from 2</h1>
               <div>
                     <button className='bg-blue-600 text-white font-semibold text-sm px-6 py-2  me-8 rounded-md'>Save selections</button>                     
               </div>
            </div>
            <div className='px-4 pb-4'>
               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

            </div>
           
       </Modal>

       <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
            <div className='border-b border-gray-200 py-4 px-4 flex justify-between items-center'>
               <h1 className='font-bold text-sm text-slate-900 m-0 p-0'>Select the ProcessFlow(s) you want to get notified from 3</h1>
               <div>
                     <button className='bg-blue-600 text-white font-semibold text-sm px-6 py-2  me-8 rounded-md'>Save selections</button>                     
               </div>
            </div>
            <div className='px-4 pb-4'>
               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

               <h6 className='text-slate-500 font-bold text-xs m-0 p-0 py-4'>ProcessFlows</h6>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>
               <div class="flex items-center mb-2">
                     <input id="default-checkbox" type="checkbox" checked value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Contact Update From HubSpot To BC365</label>
               </div>

            </div>
           
       </Modal>
       
   </>
  )
}

export default useNotification
