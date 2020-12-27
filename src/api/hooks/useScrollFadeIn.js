import { useCallback, useEffect, useRef } from 'react';

export const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
    const dom = useRef();

    const handleDirection = (name) => {
        switch (name) {
            case 'up':
                return 'translate3d(0, 50%, 0)';
            case 'down':
                return 'translate3d(0, -50%, 0)';
            case 'left':
                return 'translate3d(50%, 0, 0)';
            case 'right':
                return 'translate3d(-50%, 0, 0)';
            default:
                return;
        };
    };

    const handleScroll = useCallback(
        ([entry]) => {
            const { current } = dom;
            if (entry.isIntersecting) {
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `${duration}s`;
                current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
                current.style.transitionDelay = `${delay}s`;
                current.style.opacity = 1;
                current.style.transform = 'translate3d(0, 0, 0)';
            };
        },
        [delay, duration],
    );

    useEffect(() => {
        let observer;
        const { current } = dom;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
            observer.observe(current);
        }

        return () => observer && observer.disconnect();
    }, [handleScroll]);

    return {
        ref: dom,
        style: {
            opacity: 0,
            transform: handleDirection(direction),
        },
    };
};

// 위에있는거 보고 참조해서 만든 내가만든 소스 
    // 내가 만든게 메모리를 더 많이쓴다.
    // API가 최고다. 그러므로 API 쓰자
    // const handleScroll = () => {
    //     const { current } = dom;
    //     const ElentPosTop = current.getBoundingClientRect().top;
    //     const windowHeight = window.innerHeight;

    //     if (ElentPosTop - windowHeight <= 0) {
    //         current.style.transitionProperty = 'opacity transform';
    //         current.style.transitionDuration = '1s';
    //         current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
    //         current.style.transitionDelay = '0s';
    //         current.style.opacity = 1;
    //         current.style.transform = 'translate3d(0, 0, 0)';
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    // }, [handleScroll]);