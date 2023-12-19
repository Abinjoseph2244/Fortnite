// src/App.js

import React from 'react';
import './App.css';
import imageSrc from './fort-1280.jpg';
import imageSrc1 from './img2.jpg';
import CloseButton from './CloseButton'; // Import the CloseButton component


function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
            <CloseButton />

      <div className="section" style={{ backgroundColor: 'black' }}>
        <p className='title'>
          Epic Games: An American Video Game And Software Developer <br />And Publisher Based In Cary, North Carolina.
        </p>
        <br /><br />
        <img
          src={imageSrc}
          className='main'
          alt="Placeholder Image"
        />
        <br /><br /><br />
        <p>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build,<br /> experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie<br /> survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and<br /> your friends. Find it all in Fortnite Drop In
        </p>
        <br />
        <button className="button">Visit Website</button>
      </div>

      <div className="imageSection" style={{ backgroundColor: 'black' }}>
        <div>
          <img
            src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1920x1080/750x500/filters:focal(960x540:961x541):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/11630099/Fortnite_20180630171046.jpg"
            alt="Small Image 1"
          />
          <p className="p1">Explore Large, Destructible Environments Where No Two Games Are Ever The Same
</p>
        </div>

        <div>
          <img src={imageSrc1} alt="Small Image 2" />
          <p className="p1">Team Up With Friends By Sprinting. Climbing And Smashing Your Way To Earn Your Victory Royale</p>
        </div>

        <div>
          <img
            src="https://www.techwar.gr/wp-content/uploads/2023/10/rumor-fortnite-removing-zero-build.jpg"
            alt="Small Image 3"
          />
          <p className="p1">Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres</p>
        </div>
      </div>
      <h1>Our Contribution</h1>

<p className='cons'> Our core aflering extends beyond mere prollt generation, we emphasize the growth and active involvement of our user<br /> community. Collaborating with us re represents an investment, rather than amare expenditure. Our dedication to<br /> providing distinctive digital interactions guarantees unparalleled benefits for our clientele</p>






<div className="imageSection" style={{ backgroundColor: 'black' }}>
        <div>
         <p className='big'>5M</p>
          <p className="p1">Daily User Engagements

</p>
        </div>

        <div>
        <p className='big'>$500K</p>
          <p className="p1">Revenue Surge for an Platform</p>
        </div>

        <div>
        <p className='big'>10X</p>
          <p className="p1">ROAS on our marketing campaigns</p>
        </div>
      </div>

      <h1>Interested In Delving Deeper Into The Project?
</h1>
<p className='last'>If you'd like to explore further details about our initiatives or any of our<br /> affiliated brands, don't hesitate to connect. You can reach out to us via<br /> email at hello@abc.com or give us a call at <b>+91 480 20802730</b></p>


<div className="imageSection" style={{ backgroundColor: 'black' }}>

        <div>
        <button className="button2">Ring us on Skype</button>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button">Contact Us</button>

        </div>
      </div>

<br /><br /><br /><br />
    </div>
  );
}

export default App;
