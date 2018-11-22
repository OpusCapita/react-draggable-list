import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';
// app
import Column from './draggable-list-column.component';

const HandleIcon = styled(Icon)`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  width: 4rem;
`;

const DragHandle = SortableHandle(() => <HandleIcon type="indicator" name="draggingArrows" />);
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

export default SortableElement((props) => {
  const {
    rowHeight, hideHandle, className, selected, onRowSelect, columns, idKey, item, i, showIndex,
    onRowDoubleClick,
  } = props;

  const onClick = () => {
    onRowSelect(item[idKey]);
  };

  const onDoubleClick = () => {
    onRowDoubleClick(item[idKey]);
  };

  return (
    <Row
      height={rowHeight}
      className={className}
      selected={selected}
      onDoubleClick={onDoubleClick}
      onClick={onClick}
    >
      {showIndex && <Column width={30}>{i + 1}</Column>}
      {!!columns && columns.map(column => (
        <Column
          key={`${props.item[idKey]}-${column.valueKey}`}
          width={column.width}
          alignment={column.alignment || 'flex-start'}
        >
          {column.valueKey && !column.valueRender && <span>{item[column.valueKey]}</span>}
          {column.valueRender && column.valueRender(item)}
        </Column>
      ))}
      {!hideHandle && <DragHandle {...props} />}
    </Row>
  );
});
