import { useState } from "react";

export const useAnimate = () => {
    const [value, setValue] = useState();

    const setAnimation = (effect) => {
        setValue(effect);
        setTimeout(() => {
            setValue('');
        }, 300);
    }

    return [value, setAnimation];
}
