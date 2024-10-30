import React from 'react';
import whychoose1 from './images/why-choose1.svg';
import whychoose2 from './images/why-choose2.svg';
import buttonBlur from './images/buttonBlur.svg';
import googlePlay from './images/googlePlay.svg';
import apple from './images/apple.svg';
import downloadAppShadow from './images/download-app-shadow.svg'
import downloadApp from './images/download-app.svg';
import blockchain1 from './images/blockchain1.svg';
import blockchain2 from './images/blockchain2.svg';
import blockchain3 from './images/blockchain3.svg';
import blockchain4 from './images/blockchain4.svg';
import exit from './images/exit.svg'
import plus from './images/plus.svg'
import correct from './images/correct.svg'
import redLine from './images/red-line.svg'
import greenLine from './images/green-line.svg'
import redExit from './images/red-exit.svg'
import whatsappBox from './images/whatsapp-box.png'
import emailBox from './images/email-box.png'
import linkedinBox from './images/linkedin-box.png'
import telegramBox from './images/tel-box.png'
import email from './images/email.svg';
import edge from './images/edge.png';
import mac from './images/mac.png';
import chrome from './images/chrome.png';
import brave from './images/brave.png';
import ios from './images/ios.png';
import android from './images/android.png';
import trustLogo from './images/trustvault.svg';
import footerTel from './images/footerTel.svg'
import footerTwitter from './images/footerTwitter.svg'
import footerLinkedIn from './images/footerLinkedIn.svg'
import footerMedium from './images/footerMedium.svg'
import footerFacebook from './images/footerFacebook.svg'
import footerGithub from './images/footerGithub.svg'
import introSafeSend from './images/intro.svg'




const SafeSend = () => {
    return (

        <section className="w-full px-4">

            <section className="w-full px-4">
                <div className="max-w-6xl mx-auto px-12  gap-8 text-white rounded-custom">
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold mb-2 w-1/2">Introducing <span className='text-lime-400'>SafeSend</span> <span className='text-3xl'>by trustvault</span></h2>
                            <h3 className='text-xl font-bold mb-4 mt-4'>Secure and Stress-Free Crypto Transfers</h3>
                            <p className="text-stone-300 mb-3">
                                Say goodbye to transaction anxiety and hello to seamless, secure transfers with SafeSend, the innovative feature that protects your crypto assets.                            </p>

                        </div>
                        <img src={introSafeSend} alt="First Image" className="w-full md:w-1/2 rounded-lg" />
                    </div>

                </div>
            </section>

            <div className="max-w-6xl mx-auto  gap-8 text-white rounded-custom">
                <div className="md:col-span-2 max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold">Why Choose Our Multisig Wallet?</h2>
                    <h3 className="font-light text-stone-300 text-lg">
                        Unmatched Security and Total Control for Your Digital Assets
                    </h3>

                    <div className="max-w-6xl mx-auto space-y-16 mt-10">
                        <div className="flex flex-col md:flex-row items-start md:space-x-8 py-6 rounded-lg">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-4">How SafeSend Works</h2>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full h-9 w-9 bg-lime-400 py-2 px-2 text-center flex items-center justify-center'>
                                        <p className='text-black font-bold text-lg'>1</p>
                                    </div>
                                    <h3 className='text-lg font-bold'>Initiate Transfer</h3>

                                </div>
                                <p className="text-stone-300 mb-3 mt-1">
                                    Enter the recipient's address and amount.</p>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full h-9 w-9 bg-lime-400 py-2 px-2 text-center flex items-center justify-center'>
                                        <p className='text-black font-bold text-lg'>1</p>
                                    </div>
                                    <h3 className='text-lg font-bold'>Verification</h3>

                                </div>
                                <p className="text-stone-300 mb-3 mt-1">
                                    SafeSend sends a small test transfer to verify the recipient's address.</p>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full h-9 w-9 bg-lime-400 py-2 px-2 text-center flex items-center justify-center'>
                                        <p className='text-black font-bold text-lg'>1</p>
                                    </div>
                                    <h3 className='text-lg font-bold'>One-Time Password (OTP):</h3>

                                </div>
                                <p className="text-stone-300 mb-3 mt-1">
                                    The recipient receives an OTP to confirm the transfer.</p>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full h-9 w-9 bg-lime-400 py-2 px-2 text-center flex items-center justify-center'>
                                        <p className='text-black font-bold text-lg'>1</p>
                                    </div>
                                    <h3 className='text-lg font-bold'>Confirmation</h3>

                                </div>
                                <p className="text-stone-300 mb-3 mt-1">
                                    Once verified, the full amount is released.</p>
                            </div>

                            <img src={whychoose1} alt="First Image" className="w-full md:w-1/2 rounded-lg" />
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:space-x-8 py-6 rounded-lg">
                            <img src={whychoose2} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mt-4 mb-4">Full Control and Flexibility</h2>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto mt-10">
                        <div className="flex flex-col md:flex-row items-start md:space-x-8 rounded-lg">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-4">Enhanced Security and
                                    Peace of Mind</h2>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>
                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>


                                <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p> <p className="text-stone-300 mb-1">
                                    - Eliminates Crypto Clipping: No more lost funds due to incorrect addresses.
                                </p>
                            </div>
                            <img src={whychoose1} alt="First Image" className="w-full md:w-1/2 rounded-lg" />
                        </div>


                    </div>
                </div>
                <div className="flex gap-x-4 mt-8 justify-center relative">
                    <button className="relative rounded-3xl px-4 py-2 lg:px-8 lg:py-3 border-2 border-gray-500">
                        Download
                        {/* <img src={roundedDownload} className='absolute bottom-2 right-2 w-6 h-6' alt="Download" /> */}
                    </button>
                    <button className="text-white hover:text-gray-300 rounded-3xl px-4 py-2 lg:px-8 lg:py-3 border-2 border-indigo-500">Get in touch</button>

                </div>
            </div>

            <section className="w-full mt-16 mb-16 ">
  <div className="max-w-7xl flex flex-nowrap small-wrap justify-between mx-auto px-1 gap-8 text-white">
    <div className="container w-full md:w-1/2">
      <div className="w-full flex items-center justify-evenly">
        <img src={redExit} alt="Exit Icon" />
        <h3 className="text-xl font-bold">Common Problems in Crypto Payments</h3>
        <img src={plus} alt="Plus Icon" />
      </div>

      <div className="w-full bg-gray-800 py-6 px-6 border-2 border-white relative mt-4" style={{ borderRadius: '36px' }}>
        <img src={greenLine} style={{ position: 'absolute', right: '-4px', top: '110px' }} />
        <h3 className="text-xl font-bold mt-5">Crypto Clipping</h3>
        <p className="font-normal mt-1">Accidental clipping of malware infected addresses when copying and pasting can lead to funds being sent to the wrong recipient, resulting in a permanent loss of assets.</p>
        <h3 className="text-xl font-bold mt-5">Incorrect Address Sends</h3>
        <p className="font-normal mt-1">Sending funds to an incorrect or invalid address can be catastrophic, with no way to recover the lost cryptocurrency.</p>
        <h3 className="text-xl font-bold mt-5">High-Stress Transactions</h3>
        <p className="font-normal mt-1">Sending large amounts can be nerve-wracking, with the fear of making a mistake that could cost thousands or even millions in assets.</p>
        <h3 className="text-xl font-bold mt-5">Lack of Verification</h3>
        <p className="font-normal mt-1">Many wallets don't offer a confirmation step before finalizing transactions, increasing the risk of errors and misdirected funds.</p>
        <h3 className="text-xl font-bold mt-5">Irreversible Errors</h3>
        <p className="font-normal mt-1">Once a crypto transaction is sent, it’s irreversible. This leaves no room for correcting mistakes or retrieving funds sent to the wrong address.</p>
      </div>
    </div>

    <div className="container w-full md:w-1/2">
      <div className="w-full flex items-center justify-evenly">
        <img src={redExit} alt="Exit Icon" />
        <h3 className="text-xl font-bold">Common Problems in Crypto Payments</h3>
        <img src={plus} alt="Plus Icon" />
      </div>

      <div className="w-full bg-gray-800 py-6 px-6 border-2 border-stone-300 relative mt-4" style={{ borderRadius: '36px' }}>
        <img src={redLine} style={{ position: 'absolute', left: '-4px', top: '110px' }} />
        <h3 className="text-xl font-bold mt-5">Crypto Clipping</h3>
        <p className="font-normal mt-1">Accidental clipping of malware infected addresses when copying and pasting can lead to funds being sent to the wrong recipient, resulting in a permanent loss of assets.</p>
        <h3 className="text-xl font-bold mt-5">Incorrect Address Sends</h3>
        <p className="font-normal mt-1">Sending funds to an incorrect or invalid address can be catastrophic, with no way to recover the lost cryptocurrency.</p>
        <h3 className="text-xl font-bold mt-5">High-Stress Transactions</h3>
        <p className="font-normal mt-1">Sending large amounts can be nerve-wracking, with the fear of making a mistake that could cost thousands or even millions in assets.</p>
        <h3 className="text-xl font-bold mt-5">Lack of Verification</h3>
        <p className="font-normal mt-1">Many wallets don’t offer a confirmation step before finalizing transactions, increasing the risk of errors and misdirected funds.</p>
        <h3 className="text-xl font-bold mt-5">Irreversible Errors</h3>
        <p className="font-normal mt-1">Once a crypto transaction is sent, it’s irreversible. This leaves no room for correcting mistakes or retrieving funds sent to the wrong address.</p>
      </div>
    </div>
  </div>
</section>





<section className="text-white mt-8 mb-8 mx-auto w-full">
  <div 
    id="main-download" 
    className="pt-4 mb-8 mx-auto flex flex-wrap justify-center items-center font-semibold relative w-11/12"
    style={{
      background: 'linear-gradient(180deg, #1a1a1a, #0d0d0d)',
      borderRadius: '1rem',
      position: 'relative',
      zIndex: 1,
    }}
  >
    {/* Shadow Pseudo-Element with New Gradient Background */}
    <div style={{
      content: '""',
      position: 'absolute',
      inset: '143px 0px 0px',
      borderRadius: '1rem',
      zIndex: -1,
      background: 'linear-gradient(rgba(4, 4, 4, 0) 0%, rgba(4, 9, 4, 0.6) 30%, rgb(4, 4, 4) 100%)',
      opacity: 0.5,
    }}></div>

    {/* Main Content */}
    <div className="w-full sm:w-1/2 md:w-[46%] flex flex-col centered-text">
      <h2 className="white-text-shadow text-3xl font-bold">
        Download Our App
      </h2>
      
      {/* Flex container for buttons */}
      <div className="buttons-container w-full flex justify-center items-center mt-4 gap-x-5 gap-y-4 flex-wrap md:flex-nowrap">
        
        {/* Google Play Button */}
        <div 
          id="google-play-div" 
          className="bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-2 border-2 border-indigo-500 px-3 py-1 rounded-3xl lg:w-[47%] md:w-[47%] w-80"
        >
          <div>
            <img src={googlePlay} alt="google-play" className="w-5 sm:w-6" />
          </div>
          <div className="text-left">
            <p className="text-xs font-medium">GET IT ON</p>
            <h3 className="text-sm sm:text-base font-semibold">Google Play</h3>
          </div>
        </div>

        {/* App Store Button */}
        <div 
          id="app-store-div" 
          className="bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-2 border-2 border-indigo-500 px-3 py-1 rounded-3xl lg:w-[47%] md:w-[47%] w-80"
        >
          <div>
            <img src={apple} alt="apple" className="w-5 sm:w-6" />
          </div>
          <div className='justify-center'>
            <p className="text-xs font-medium text-center">Download on the</p>
            <h3 className="text-sm sm:text-base font-semibold text-center">App Store</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Image Section with responsive settings */}
    <div className="download-img-container w-full sm:w-2/5 md:w-2/5 lg:w-2/5 text-center md:text-right mt-6">
      <img 
        src={downloadApp} 
        alt="download-app" 
        className="w-3/4 h-auto max-w-xs mx-auto" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
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
    <div className="max-w-6xl mx-auto mb-12">
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

  <div className="max-w-7xl mt-6 px-4 text-center mx-auto">
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

        </section>


    );
};

export default SafeSend;
