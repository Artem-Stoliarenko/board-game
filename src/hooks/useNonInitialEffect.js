import { useEffect, useRef } from 'react';

export const useNonInitialEffect = (effect, deps = []) => {
    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
