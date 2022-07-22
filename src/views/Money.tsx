import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { CategorySection } from "./money/CategorySection";
import { NotesSection } from "./money/NotesSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagsSection } from "./money/TagsSection";
import { Category } from "../types/Category";
import { useRecords } from "../hooks/useRecords";

const Money = () => {
    const defaultRecord = {
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    };
    const [selected, setSelected] = useState(defaultRecord);
    console.log("ddsw", selected);
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    }
    const {addRecord} = useRecords();
    const submit = () => {

        if(addRecord(selected)){
            alert("保存成功");
            setSelected(defaultRecord);
        };
    }
    return (
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds}
                         onChange={(value: number[]) => onChange({ tagIds: value })}/>
            <NotesSection value={selected.note}
                          onChange={(value: string) => onChange({ note: value })}/>
            <CategoryWrapper><CategorySection value={selected.category}
                                              onChange={(value: Category) => onChange({ category: value })}/></CategoryWrapper>
            <NumberPadSection value={selected.amount}
                              onChange={(value: number) => onChange({ amount: value })}
                              onOk={submit}/>
        </MyLayout>
    );
}

const CategoryWrapper = styled.div`
  background: #c4c4c4;;
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export {Money};