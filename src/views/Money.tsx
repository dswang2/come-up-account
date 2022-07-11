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
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    console.log("ddsw", selected);
    return (
        <MyLayout>
            <TagsSection value={selected.tags}
                         onChange={
                             (value: string[]) => {
                                 setSelected({ ...selected, tags: value });
                             }
                         }/>
            <NotesSection value={selected.note}
                          onChange={
                              (value: string) => {
                                  setSelected({ ...selected, note: value });
                              }
                          }/>
            <CategorySection value={selected.category}
                             onChange={
                                 (value: Category) => {
                                     setSelected({ ...selected, category: value });
                                 }
                             }/>
            <NumberPadSection value={selected.amount}
                              onChange={
                                  (value: number) => {
                                      setSelected({ ...selected, amount: value });
                                  }
                              }/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export {Money};