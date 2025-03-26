import React ,  { useEffect, useRef, useState } from "react";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCount(target);
                    } else {
                        setCount(0); // Reset count when out of view
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target]);

    const animateCount = (end) => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // Adjust for frame rate

        const updateCounter = () => {
            start += increment;
            if (start < end) {
                setCount(Math.ceil(start));
                requestAnimationFrame(updateCounter);
            } else {
                setCount(end);
            }
        };

        updateCounter();
    };

    return (
        <div ref={counterRef} className="text-4xl font-bold text-blue-600">
            {count}
        </div>
    );
};

const CounterSection = () => {
    return (
        <div className=" bg-gray-100 mt-7">
            <div className=" bg-white  text-center">
                <h2 className="text-2xl font-semibold">Our Statistics</h2>
                <div className="flex justify-center space-x-10">
                    <Counter target={500} />
                    <Counter target={1500} />
                    <Counter target={10000} />
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
