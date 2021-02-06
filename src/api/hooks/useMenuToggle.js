import { useCallback, useEffect, useRef } from "react";

const useMenuToggle = (direction = "up") => {
    const menu = useRef();

    const handleDirection = (name) => {
        switch (name) {
            case 'up':
                return 'translate3d(0, 100%, 0)';
            case 'down':
                return 'translate3d(0, -100%, 0)';
            case 'left':
                return 'translate3d(100%, 0, 0)';
            case 'right':
                return 'translate3d(-100%, 0, 0)';
            default:
                return;
        };
    };

    const menuSlideIn = useCallback(
        () => {
            const { current } = menu;
            if (current.style.opacity === "0") {
                current.style.opacity = "1";
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `0.5s`;
                current.style.transitionDelay = `0.1s`;
                current.style.transform = 'translate3d(0, 0, 0)';
                return
            }
            current.style.opacity = "0";
            current.style.transitionProperty = 'all';
            current.style.transitionDuration = `0.5s`;
            current.style.transitionDelay = `0.1s`;
            current.style.transform = handleDirection(direction);

        },
        [direction]
    )

    const buttonToggle = () => {
        menuSlideIn();
    }

    return {
        button: {
            onClick: buttonToggle
        },
        menu: {
            ref: menu,
            style: {
                opacity: 0,
                transform: handleDirection(direction),
            },
        },
    }
}
export default useMenuToggle;