var _templateObject = _taggedTemplateLiteralLoose(['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n'], ['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n'], ['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// app
import Column from './draggable-list-column.component';

var DefaultTextContainer = styled.span(_templateObject, function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});

var HandleIcon = styled(Icon)(_templateObject2);

var DragHandle = SortableHandle(function () {
  return React.createElement(HandleIcon, { type: 'indicator', name: 'draggingArrows' });
});
var Row = styled.div(_templateObject3, function (props) {
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
      showIndex = props.showIndex,
      onRowDoubleClick = props.onRowDoubleClick;


  var onClick = function onClick() {
    onRowSelect(item[idKey]);
  };

  var onDoubleClick = function onDoubleClick() {
    onRowDoubleClick(item[idKey]);
  };

  var getContent = function getContent(column) {
    var insideTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (column.valueKey && !column.valueRender) {
      return React.createElement(
        DefaultTextContainer,
        { insideTooltip: insideTooltip },
        item[column.valueKey]
      );
    }
    return React.createElement(
      'div',
      null,
      column.valueRender(item)
    );
  };

  var tooltip = function tooltip(col, id) {
    return React.createElement(
      Tooltip,
      { id: 'tooltip-' + id },
      getContent(col, true)
    );
  };

  return React.createElement(
    Row,
    {
      height: rowHeight,
      className: className,
      selected: selected,
      onDoubleClick: onDoubleClick,
      onClick: onClick
    },
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
        column.useTooltip && React.createElement(
          OverlayTrigger,
          { overlay: tooltip(column, props.item[idKey]), placement: 'bottom' },
          getContent(column)
        ),
        !column.useTooltip && getContent(column)
      );
    }),
    !hideHandle && React.createElement(DragHandle, props)
  );
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvcnRhYmxlRWxlbWVudCIsIlNvcnRhYmxlSGFuZGxlIiwic3R5bGVkIiwiSWNvbiIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkNvbHVtbiIsIkRlZmF1bHRUZXh0Q29udGFpbmVyIiwic3BhbiIsInByb3BzIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiUm93IiwiZGl2IiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJjb2xvckdyaWRCb3JkZXIiLCJzZWxlY3RlZCIsImNvbG9yR3JpZFNlbGVjdGVkIiwicm93SGVpZ2h0IiwiaGlkZUhhbmRsZSIsImNsYXNzTmFtZSIsIm9uUm93U2VsZWN0IiwiY29sdW1ucyIsImlkS2V5IiwiaXRlbSIsImkiLCJzaG93SW5kZXgiLCJvblJvd0RvdWJsZUNsaWNrIiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJnZXRDb250ZW50IiwiY29sdW1uIiwidmFsdWVLZXkiLCJ2YWx1ZVJlbmRlciIsInRvb2x0aXAiLCJjb2wiLCJpZCIsIm1hcCIsIndpZHRoIiwiYWxpZ25tZW50IiwidXNlVG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLGNBQTFCLFFBQWdELG9CQUFoRDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxTQUFTQyxjQUFULEVBQXlCQyxPQUF6QixRQUF3QyxpQkFBeEM7QUFDQTtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUNBQW5COztBQUVBLElBQU1DLHVCQUF1QkwsT0FBT00sSUFBOUIsa0JBRVc7QUFBQSxTQUFVLENBQUNDLE1BQU1DLGFBQVAsR0FBdUIsUUFBdkIsR0FBa0MsUUFBNUM7QUFB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US9CLE1BQU1rQixJQUFOLENBQVdELEtBQVgsQ0FBUixTQUE2QlEsT0FBT0MsUUFEdEM7QUFFRSxpQkFBT0QsT0FBT08sS0FGaEI7QUFHRSxxQkFBV1AsT0FBT1EsU0FBUCxJQUFvQjtBQUhqQztBQUtHUixlQUFPUyxVQUFQLElBQ0Q7QUFBQyx3QkFBRDtBQUFBLFlBQWdCLFNBQVNOLFFBQVFILE1BQVIsRUFBZ0J6QixNQUFNa0IsSUFBTixDQUFXRCxLQUFYLENBQWhCLENBQXpCLEVBQTZELFdBQVUsUUFBdkU7QUFDR08scUJBQVdDLE1BQVg7QUFESCxTQU5GO0FBU0csU0FBQ0EsT0FBT1MsVUFBUixJQUFzQlYsV0FBV0MsTUFBWDtBQVR6QixPQUR3QjtBQUFBLEtBQVosQ0FSaEI7QUFxQkcsS0FBQ1osVUFBRCxJQUFlLG9CQUFDLFVBQUQsRUFBZ0JiLEtBQWhCO0FBckJsQixHQURGO0FBeUJELENBcERjLENBQWY7QUFxREEiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3Qtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTb3J0YWJsZUVsZW1lbnQsIFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbi8vIGFwcFxuaW1wb3J0IENvbHVtbiBmcm9tICcuL2RyYWdnYWJsZS1saXN0LWNvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBEZWZhdWx0VGV4dENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiLz4pO1xuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRTZWxlY3RlZCA6ICcjZmZmJyl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRTZWxlY3RlZH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZUVsZW1lbnQoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByb3dIZWlnaHQsIGhpZGVIYW5kbGUsIGNsYXNzTmFtZSwgc2VsZWN0ZWQsIG9uUm93U2VsZWN0LCBjb2x1bW5zLCBpZEtleSwgaXRlbSwgaSwgc2hvd0luZGV4LFxuICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIG9uUm93U2VsZWN0KGl0ZW1baWRLZXldKTtcbiAgfTtcblxuICBjb25zdCBvbkRvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgIG9uUm93RG91YmxlQ2xpY2soaXRlbVtpZEtleV0pO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbnRlbnQgPSAoY29sdW1uLCBpbnNpZGVUb29sdGlwID0gZmFsc2UpID0+IHtcbiAgICBpZiAoY29sdW1uLnZhbHVlS2V5ICYmICFjb2x1bW4udmFsdWVSZW5kZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEZWZhdWx0VGV4dENvbnRhaW5lciBpbnNpZGVUb29sdGlwPXtpbnNpZGVUb29sdGlwfT5cbiAgICAgICAgICB7aXRlbVtjb2x1bW4udmFsdWVLZXldfVxuICAgICAgICA8L0RlZmF1bHRUZXh0Q29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+e2NvbHVtbi52YWx1ZVJlbmRlcihpdGVtKX08L2Rpdj47XG4gIH07XG5cbiAgY29uc3QgdG9vbHRpcCA9IChjb2wsIGlkKSA9PiA8VG9vbHRpcCBpZD17YHRvb2x0aXAtJHtpZH1gfT57Z2V0Q29udGVudChjb2wsIHRydWUpfTwvVG9vbHRpcD47XG5cbiAgcmV0dXJuIChcbiAgICA8Um93XG4gICAgICBoZWlnaHQ9e3Jvd0hlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgb25Eb3VibGVDbGljaz17b25Eb3VibGVDbGlja31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge3Nob3dJbmRleCAmJiA8Q29sdW1uIHdpZHRoPXszMH0+e2kgKyAxfTwvQ29sdW1uPn1cbiAgICAgIHshIWNvbHVtbnMgJiYgY29sdW1ucy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIGtleT17YCR7cHJvcHMuaXRlbVtpZEtleV19LSR7Y29sdW1uLnZhbHVlS2V5fWB9XG4gICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH1cbiAgICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbHVtbi51c2VUb29sdGlwICYmXG4gICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIG92ZXJsYXk9e3Rvb2x0aXAoY29sdW1uLCBwcm9wcy5pdGVtW2lkS2V5XSl9IHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgICAge2dldENvbnRlbnQoY29sdW1uKX1cbiAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPn1cbiAgICAgICAgICB7IWNvbHVtbi51c2VUb29sdGlwICYmIGdldENvbnRlbnQoY29sdW1uKX1cbiAgICAgICAgPC9Db2x1bW4+XG4gICAgICApKX1cbiAgICAgIHshaGlkZUhhbmRsZSAmJiA8RHJhZ0hhbmRsZSB7Li4ucHJvcHN9IC8+fVxuICAgIDwvUm93PlxuICApO1xufSk7XG47XG5cbiJdfQ==