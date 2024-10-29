import React from 'react';

import nextLevelImage from './images/main-mobiles.svg';
import trustLogo from './images/trustvault.svg';
import feature1 from './images/feature1.svg';
import feature2 from './images/feature2.svg';
import feature3 from './images/feature3.svg';
import whatis from './images/what-is.svg';
import crypto1 from './images/crypto1.svg';
import crypto2 from './images/crypto2.svg';
import crypto3 from './images/crypto3.svg';
import crypto4 from './images/crypto4.svg';
import crypto5 from './images/crypto5.svg';
import crypto6 from './images/crypto6.svg';
import whychoose1 from './images/why-choose1.svg';
import whychoose2 from './images/why-choose2.svg';
import download from './images/new-download.png';
import downloadApp from './images/new-download-app.png';
import blockchain1 from './images/blockchain1.svg';
import blockchain2 from './images/blockchain2.svg';
import blockchain3 from './images/blockchain3.svg';
import blockchain4 from './images/blockchain4.svg';
import benefit1 from './images/benefit1.svg';
import benefit2 from './images/benefit2.svg';
import benefit3 from './images/benefit3.svg';
import buttonBlur from './images/buttonBlur.svg';
import googlePlay from './images/googlePlay.svg';
import apple from './images/apple.svg';
import zigBg from './images/zig-bg.svg'
import linearLine from './images/linear-line.svg'
import letsTalk from './images/letsTalk-shadow.svg'
import footerTel from './images/footerTel.svg'
import footerTwitter from './images/footerTwitter.svg'
import footerLinkedIn from './images/footerLinkedIn.svg'
import footerMedium from './images/footerMedium.svg'
import footerFacebook from './images/footerFacebook.svg'
import footerGithub from './images/footerGithub.svg'
import benefitShadow from './images/benefit-shadow.svg'
import downloadAppShadow from './images/download-app-shadow.svg'
import oneVector from './images/one-vector.svg'
import twoVector from './images/two-vector.svg'
import exit from './images/exit.svg'
import plus from './images/plus.svg'
import nextLevelShadow from './images/next-level-shadow.svg'
import whatsappBox from './images/whatsapp-box.png'
import emailBox from './images/email-box.png'
import linkedinBox from './images/linkedin-box.png'
import telegramBox from './images/tel-box.png'
import edge from './images/edge.png';
import mac from './images/mac.png';
import chrome from './images/chrome.png';
import brave from './images/brave.png';
import ios from './images/ios.png';
import android from './images/android.png';
import mainDownload from './images/download-app-bg.png';

const Home = () => {
    return(
  
        /* Hero Section */
        <div className="min-h-screen flex flex-col items-center justify-center bg-next-level bg-contain bg-no-repeat" >
  
  <section className="w-full bg-main-bg bg-main-custom min-h-screen bg-contain bg-no-repeat">
  <section className="w-full mx-auto sm:w-2/4 -mt-15 font-bold text-white py-14 text-center flex flex-col items-center justify-center">
    <div className="main-heading-container relative mb-7">
      <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold">
        <span className="white-text-shadow">next</span>
        <span className="text-lime-400">level</span>
      </h1>
      <p className="text-neutral-200 text-sm sm:text-lg md:text-xl font-light">
        advanced self custody technology
      </p>
    </div>

    {/* Adjusted Image */}
    <img
      src={nextLevelImage}
      alt="Next Level Technology"
      className="main-mobiles responsive-image"
    />
  </section>

  <section className="w-full px-4 text-gray-800 mb-16 bg-full-screen-shadow bg-contain bg-no-repeat" style={{ backgroundPosition: '40% 50%', backgroundSize: '40%' }}>
    <div className="text-center mb-8 py-4">
      <h1 className="text-4xl font-extrabold white-text-shadow">Key Features</h1>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      
      {/* First Card */}
      <div className="px-6 py-6 border rounded-3xl shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 flex flex-col justify-between items-start" style={{ minHeight: '280px' }}>
        <div className="flex-shrink-0">
          <img src={feature1} className="w-13 mx-auto" alt="Multi-Signature Technology" />
        </div>
        <div className="flex-1 flex flex-col justify-evenly">
          <div>
            <h2 className="text-xl font-semibold">Multi-Signature Technology</h2>
            <h4 className="font-light italic text-base md:text-md">An additional layer of security</h4>
          </div>
          <div>
            <p className="text-base md:text-md lg:text-md text-stone-300 font-light">
              Require multiple signatures for transactions, ensuring enhanced protection.
            </p>
          </div>     
        </div>
      </div>

      {/* Second Card */}
      <div className="px-6 py-6 bg-middle-feature bg-contain bg-no-repeat border rounded-3xl shadow-md flex flex-col justify-between items-start" style={{ minHeight: '280px' }}>
        <div className="flex-shrink-0">
          <img src={feature2} className="w-12 mx-auto" alt="Self-Custody" />
        </div>
        <div className="flex-1 flex flex-col justify-evenly">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Self-Custody</h2>
            <h4 className="font-light italic text-base md:text-md">Your keys, your crypto</h4>
          </div>
          <div>
            <p className="text-base md:text-md lg:text-md text-stone-300 font-light">
              Store your crypto securely, with full control over your private keys.
            </p>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="px-6 py-6 border rounded-3xl shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 flex flex-col justify-between items-start" style={{ minHeight: '280px' }}>
        <div className="flex-shrink-0">
          <img src={feature3} className="w-15 mx-auto" alt="Buy, Swap, Send and Store" />
        </div>
        <div className="flex-1 flex flex-col justify-evenly">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Buy, Swap, Send and Store</h2>
            <h4 className="font-light italic text-base md:text-md">Easily manage your crypto portfolio</h4>
          </div>
          <div>
            <p className="text-base md:text-md lg:text-md text-stone-300 font-light">
              Purchase, exchange, and transfer your cryptocurrencies, all within the app.
            </p>
          </div>       
        </div>
      </div>

    </div>
  </section>
</section>






  
        <section className="w-full bg-full-screen-shadow bg-contain bg-no-repeat" style={{ backgroundPosition: '140% 65%', backgroundSize: '60%' }}>
        <section className="w-full text-white mt-8">
          <div className="mx-auto text-center">
            <h1 className='text-2xl font-semibold py-3 relative z-10' style={{
              background: "linear-gradient(to left, #7EBF02 40%, #2F5FE5 60%)",
              transform: "rotate(0.7deg)"
            }}>TRUSTVAULT SAFESEND OTP TRANSFERS</h1>
          </div>
          <div className="mx-auto text-center">
            <h1 className='min-h-14 mt-[-55px] text-4xl font-semibold py-3' style={{
              background: "linear-gradient(to left, #2F5FE5, #7EBF02)",
              transform: "rotate(-0.9deg)"
            }}></h1>
          </div>
        </section>

  
        <section className="w-full mb-14 px-4" style={{marginTop:'100px'}}>
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
            <div className="mb-8 md:mb-0 md:w-1/3"> {/* Adjusted width for the image div */}
              <img src={whatis} alt="What is SAFESEND?" className="w-3/4 h-auto mx-auto" /> {/* Made the image smaller */}
            </div>
            <div className="md:w-2/3"> {/* Adjusted width for the text div */}
              <h2 className="text-3xl md:text-4xl font-extrabold white-text-shadow">What is SAFESEND?</h2>
              <p className="text-base font-medium mt-4 ">
                Experience a new level of security with SafeSend! Before sending large amounts, SafeSend kicks off the process with a transfer, verified by the recipient through a one-time password (OTP). This smart feature ensures your funds land exactly where you want them, eliminating the risk of crypto clipping or sending to the wrong address. Once stage 1 of the transfer is confirmed, the full amount is released with confidence. Say goodbye to transaction anxiety and hello to seamless, secure transfers with SafeSend!
              </p>
  
              <div className='relative'>
                <img src={buttonBlur} className='absolute -bottom-5 left-5'></img>
                <button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-6">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
  </section>
  
  <section className="text-white mt-8 mb-8 mx-auto w-full">
  <div 
    id='main-download' 
    className="mx-auto flex flex-wrap justify-center items-center font-semibold relative w-11/12 md:w-4/5"
    style={{
      backgroundImage: `url(${mainDownload})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire rectangle
      backgroundPosition: 'center', // Center the image
      borderRadius: '1rem', // Adding rounded corners
      padding: '2rem 0'
    }}
  >
    {/* Left div with 50% width on smaller screens */}
    <div className="w-full sm:w-1/2 md:w-1/2 text-center md:text-left">
      <h2 className="white-text-shadow text-3xl font-bold sm:text-3xl mb-4 sm:mb-6">
        Download Our App
      </h2>
      
      {/* Flex container for buttons */}
      <div className="flex items-center mt-6 gap-x-5 flex-wrap gap-y-4 justify-center md:justify-start">
        
        {/* Google Play Button */}
        <div id='google-play-div' className="bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-4 border-2 border-indigo-500 px-4 sm:px-4 py-2 rounded-3xl w-full">
          <div>
            <img src={googlePlay} alt="google-play" className="w-6 sm:w-8" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">GET IT ON</p>
            <h3 className="text-base sm:text-lg font-semibold">Google Play</h3>
          </div>
        </div>

        {/* App Store Button */}
        <div id='app-store-div' className="bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-4 border-2 border-indigo-500 px-4 sm:px-4 py-2 rounded-3xl w-full">
          <div>
            <img src={apple} alt="apple" className="w-6 sm:w-8" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">Download on the</p>
            <h3 className="text-base sm:text-lg font-semibold">App Store</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Image Section with 40% width on smaller screens */}
    <div className="relative top-5 w-full sm:w-2/5 md:w-1/2 lg:w-2/5 text-center md:text-right">
      <img src={downloadApp} alt="download-app" className="w-3/4 sm:w-full inline-block" />
    </div>
  </div>
</section>









  
  
  
  
  
  
  
  
  
  
        <section className="w-full py-16 px-4 bg-full-screen-shadow bg-no-repeat text-center" style={{ backgroundPosition: '-60% 60%', backgroundSize: '70%' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-white white-text-shadow">Supported Blockchains and Currencies</h2>
            <h3 className="text-xl font-medium text-center mb-4 text-white">Comprehensive Support for All Your Digital Assets</h3>
            <p className='font-normal text-stone-300 text-center mb-8'>Our platform supports a wide range of blockchains, cryptocurrencies, and NFTs across various protocols. Easily manage your digital assets and collectibles, all in one secure and versatile app.</p>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-center"> {/* Change to 10 columns */}
              {/* First Card (Larger) */}
              <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl p-6 flex flex-col justify-between text-white md:col-span-4"> {/* Spans 4 columns */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supported cryptocurrencies</h3>
                  <p className="text-base mb-6">
                    Description of the main feature that is larger and more detailed.
                  </p>
                </div>
                <img src={blockchain1} alt="Main Feature" className='w-64 mx-auto' />
              </div>
  
              {/* Other Three Cards */}
              <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supported token standards</h3>
                  <p className="text-base mb-6">Brief description of feature 1.</p>
                </div>
                <img src={blockchain2} alt="Feature 1" className='1/3 mx-auto' />
              </div>
  
              <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supported NFTs</h3>
                  <p className="text-base mb-6">Brief description of feature 2.</p>
                </div>
                <img src={blockchain3} alt="Feature 2" className='1/3 mx-auto' />
              </div>
  
              <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Staking Coming Soon</h3>
                  <p className="text-base mb-6">Brief description of feature 3.</p>
                </div>
                <img src={blockchain4} alt="Feature 3" className='1/3 mx-auto' />
              </div>
            </div>
          </div>
        </section>
  
  
        <section className="w-full py-16 px-4 bg-full-screen-shadow bg-no-repeat text-center" style={{ backgroundPosition: '150% 50%', backgroundSize: '60%' }}>
  <style jsx>{`
    @media (max-width: 768px) {
      .bg-benefits-bg {
        background-image: none; /* Remove background on smaller screens */
      }
      .bg-full-screen-shadow {
        background-position: 150% -7%; /* Update background position */
        background-size: 100%; /* Update background size */
      }
    }
    
    @media (min-width: 769px) {
      .bg-benefits-bg {
        background-size: 100%; /* Make background size 100% on larger screens */
      }
    }
  `}</style>
  
  <div className='mb-8 py-4'>
  <h1 className='text-5xl white-text-shadow mb-10 text-center font-extrabold'>Benefits</h1>
    </div>
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12 text-white justify-items-center bg-benefits-bg bg-cover bg-no-repeat">
      
      {/* Left Card */}
      <div className="flex flex-col items-center text-center min-h-64 h-full px-4">
        <div>
          <img src={benefit1} alt="Feature 1" className="mb-7" />
        </div>
        <div className='mt-4'>
          <h2 className="text-xl font-semibold mb-2">Enhanced Security</h2>
          <h4 className="text-base font-light mb-5 w-full sm:w-48 mx-auto">Protect your assets with multisig protection</h4>
          <p className="text-sm text-stone-300 w-full sm:w-72 mx-auto flex-grow">Mitigate the risk of unauthorized transactions and ensure secure storage.</p>
        </div>
      </div>

      {/* Middle Card with Background Image */}
      <div className="flex flex-col items-center text-center relative min-h-64 h-full px-4">
        <div className="relative"></div>
        <img src={benefitShadow} className='absolute -top-20'></img>
        <img src={benefit2} alt="Feature 2" className="mb-7 z-10" />
        <div className='mt-4'>
          <h2 className="text-xl font-semibold mb-2 z-10 relative z-index-3">Collaborative Management</h2>
          <h4 className="text-base font-light mb-5 z-10 w-full sm:w-48 mx-auto">Manage crypto with others, securely</h4>
          <p className="text-sm text-stone-300 z-10 w-full sm:w-72 mx-auto flex-grow">Multisig enables shared management of crypto assets, with built-in security.</p>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex flex-col items-center text-center min-h-64 h-full px-4">
        <div>
          <img src={benefit3} alt="Feature 3" />
        </div>
        <div className='mt-4'>
          <h2 className="text-xl font-semibold mb-2">Flexibility</h2>
          <h4 className="text-base font-light mb-5 w-full sm:w-48 mx-auto">Customize your multisig settings</h4>
          <p className="text-sm text-stone-300 w-full sm:w-72 mx-auto flex-grow">Choose the number of signatures required and assign roles for tailored security</p>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section className="w-full bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-65% -40%', backgroundSize: '75%' }}>
  <section className="w-full mt-16 mb-12 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-65% -60%', backgroundSize: '75%' }}>
    <div className="max-w-6xl mx-auto text-white">
      <div className='text-center mb-10'>
        <h2 className="text-center text-4xl font-extrabold mb-8 white-text-shadow">How it Works</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 space-y-6 lg:space-y-0">

        {/* First Card */}
        <div className="first-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto"> {/* Set to 45% on large screens */}
          <div className="relative mb-6 w-full flex justify-start">
            <img
              src={oneVector}
              className="one-vector absolute -left-12 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block" // Hidden on small screens, visible only on the largest screens
              alt="Secure Setup"
              style={{ width: '15%' }}
            />
            <div className="bg-gray-800 rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
              <h3 className="text-2xl font-semibold mb-2 sm:text-xl">Secure Setup</h3>
              <p className="text-gray-400">Create your multisig wallet by selecting the number of signatures required to approve a transaction. Invite trusted parties to join the wallet, each with their own private key securely stored on their device.</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="second-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto"> {/* Set to 45% on large screens */}
          <div className="relative mb-6 w-full flex justify-start">
            <img
              src={twoVector}
              className="two-vector absolute -left-12 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block" // Hidden on small screens, visible only on the largest screens
              alt="Approve Transactions"
              style={{ width: '15%' }}
            />
            <div className="bg-gray-800 rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
              <h3 className="text-2xl font-semibold mb-2 sm:text-xl">Approve Transactions</h3>
              <p className="text-gray-400">When a transaction is initiated, it requires approval from the designated number of signers. Once the required signatures are collected, the transaction is securely executed on the blockchain, ensuring maximum security and control.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</section>



<section className="w-full py-16 px-4 text-gray-800 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '150% 140%', backgroundSize: '60%' }}>
  {/* Future of Crypto Management */}
  <section className="w-full py-2 mt-6">
    <div className="max-w-6xl mx-auto text-white text-center">
      <h1 className="text-4xl sm:text-3xl md:text-5xl mb-4 font-extrabold white-text-shadow">
        The Future of Secure Crypto Management
      </h1>
      <h3 className="text-2xl sm:text-xl md:text-3xl mb-3">
        Key Features that Empower Your Crypto Journey
      </h3>
      <p className="text-base sm:text-sm md:text-medium font-light text-stone-300 mb-12 w-2/3 mx-auto">
        Unveil the cutting-edge features of our multisig wallet, crafted to provide top-notch security and control over your digital assets. Here are the six main features that set our wallet apart in the industry.
      </p>
    </div>

    {/* Grid for Cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      {/* First Card (Odd) */}
      <div
        className="relative px-6 py-10 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
        }}
      >
        <img src={crypto1} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Personalised dashboard</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>

      {/* Second Card (Even) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto2} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Enhanced with Multisig</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>

      {/* Third Card (Odd) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto3} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Seamless Transactions</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>
    </div>

    {/* Second Grid for Cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      {/* Fourth Card (Even) */}
      <div
        className="relative px-6 py-10 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
        }}
      >
        <img src={crypto4} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Advanced Security</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>

      {/* Fifth Card (Odd) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto5} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Custom Widgets</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>

      {/* Sixth Card (Even) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto6} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">Comprehensive Portfolio</h2>
        <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
          Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.
        </p>
      </div>
    </div>
  </section>
</section>





  
  
  
  
  
  {/*Why Choose*/}
  
  <section className="w-full py-16 px-4 text-gray-800 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-50% -40%', backgroundSize: '60%' }}>
  <section className="w-full px-4 text-gray-800">
    <div className="max-w-5xl mx-auto py-12 px-4 gap-8 text-white rounded-custom bg-gradient-to-t from-zinc-900 to-neutral-900">
      <div className="md:col-span-2 max-w-3xl mx-auto">
        <h2 id='why-choose-heading' className="text-4xl font-semibold">Why Choose Our Multisig Wallet?</h2>
        <h3 className="font-light text-stone-300 text-lg">
          Unmatched Security and Total Control for Your Digital Assets
        </h3>

        <div className="max-w-6xl mx-auto space-y-16 mt-10">
          {/* First Item */}
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 py-6 rounded-lg">
            <div className="flex-1 mb-4 mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold mb-2">Enhanced Security and Peace of Mind</h2>
              <p className="text-stone-300 mb-3">
                Our multisig wallet ensures that your digital assets are protected by requiring multiple approvals for every transaction. This reduces the risk of unauthorized access and provides you with the confidence that your funds are secure, even if one key is compromised.
              </p>

              <div className='relative'>
                <img src={buttonBlur} className='absolute -bottom-5 left-5' alt="Button Blur" />
                <button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-2">
                  Learn More
                </button>
              </div>
            </div>
            <img src={whychoose1} alt="First Image" className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
          </div>

          {/* Second Item (unchanged) */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 rounded-lg">
            <img src={whychoose2} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />
            <div className="flex-1 mt-4">
              <h2 className="text-2xl font-semibold mb-2">Full Control and Flexibility</h2>
              <p className="text-stone-300 mb-3">
                With our wallet, you maintain full control over your assets. The ability to customize the number of required signers gives you the flexibility to tailor security to your specific needs, whether you're managing personal funds, corporate assets, or a joint account.
              </p>
              <div className='relative'>
                <img src={buttonBlur} className='absolute -bottom-5 left-5' alt="Button Blur" />
                <button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

  
  
  
  
  
  
        {/* Download */}
  
        <section className="w-full bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '180% 0%', backgroundSize: '65%' }}>
  <section className="w-full py-16 text-gray-800">
    <div className="w-full mx-auto gap-8 text-white relative bg-gradient-to-t from-zinc-900 to-neutral-900 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto relative">

        <img src={linearLine} className="absolute top-0 left-0" alt="Linear Line" />

        <div className="flex flex-col md:flex-row items-center md:space-x-4 py-16 rounded-lg sm:gap-10">
          <div className="flex-1 mb-4">
            <h2 className="font-bold white-text-shadow text-3xl mb-6">Download our free safety guide</h2>
            <h3 className="text-xl font-bold mb-2 mt-2">Protect Your Digital Assets with Confidence</h3>
            <p className="font-light mb-4" style={{width: '96%'}}>
              Get instant access to our comprehensive Safety Guide and learn essential tips for securing your online presence. From password management to avoiding scams, this guide provides actionable advice to help you stay safe in the digital world. Don't leave your security to chance—download your free copy today!
            </p>

            <div className="relative">
              <img src={buttonBlur} className="absolute -bottom-4 left-24" alt="Button Blur" />
              <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-12 rounded-full hover:bg-blue-600 transition mt-2">
                Download Guide
              </button>
            </div>
          </div>
          <img src={download} alt="Download" className="w-full md:w-1/2 rounded-lg ml-4" /> {/* Added margin-left to move it right */}
        </div>

        <img src={linearLine} className="absolute right-0 bottom-0" alt="Linear Line" />
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="w-full mt-16 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-60% 0%', backgroundSize: '65%' }}>
  <div className="w-full px-4 text-gray-800">
    <div className="max-w-6xl mx-auto gap-8 text-white">
      <h1 className="text-5xl font-extrabold text-white mb-8">FAQ</h1>

      {/* FAQ Item 1 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4 items-center">
          <span className="text-custom-2xl font-semibold text-blue-600">01</span>
          <span className="text-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={exit} alt="Exit" />
        </div>
      </div>

      <hr />

      {/* FAQ Item 1 Answer */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <p className="text-stone-300 text-lg sm:text-base"> {/* Larger size for answers */}
            A multisig (multi-signature) crypto wallet is a digital wallet that requires multiple private keys to authorize a transaction. This enhances security by ensuring that more than one person or device must approve a transaction before it is executed. For instance, in a 2-of-3 multisig wallet, two out of three designated private keys must approve a transaction.
          </p>
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">02</span>
          <span className="text-xl font-bold text-white">How does a multisig wallet enhance security?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

  

      {/* FAQ Item 3 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">03</span>
          <span className="text-xl font-bold text-white">What does it mean that the wallet stores secret keys on the device’s keychain?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

    

      {/* FAQ Item 4 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">04</span>
          <span className="text-xl font-bold text-white">What are the different configurations of a multisig wallet?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>
      

      {/* FAQ Item 5 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">05</span>
          <span className="text-xl font-bold text-white">How does the keychain storage enhance security in a multisig wallet?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

      

      {/* FAQ Item 6 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">06</span>
          <span className="text-xl font-bold text-white">What happens if one of the keys in a multisig wallet is lost, especially with keychain storage?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

      

      {/* FAQ Item 7 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">07</span>
          <span className="text-xl font-bold text-white">Are multisig wallets compatible with all cryptocurrencies?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

    

      {/* FAQ Item 8 */}
      <div className="flex justify-between items-center py-6 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-custom-2xl font-semibold text-stone-300">08</span>
          <span className="text-xl font-bold text-white">How do transaction approvals work in a multisig wallet with keychain-stored keys?</span> {/* Smaller size for questions */}
        </div>
        <div className="flex items-center">
          <img src={plus} alt="Plus" />
        </div>
      </div>

      {/* FAQ Item 8 Answer */}
     

    </div>
  </div>
</section>

</section>

  
  
  
  
  
<section className="w-full py-8 px-4 text-center bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '180% 0%', backgroundSize: '65%' }}>
  <section className="w-full mt-6 px-4 text-center">
    <div className="max-w-7xl mx-auto gap-8 bg-custom-talk bg-cover bg-no-repeat mx-auto" style={{ backgroundSize: '115%', backgroundPosition: 'center top' }}>
      <div className="relative p-4">
        {/* Let's Talk Image */}
        
        {/* Border and Inner Content */}
        <div className="py-8 relative z-10">
          <h2 className="text-5xl font-extrabold white-text-shadow">Let's Talk</h2>
          <p className='text-stone-300 text-xl mt-4 mb-8'>Begin your journey into the tomorrow of fintech today.</p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative">
          {/* Card 1 */}
          <div className="flex justify-center items-center">
            <img src={whatsappBox} alt="WhatsApp" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
          </div>
          
          {/* Card 2 */}
          <div className="flex justify-center items-center">
            <img src={telegramBox} alt="Telegram" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
          </div>
          
          {/* Card 3 */}
          <div className="flex justify-center items-center">
            <img src={linkedinBox} alt="LinkedIn" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
          </div>
          
          {/* Card 4 */}
          <div className="flex justify-center items-center">
            <img src={emailBox} alt="Email" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
          </div>
        </div>
      </div>
    </div>
  </section>
</section>



<section className="bg-next-level bg-cover bg-no-repeat py-14" style={{ backgroundPosition: '-50% 5%', backgroundSize: '75%' }}>
  <style jsx>{`
    @media (max-width: 768px) {
      .bg-next-level {
        background-image: none; /* Remove background image on smaller screens */
      }
      footer {
        flex-direction: column; /* Stack footer columns on smaller screens */
      }
      .footer-right-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Two columns per row */
        gap: 16px; /* Adjust spacing between items */
      }
      .footer-info-text {
        width: 100%; /* Make text full width */
      }
    }
    @media (max-width: 640px) {
      .footer-info-text {
        width: 100% !important; /* Ensure full width on very small screens */
      }
      .footer-right-section {
       grid-template-columns: repeat(2, 1fr);
      }
    }
  `}</style>

  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Side: Heading and Paragraph */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-4 white-text-shadow text-left">Platform Support</h2>
          <p className="text-stone-300 text-left">
            Our wallet is available on iOS, Android, and Desktop, and supports all major coins and tokens.
          </p>
        </div>

        {/* Right Side: Small Cards */}
        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4">
          {/* Cards */}
          <img src={ios} alt="iOS" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
          <img src={android} alt="Android" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
          <img src={mac} alt="Mac" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
          <img src={chrome} alt="Chrome" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
          <img src={brave} alt="Brave" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
          <img src={edge} alt="Edge" className="w-[24%] md:w-[10%] max-w-[80px] mb-4" />
        </div>
      </div>
    </div>
  </div>

  <div className="max-w-7xl mt-4 px-4 text-center">
    <footer className="flex flex-col md:flex-row justify-between items-start text-left text-white py-6 rounded-lg">
      {/* Left Side: Logo and Text */}
      <div className="md:w-1/2 mb-4 md:mb-0 text-stone-300">
        <img src={trustLogo} alt="Trust Logo" />
        <p className="mb-3 mt-3 max-w-md">We are a farsighted team specializing in IT and software development for crypto business. Our company offers turn-key solutions with no hassle.</p>
        <p className='mb-3 mt-3'>Email: info@trustvault.app</p>
        <p className='max-w-lg mb-3 mt-3 footer-info-text'>
          The information provided on this website is for informational purposes only and should not be considered as financial or investment advice. Cryptocurrency transactions carry inherent risks, including the potential loss of funds. While we employ advanced security measures, such as our SafeSend feature, to protect your assets, we cannot guarantee the absolute security of your funds. Always ensure that you are using the correct wallet addresses and follow best practices for securing your private keys. By using our services, you agree to our terms and conditions and acknowledge that you are responsible for any transactions made through our platform.
        </p>
      </div>

      {/* Right Side: Footer Links */}
      <div className="md:w-1/2 flex flex-col md:flex-row justify-between gap-x-2 footer-right-section">
        <ul className="flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
          <li className="mb-2 font-bold text-white">TRUSTVAULT</li>
          <li className="mb-2">Home</li>
          <li className="mb-2">About us</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Press & Partners</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms of Service</li>
        </ul>

        <ul className="flex-1 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300 mr-4 lg:ml-[30px]">
  <li className="mb-2 font-bold text-white">DISCOVER</li>
  <li className="mb-2">Learn & Explore</li>
  <div className="flex items-center mb-2">
    <span className="mr-2">&#8226;</span>
    <p>Getting Started Guide</p>
  </div>
  <div className="flex items-center mb-2">
    <span className="mr-2">&#8226;</span>
    <p>Blockchain & Crypto 101</p>
  </div>
  <li className="mb-2">Blockchain & Crypto 101</li>
  <div className="flex items-center mb-2">
    <span className="mr-2">&#8226;</span>
    <p>FAQ</p>
  </div>
  <div className="flex items-center mb-2">
    <span className="mr-2">&#8226;</span>
    <p>Knowledge Base</p>
  </div>
  <li className="mb-2">Stay Connected</li>
  <div className="flex items-center mb-2">
    <span className="mr-2">&#8226;</span>
    <p>Tutorials</p>
  </div>
</ul>



        <ul className="md:w-1/4 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
          <li className="mb-2 font-bold text-white">FOLLOW US</li>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerTel} alt="Telegram" />
            <li className="mb-2">Telegram</li>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerTwitter} alt="X(Twitter)" />
            <li className="mb-2">X(Twitter)</li>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerLinkedIn} alt="LinkedIn" />
            <li className="mb-2">LinkedIn</li>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerMedium} alt="Medium" />
            <li className="mb-2">Medium</li>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerFacebook} alt="Facebook" />
            <li className="mb-2">Facebook</li>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <img src={footerGithub} alt="Github" />
            <li className="mb-2">Github</li>
          </div>
        </ul>
      </div>
    </footer>
  </div>
</section>









      </div>
  
  
    );
  }

  
  export default Home;