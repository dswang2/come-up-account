import { useEffect, useRef, useState } from "react";
import { createId } from "../lib/createId";
import { TagEntity } from "../types/Tag";

const useTags = () => {
    const [tags, setTags] = useState<TagEntity[]>([]);
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    })
    useEffect(() => {
        setTags(JSON.parse(window.localStorage.getItem("tags")||'[]'));
    },[]); // 依赖数据为空数组时，表示初始化
    useEffect(() => {
        if(count.current > 1){
            window.localStorage.setItem("tags", JSON.stringify(tags));
        }
    },[tags]); // tags引用更新时触发，这也就要求，更新tags，不能只更新值，而是要更新tags的地址
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