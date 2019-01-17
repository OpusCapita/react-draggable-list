import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// app
import Column from './draggable-list-column.component';

const DefaultTextContainer = styled.span`
  text-overflow: ellipsis;
  white-space: ${props => (!props.insideTooltip ? 'nowrap' : 'normal')};
  overflow: hidden;
`;

const HandleIcon = styled(Icon)`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  width: 4rem;
`;

const DragHandle = SortableHandle(() => <HandleIcon type="indicator" name="draggingArrows"/>);
const Row = styled.div`
  display: flex;
  height: ${props => props.height}px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.grey6};
  align-items: center;
  background: ${props => (props.selected ? props.theme.colors.grey5 : props.theme.colors.white)};
  &:hover {
    background: ${props => props.theme.colors.grey4};
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

  const getContent = (column, insideTooltip = false) => {
    if (column.valueKey && !column.valueRender) {
      return (
        <DefaultTextContainer insideTooltip={insideTooltip}>
          {item[column.valueKey]}
        </DefaultTextContainer>
      );
    }
    return <div>{column.valueRender(item)}</div>;
  };

  const tooltip = (col, id) => <Tooltip id={`tooltip-${id}`}>{getContent(col, true)}</Tooltip>;

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
          {column.useTooltip &&
          <OverlayTrigger overlay={tooltip(column, props.item[idKey])} placement="bottom">
            {getContent(column)}
          </OverlayTrigger>}
          {!column.useTooltip && getContent(column)}
        </Column>
      ))}
      {!hideHandle && <DragHandle {...props} />}
    </Row>
  );
});
;

