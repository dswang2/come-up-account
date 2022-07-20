import { useEffect, useState } from "react";
import { RecordEntity, RecordPureEntity } from "../types/RecordEntity";
import { useUpdate } from "./useUpdate";


const useRecords = () => {
    const [records, setRecords] = useState<RecordEntity[]>([]);
    const addRecord = (record: RecordPureEntity) => {
        if (!(parseFloat(record.amount) && parseFloat(record.amount) > 0)) {
            alert("请输入金额");
            return false;
        }
        if (record.tagIds.length <= 0) {
            alert("请选择标签");
            return false;
        }
        const r = {...record, createAt: (new Date()).toISOString()};
        console.log("ddsw-r= ", r);
        setRecords([...records, r]);
        return true;
    }
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records));
    }, [records])
    return { records, addRecord };
}

export { useRecords };