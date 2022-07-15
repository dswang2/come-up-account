import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { CategorySection } from "./money/CategorySection";
import { NotesSection } from "./money/NotesSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagsSection } from "./money/TagsSection";
import { Category } from "./money/CategorySection/Category";

const Money = () => {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: '0'
    });
    console.log("ddsw", selected);
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={(value: number[]) => onChange({ tagIds: value })}/>
            <NotesSection value={selected.note}
                          onChange={(value: string) => onChange({ note: value })}/>
            <CategorySection value={selected.category}
                             onChange={(value: Category) => onChange({ category: value })}/>
            <NumberPadSection value={selected.amount}
                              onChange={(value: string) => onChange({ amount: value })}/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export {Money};