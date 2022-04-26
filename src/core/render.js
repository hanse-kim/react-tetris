import {deepCopy, sumArray} from 'src/helpers/object';

export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;

export const createPlayfield = (width = FIELD_WIDTH, height = FIELD_HEIGHT) => {
  return Array(height)
    .fill(null)
    .map(() =>
      Array(width)
        .fill(null)
        .map(() => createCell())
    );
};

export const createCell = (color, isEmpty = true) => {
  return {color, isEmpty};
};

export const renderBlock = (field, block) => {
  if (!block) return field;

  field = deepCopy(field);
  block.cells.forEach((cellRow, row) => {
    cellRow.map((cell, col) => {
      if (cell === 0) return;

      const [fieldRow, fieldCol] = sumArray([row, col], block.position);

      if (fieldRow >= FIELD_HEIGHT || fieldCol >= FIELD_WIDTH) return;
      field[fieldRow][fieldCol] = createCell(block.color, false);
    });
  });
  return field;
};

export const clearLine = (field) => {
  const clearLineIndex = [];
  field.forEach((row, i) => {
    if (row.every((cell) => !cell.isEmpty)) {
      clearLineIndex.push(i);
    }
  });

  const clearLineCount = clearLineIndex.length;
  const newField = [
    ...field.filter((_, i) => !clearLineIndex.includes(i)),
    ...createPlayfield(FIELD_WIDTH, clearLineCount),
  ];
  return [newField, clearLineCount];
};
