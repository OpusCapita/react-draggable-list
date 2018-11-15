import React from 'react';
import Infinite from 'react-infinite';
import { SortableContainer } from 'react-sortable-hoc';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
// App imports
import Row from './draggable-list-row.component';

const Container = styled(PerfectScrollbar)`

`;
export default SortableContainer((props) => {
  const {
    idKey, selectedItem, rowHeight, listHeight, items, disabled,
  } = props;

  return (
    <Container id={`${rowHeight}-scrollbar`}>
      <Infinite
        containerHeight={listHeight - rowHeight}
        elementHeight={rowHeight}
        getContainer={() => document.getElementById(`${rowHeight}-scrollbar`)}
      >
        {items.map((item, index) => (
          <Row
            {...props}
            index={index}
            i={index}
            item={item}
            key={item[idKey]}
            selected={selectedItem === item[idKey]}
            onClick={props.onRowClick}
            disabled={disabled}
            hideHandle={disabled}
          />
        ))}
      </Infinite>
    </Container>
  );
});

