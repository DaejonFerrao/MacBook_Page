import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap';

const Showcase = () => {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to(".mask img", {
                transform: "scale(1.1)"
            }).to(".content", {
                opacity: 1,
                y: 0,
                ease: "power1.in",
            });
        }
    }, [isTablet]);

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>M4 Ultra</h2>

                        <div className='space-y-5 mt-7 pe-10'>
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intellegence on MacBook Pro, delivering up to 3.5x faster performance than the previous generation, and up to 18 hours of battery life. With M5, you can edit 4K video, build apps, and play games with ease.
                            </p>
                            <p>
                                Experience the power of M4 on MacBook Pro, and take your creativity to new heights.
                            </p>
                            <p className='text-primary'>
                                Learn more about M4 Chip and MacBook M4, M4 Pro, M4 Max.
                            </p>
                        </div>
                    </div>

                        <div className='max-w-3xs space-y-14'>
                            <div className='space-y-2'>
                                <p>Up to</p>
                                <p>6x Faster</p>
                                <p>Pro rendering performance then M4</p>
                            </div>
                            <div className='space-y-2'>
                                <p>Up to</p>
                                <p>3x Faster</p>
                                <p>CPU performance then M4</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Showcase