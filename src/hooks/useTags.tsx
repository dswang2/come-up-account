import { useEffect, useRef, useState } from "react";
import { createId } from "../lib/createId";
import { TagEntity } from "../types/Tag";
import { useUpdate } from "./useUpdate";

const useTags = () => {
    const [tags, setTags] = useState<TagEntity[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem("tags")||'[]');
        if(localTags.length === 0 ){
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' }
            ];
        }
        setTags(localTags);
    },[]); // 依赖数据为空数组时，表示初始化
    useUpdate(() => {
        window.localStorage.setItem("tags", JSON.stringify(tags));
    },[tags]);
    const updateTag = (id: number, name: string) => {
        setTags(tags.map((t) => {
            return t.id === id ? { id, name } : t;
        }));
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    }
    const onAddTag = () => {
        const tagName = window.prompt("新标签名称为");
        if (tagName !== null) {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    }
    const getTagById = (id: number): TagEntity => {
        return tags.filter((t) => t.id === id)[0];
    }
    return { tags, onAddTag, setTags, getTagById, updateTag, deleteTag};
}

export {useTags};