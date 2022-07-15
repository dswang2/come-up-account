import { useState } from "react";
import { createId } from "../lib/createId";
import { TagEntity } from "../types/Tag";

const defaultTags = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' }
];
const useTags = () => {
    const [tags, setTags] = useState<TagEntity[]>(defaultTags);
    const onAddTag = () => {
        const tagName = window.prompt("新标签名称为");
        if (tagName !== null) {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    }
    const getTagById = (id: number): TagEntity => {
        return tags.filter((t) => t.id === id)[0] || {};
    }
    return { tags, onAddTag, setTags, getTagById };
}

export {useTags};