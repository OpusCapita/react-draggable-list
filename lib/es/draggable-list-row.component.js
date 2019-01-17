var _templateObject = _taggedTemplateLiteralLoose(['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n'], ['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n'], ['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']);

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
  return props.theme.colors.grey6;
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvcnRhYmxlRWxlbWVudCIsIlNvcnRhYmxlSGFuZGxlIiwic3R5bGVkIiwiSWNvbiIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkNvbHVtbiIsIkRlZmF1bHRUZXh0Q29udGFpbmVyIiwic3BhbiIsInByb3BzIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiUm93IiwiZGl2IiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0Iiwicm93SGVpZ2h0IiwiaGlkZUhhbmRsZSIsImNsYXNzTmFtZSIsIm9uUm93U2VsZWN0IiwiY29sdW1ucyIsImlkS2V5IiwiaXRlbSIsImkiLCJzaG93SW5kZXgiLCJvblJvd0RvdWJsZUNsaWNrIiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJnZXRDb250ZW50IiwiY29sdW1uIiwidmFsdWVLZXkiLCJ2YWx1ZVJlbmRlciIsInRvb2x0aXAiLCJjb2wiLCJpZCIsIm1hcCIsIndpZHRoIiwiYWxpZ25tZW50IiwidXNlVG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLGNBQTFCLFFBQWdELG9CQUFoRDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxTQUFTQyxjQUFULEVBQXlCQyxPQUF6QixRQUF3QyxpQkFBeEM7QUFDQTtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUNBQW5COztBQUVBLElBQU1DLHVCQUF1QkwsT0FBT00sSUFBOUIsa0JBRVc7QUFBQSxTQUFVLENBQUNDLE1BQU1DLGFBQVAsR0FBdUIsUUFBdkIsR0FBa0MsUUFBNUM7QUFBQSxDQUZY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eEI7QUFBQyxjQUFEO0FBQUE7QUFDRSxlQUFRakMsTUFBTW9CLElBQU4sQ0FBV0QsS0FBWCxDQUFSLFNBQTZCUSxPQUFPQyxRQUR0QztBQUVFLGlCQUFPRCxPQUFPTyxLQUZoQjtBQUdFLHFCQUFXUCxPQUFPUSxTQUFQLElBQW9CO0FBSGpDO0FBS0dSLGVBQU9TLFVBQVAsSUFDRDtBQUFDLHdCQUFEO0FBQUEsWUFBZ0IsU0FBU04sUUFBUUgsTUFBUixFQUFnQjNCLE1BQU1vQixJQUFOLENBQVdELEtBQVgsQ0FBaEIsQ0FBekIsRUFBNkQsV0FBVSxRQUF2RTtBQUNHTyxxQkFBV0MsTUFBWDtBQURILFNBTkY7QUFTRyxTQUFDQSxPQUFPUyxVQUFSLElBQXNCVixXQUFXQyxNQUFYO0FBVHpCLE9BRHdCO0FBQUEsS0FBWixDQVJoQjtBQXFCRyxLQUFDWixVQUFELElBQWUsb0JBQUMsVUFBRCxFQUFnQmYsS0FBaEI7QUFyQmxCLEdBREY7QUF5QkQsQ0FwRGMsQ0FBZjtBQXFEQSIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNvcnRhYmxlRWxlbWVudCwgU29ydGFibGVIYW5kbGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gYXBwXG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vZHJhZ2dhYmxlLWxpc3QtY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IERlZmF1bHRUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIYW5kbGVJY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNHJlbTtcbmA7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgoKSA9PiA8SGFuZGxlSWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCIvPik7XG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1IDogcHJvcHMudGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlRWxlbWVudCgocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJvd0hlaWdodCwgaGlkZUhhbmRsZSwgY2xhc3NOYW1lLCBzZWxlY3RlZCwgb25Sb3dTZWxlY3QsIGNvbHVtbnMsIGlkS2V5LCBpdGVtLCBpLCBzaG93SW5kZXgsXG4gICAgb25Sb3dEb3VibGVDbGljayxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgb25Sb3dTZWxlY3QoaXRlbVtpZEtleV0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgb25Sb3dEb3VibGVDbGljayhpdGVtW2lkS2V5XSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29udGVudCA9IChjb2x1bW4sIGluc2lkZVRvb2x0aXAgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChjb2x1bW4udmFsdWVLZXkgJiYgIWNvbHVtbi52YWx1ZVJlbmRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERlZmF1bHRUZXh0Q29udGFpbmVyIGluc2lkZVRvb2x0aXA9e2luc2lkZVRvb2x0aXB9PlxuICAgICAgICAgIHtpdGVtW2NvbHVtbi52YWx1ZUtleV19XG4gICAgICAgIDwvRGVmYXVsdFRleHRDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57Y29sdW1uLnZhbHVlUmVuZGVyKGl0ZW0pfTwvZGl2PjtcbiAgfTtcblxuICBjb25zdCB0b29sdGlwID0gKGNvbCwgaWQpID0+IDxUb29sdGlwIGlkPXtgdG9vbHRpcC0ke2lkfWB9PntnZXRDb250ZW50KGNvbCwgdHJ1ZSl9PC9Ub29sdGlwPjtcblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIGhlaWdodD17cm93SGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICBvbkRvdWJsZUNsaWNrPXtvbkRvdWJsZUNsaWNrfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7c2hvd0luZGV4ICYmIDxDb2x1bW4gd2lkdGg9ezMwfT57aSArIDF9PC9Db2x1bW4+fVxuICAgICAgeyEhY29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAga2V5PXtgJHtwcm9wcy5pdGVtW2lkS2V5XX0tJHtjb2x1bW4udmFsdWVLZXl9YH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29sdW1uLnVzZVRvb2x0aXAgJiZcbiAgICAgICAgICA8T3ZlcmxheVRyaWdnZXIgb3ZlcmxheT17dG9vbHRpcChjb2x1bW4sIHByb3BzLml0ZW1baWRLZXldKX0gcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgICAgICB7Z2V0Q29udGVudChjb2x1bW4pfVxuICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+fVxuICAgICAgICAgIHshY29sdW1uLnVzZVRvb2x0aXAgJiYgZ2V0Q29udGVudChjb2x1bW4pfVxuICAgICAgICA8L0NvbHVtbj5cbiAgICAgICkpfVxuICAgICAgeyFoaWRlSGFuZGxlICYmIDxEcmFnSGFuZGxlIHsuLi5wcm9wc30gLz59XG4gICAgPC9Sb3c+XG4gICk7XG59KTtcbjtcblxuIl19