import { Category } from "./Category";

type RecordEntity = {
    tagIds: number[],
    note: string,
    category: Category,
    amount: string,
    createAt: string,
}

type RecordPureEntity = Omit<RecordEntity, "createAt">;

export type {RecordEntity, RecordPureEntity};