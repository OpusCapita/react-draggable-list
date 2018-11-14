import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';


const DragHandle = SortableHandle(() => <Icon type="indicator" name="draggingArrows" />);

const Row = styled.div`
  display: flex;
  height: ${props => props.height}px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.colorGridBorder};
  align-items:center;
  background: ${props => (props.selected ? props.theme.colors.colorGridSelected : '#fff')};
  &:hover {
    background: ${props => props.theme.colors.colorGridSelected};
  }
  user-select: none;
`;

const Column = styled.div`
  min-width: ${props => props.width}px;
  width: ${props => props.width}px;
  padding: 0 ${props => props.theme.halfGutterWidth};
`;

export default SortableElement((props) => {
  const {
    rowHeight, hideHandle, className, selected, onRowSelect, columns, idKey, item, i, showIndex,
  } = props;

  const onClick = () => {
    onRowSelect(item[idKey]);
  };

  return (
    <Row height={rowHeight} className={className} selected={selected} onClick={onClick}>
      {showIndex && <Column width={30}>{i + 1}</Column>}
      {!!columns && columns.map(column => (
        <Column
          key={`${props.item[idKey]}-${column.valueKey}`}
          width={column.width}
        >
          {column.valueKey && !column.valueRender && item[column.valueKey]}
          {column.valueRender && column.valueRender(item)}
        </Column>
      ))}
      {!hideHandle && <DragHandle {...props} />}
    </Row>
  );
});
