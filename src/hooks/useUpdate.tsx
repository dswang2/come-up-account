import { useEffect, useRef } from "react";

const useUpdate = (callback: () => void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });
    useEffect(() => {
        if (count.current > 1) {
            callback();
        }
    }, deps); // tags引用更新时触发，这也就要求，更新tags，不能只更新值，而是要更新tags的地址
}

export {useUpdate};