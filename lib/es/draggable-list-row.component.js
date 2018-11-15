var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n'], ['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';
// app
import Column from './draggable-list-column.component';

var HandleIcon = styled(Icon)(_templateObject);

var DragHandle = SortableHandle(function () {
  return React.createElement(HandleIcon, { type: 'indicator', name: 'draggingArrows' });
});
var Row = styled.div(_templateObject2, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.selected ? props.theme.colors.colorGridSelected : '#fff';
}, function (props) {
  return props.theme.colors.colorGridSelected;
});

export default SortableElement(function (props) {
  var rowHeight = props.rowHeight,
      hideHandle = props.hideHandle,
      className = props.className,
      selected = props.selected,
      onRowSelect = props.onRowSelect,
      columns = props.columns,
      idKey = props.idKey,
      item = props.item,
      i = props.i,
      showIndex = props.showIndex;


  var onClick = function onClick() {
    onRowSelect(item[idKey]);
  };

  return React.createElement(
    Row,
    { height: rowHeight, className: className, selected: selected, onClick: onClick },
    showIndex && React.createElement(
      Column,
      { width: 30 },
      i + 1
    ),
    !!columns && columns.map(function (column) {
      return React.createElement(
        Column,
        {
          key: props.item[idKey] + '-' + column.valueKey,
          width: column.width,
          alignment: column.alignment || 'flex-start'
        },
        column.valueKey && !column.valueRender && React.createElement(
          'span',
          null,
          item[column.valueKey]
        ),
        column.valueRender && column.valueRender(item)
      );
    }),
    !hideHandle && React.createElement(DragHandle, props)
  );
});