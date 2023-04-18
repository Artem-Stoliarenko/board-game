export const getBoardFromMode = (mode) => !!mode ? new Array(mode?.field).fill([]).map((row, idxRow) =>
    new Array(mode?.field).fill({}).map((_, idx) => ({
        col: idx + 1,
        row: idxRow + 1,
        isActive: false,
        id: `${idx}-${idxRow}`
    }))) : null
