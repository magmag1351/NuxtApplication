export type TableOptions = {
    page: number;
    itemPerPage: number;
    sortBy: Array<{key: string; order: 'asc' | 'desc'}>;
    groupBy: Array<{key: string; order: 'asc' | 'desc'}>;
    search: string | null;
};