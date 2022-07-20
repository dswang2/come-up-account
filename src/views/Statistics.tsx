import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Category } from "../types/Category";
import { CategorySection } from "./money/CategorySection";

const Statistics = () => {
    const [category,setCategory] = useState<Category>('+');
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={(value: Category) => {
                                     setCategory(value);
                                 }}/>
            </CategoryWrapper>
        </Layout>
    );
}
const CategoryWrapper = styled.div`
  background: white;
`
export { Statistics };