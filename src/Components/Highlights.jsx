import { useMediaQuery } from 'react-responsive';
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const Highlights = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top"
      },
      opacity: 1,
      y: 0,
      stagger: 0.5,
      ease: "power1.out",
      duration: 1,
    })
  }
  )


  return (
    <section id="highlights">
      <h2>Theres never been a better time to upgrade</h2>
      <h3>Here's what you get with the new MacBook Pro</h3>

      <div className='masonry'>
        <div className='left-column'>
          <div>
            <img src="laptop.png" alt="Laptop" />
            <p>Fly through demanding tasks up to 10x faster</p>
          </div>
          <div>
            <img src="sun.png" alt="Sun" />
            <p>A stunning Liquid Retina XDR display</p>
          </div>
        </div>

         <div className='right-column'>
          <div className='apple-gradient'>
            <img src="/ai.png" alt="AI" />
            <p>Built for <br /> <span>apple intelligence.</span></p>
          </div>
          <div>
            <img src="battery.png" alt="Battery" />
            <p><span className='green-gradient'>{""}Up to 20 hours of battery life.{""}</span> 
            <span className='text-dark-100'>{""}(Upto 30 hours on charge){""}</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights