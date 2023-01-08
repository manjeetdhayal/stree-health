import React from 'react';
import { useState } from 'react';
import './hero.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [questionInput, setQuestionInput] = useState("");

  const modalOpen = () => {
    const modal = document.getElementById('defaultModal');
    modal.style.display = 'flex';
  }
  
  const modalClose = () => {
    const modal = document.getElementById('defaultModal');
    modal.style.display = 'none'
  }

  const submitQuestion = async () => {
    const response = await fetch('https://stree-health-production.up.railway.app/api/qna/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: questionInput })
    });
    const json = await response.json();
    if (response.status === 200) {
      toast.success("Your question has been submitted successfully!");
      setQuestionInput("");
      modalClose();

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    else if (response.status === 500) {
      toast.error("Internal Server Error!");
    }
    else if (response.status === 400) {
      toast.error("Your question should be at least 10 characters long.");
    }
  }


  return (
    <>
    <div>
      <div className="menu">
        <div className="container flex">
          {/* Mobile Button */}
          <div className="mobile-btn">
            <ion-icon name="grid"></ion-icon>
          </div>
          <div className="logo">
            <img
            className='rounded-full'
              src="/SHlogo.png"
              alt=""
            />
          </div>

          <ul className="nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#why-us">About us</a></li>
            <li className="nav-item"><a href="#explore">Blogs</a></li>
            <li className="nav-item"><a href="#discount">Contact us</a></li>
          </ul>

          <a href="#" className="btn">Register</a>
        </div>
      </div>




      <header className="header">
        <div className="container flex">
          <div className="text">
            <h1 className="mb flex">
              Health of&nbsp;<br />
              <span>Women</span>
            </h1>

            <p className="hero-section-text mb m-auto w-[80%]">
              Women's health is important to everyone. A woman's health issues and conditions are unique, ranging from menopause and pregnancy to gynecological conditions like fibroids and endometriosis. Only women suffer from these health issues. There are other conditions that affect men as well, although they have a great deal more impact on women.
            </p>

            <button onClick={modalOpen} className="btn mt ml-[9%]">Ask Question Anonymously</button>
          </div>

          <div className="visual">
            <img
              src="3d-char.png"
              alt=""
              width={700}
            />
          </div>
        </div>
      </header>
    </div>



    <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />



    {/* Modal */}

    <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="bg-[#000000a8] justify-center items-center fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Ask Question
                  </h3>
                  <button onClick={modalClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                  <input value={questionInput} onChange={(e) => setQuestionInput(e.target.value)} className='w-[100%] rounded-lg p-2 my-4 bg-[#0a1b18] text-white' type="text" placeholder='Enter your question here' />
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button onClick={submitQuestion} data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  <button onClick={modalClose} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Hero