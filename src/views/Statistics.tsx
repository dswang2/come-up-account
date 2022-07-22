import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Category } from "../types/Category";
import { CategorySection } from "./money/CategorySection";
import { useRecords } from "../hooks/useRecords";
import { useTags } from "../hooks/useTags";
import dayjs from 'dayjs'
import { RecordEntity } from "../types/RecordEntity";

const Statistics = () => {
    const [category, setCategory] = useState<Category>('+');
    const { records } = useRecords();
    const { getName } = useTags();
    const selectedRecords = records.filter(r => r.category === category);
    const hash: { [key: string]: RecordEntity[] } = {};
    selectedRecords.map((item) => {
        const key = dayjs(item.createAt).format("YYYY年MM月DD日");
        if (key in hash) {
            hash[key].push(item);
        } else {
            hash[key] = [item];
        }
        return item;
    });
    // hash 的顺序无法保证
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={(value: Category) => {
                                     setCategory(value);
                                 }}/>
            </CategoryWrapper>
            <div> {array.map(([date, dayRecords]) =>
                <div key={date}>
                    <DayItem>{date}</DayItem>
                    {dayRecords.map((item) => {
                        return (<Item key={item.createAt}>
                            <div className="tags oneLine">
                                {item.tagIds
                                    .map(tagId => <span
                                        key={tagId}>{getName(tagId)}</span>)
                                    // [span, span, span]
                                    // [span, ',', span, ',', span]
                                    .reduce((previousValue, currentValue, currentIndex, array1) => {
                                        // return previousValue.concat(currentIndex < array.length - 1 ? [currentValue, '，'] : [currentValue]);
                                        return previousValue.concat(currentIndex < array.length - 1 ? [currentValue, '，'] : [currentValue]);
                                    }, [] as ReactNode[])
                                    // .reduce((result, span, index, array) => {
                                    //     return result.concat(index < array.length - 1 ? [span, '，'] : [span])
                                    // }, [] as ReactNode[])
                                }
                            </div>
                            <div className="note oneLine">{item.note}</div>
                            <div className="amount">¥{item.amount}</div>
                        </Item>);
                    })}
                </div>
            )}</div>
        </Layout>
    );
}
const CategoryWrapper = styled.div`
  background: white;
`
const DayItem = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
const Item = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    flex-shrink: 1;
    color: #999;
  }
`;
export { Statistics };