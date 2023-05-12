import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://tejashree198.github.io/Portfolio/", "_blank")
          }
          className='black_btn'
        >
          About Me
        </button>
      </nav>

      <h1 className='head_text'>
        Article Summarization <br className='max-md:hidden' />
        <span className='purple_gradient '>SummerEase</span><br></br>
        {/* <span className='orange_gradient '>OpenAI GPT-4</span> */}
      </h1>
      <h2 className='desc'>
        Get The Summery of Webpages within Minutes!!<br></br>
        Accurate | Short | On-Topic
      </h2>
    </header>
  );
};

export default Hero;
