import styled from "styled-components";
import { Layout } from "../components/Layout";
import { CategorySection } from "./money/CategorySection";
import { NotesSection } from "./money/NotesSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagsSection } from "./money/TagsSection";

const Money = () => {
    return (
        <MyLayout>
            <TagsSection/>
            <NotesSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export {Money};