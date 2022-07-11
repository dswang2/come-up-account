import { useState } from "react";
import { Wrapper } from "./NumberPadSection/Wrapper";
import { generateOutput } from "./NumberPadSection/generateOutput";
import { Category } from "./CategorySection/Category";

type Props = {
    children?: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    onOk?: () => void;
}

const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    // 数字
    // const [outPut, _setOutPut] = useState('0');
    const outPut = props.value;
    const setOutPut = (output: string) => {
        let value;
        if (output.length > 16) {
            value = output.slice(0, 16); // 会删除末尾的0
        } else if (output.length === 0) {
            value = '0';
        } else {
            value = output;
        }
        props.onChange(value);
    }
    const onClickButtonWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) return;
        if (text === 'OK') {
            // todo
            return;
        }
        if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
            setOutPut(generateOutput(text, outPut.toString()));
        }
    }
    return (<Wrapper>
        <div className={"output"}>{outPut}</div>
        <div className={"pad clearfix"} onClick={onClickButtonWrapper}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={"ok"}>OK</button>
            <button className={"zero"}>0</button>
            <button>.</button>
        </div>
    </Wrapper>);
}



export {NumberPadSection}