import { useState } from "react";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([
        { id: 1, name: '衣' },
        { id: 2, name: '食' },
        { id: 3, name: '住' },
        { id: 4, name: '行' },
        { id: 5, name: '食' },
        { id: 6, name: '住' },
        { id: 7, name: '行' },
        { id: 8, name: '食' },
        { id: 9, name: '住' },
        { id: 10, name: '行' },
        { id: 12, name: '食' },
        { id: 13, name: '住' },
        { id: 14, name: '行' },
        { id: 15, name: '食' },
        { id: 16, name: '住' },
        { id: 17, name: '行' },
        { id: 18, name: '食' },
        { id: 19, name: '住' },
    ]);
    return { tags, setTags };
}

export {useTags};