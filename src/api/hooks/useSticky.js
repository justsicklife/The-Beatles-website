import { useCallback, useEffect, useRef } from 'react';

const useNavLogoSticky = (minPosYLimit = 0, maxPosYLimit, beforeStyle, afterStyle) => {
    const dom = useRef();

    const scrollEvent = useCallback(
        () => {
            const { current } = dom;
            if (window.scrollY !== 0) {
                current.style.width = `${afterStyle.width}px`;
                current.style.height = `${afterStyle.height}px`;
                return
            }
            current.style.width = `${beforeStyle.width}px`;
            current.style.height = `${beforeStyle.height}px`;
        },
        [minPosYLimit, maxPosYLimit, beforeStyle, afterStyle]
    )

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);
        window.addEventListener('road', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
            window.removeEventListener('road', scrollEvent);
        }
    }, [scrollEvent]);

    return {
        ref: dom,
        style: window.scrollY <= maxPosYLimit ? {
            width: `${beforeStyle.height}px`,
            height: `${beforeStyle.height}px`,
        } : {
                width: `${afterStyle.height}px`,
                height: `${afterStyle.height}px`,
            }
    };
};

export default useNavLogoSticky;