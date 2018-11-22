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
      showIndex = props.showIndex,
      onRowDoubleClick = props.onRowDoubleClick;


  var onClick = function onClick() {
    onRowSelect(item[idKey]);
  };

  var onDoubleClick = function onDoubleClick() {
    onRowDoubleClick(item[idKey]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvcnRhYmxlRWxlbWVudCIsIlNvcnRhYmxlSGFuZGxlIiwic3R5bGVkIiwiSWNvbiIsIkNvbHVtbiIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImNvbG9yR3JpZEJvcmRlciIsInNlbGVjdGVkIiwiY29sb3JHcmlkU2VsZWN0ZWQiLCJyb3dIZWlnaHQiLCJoaWRlSGFuZGxlIiwiY2xhc3NOYW1lIiwib25Sb3dTZWxlY3QiLCJjb2x1bW5zIiwiaWRLZXkiLCJpdGVtIiwiaSIsInNob3dJbmRleCIsIm9uUm93RG91YmxlQ2xpY2siLCJvbkNsaWNrIiwib25Eb3VibGVDbGljayIsIm1hcCIsImNvbHVtbiIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJ2YWx1ZVJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxFQUEwQkMsY0FBMUIsUUFBZ0Qsb0JBQWhEO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQ0FBbkI7O0FBRUEsSUFBTUMsYUFBYUgsT0FBT0MsSUFBUCxDQUFiLGlCQUFOOztBQU9BLElBQU1HLGFBQWFMLGVBQWU7QUFBQSxTQUFNLG9CQUFDLFVBQUQsSUFBWSxNQUFLLFdBQWpCLEVBQTZCLE1BQUssZ0JBQWxDLEdBQU47QUFBQSxDQUFmLENBQW5CO0FBQ0EsSUFBTU0sTUFBTUwsT0FBT00sR0FBYixtQkFFTTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZOLEVBSXVCO0FBQUEsU0FBU0QsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBSnZCLEVBTVU7QUFBQSxTQUFVSixNQUFNSyxRQUFOLEdBQWlCTCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLGlCQUFwQyxHQUF3RCxNQUFsRTtBQUFBLENBTlYsRUFRWTtBQUFBLFNBQVNOLE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsaUJBQTVCO0FBQUEsQ0FSWixDQUFOOztBQWFBLGVBQWVmLGdCQUFnQixVQUFDUyxLQUFELEVBQVc7QUFBQSxNQUV0Q08sU0FGc0MsR0FJcENQLEtBSm9DLENBRXRDTyxTQUZzQztBQUFBLE1BRTNCQyxVQUYyQixHQUlwQ1IsS0FKb0MsQ0FFM0JRLFVBRjJCO0FBQUEsTUFFZkMsU0FGZSxHQUlwQ1QsS0FKb0MsQ0FFZlMsU0FGZTtBQUFBLE1BRUpKLFFBRkksR0FJcENMLEtBSm9DLENBRUpLLFFBRkk7QUFBQSxNQUVNSyxXQUZOLEdBSXBDVixLQUpvQyxDQUVNVSxXQUZOO0FBQUEsTUFFbUJDLE9BRm5CLEdBSXBDWCxLQUpvQyxDQUVtQlcsT0FGbkI7QUFBQSxNQUU0QkMsS0FGNUIsR0FJcENaLEtBSm9DLENBRTRCWSxLQUY1QjtBQUFBLE1BRW1DQyxJQUZuQyxHQUlwQ2IsS0FKb0MsQ0FFbUNhLElBRm5DO0FBQUEsTUFFeUNDLENBRnpDLEdBSXBDZCxLQUpvQyxDQUV5Q2MsQ0FGekM7QUFBQSxNQUU0Q0MsU0FGNUMsR0FJcENmLEtBSm9DLENBRTRDZSxTQUY1QztBQUFBLE1BR3RDQyxnQkFIc0MsR0FJcENoQixLQUpvQyxDQUd0Q2dCLGdCQUhzQzs7O0FBTXhDLE1BQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCUCxnQkFBWUcsS0FBS0QsS0FBTCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTSxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJGLHFCQUFpQkgsS0FBS0QsS0FBTCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFDLE9BQUQ7QUFBQTtBQUNFLGNBQVFMLFNBRFY7QUFFRSxpQkFBV0UsU0FGYjtBQUdFLGdCQUFVSixRQUhaO0FBSUUscUJBQWVhLGFBSmpCO0FBS0UsZUFBU0Q7QUFMWDtBQU9HRixpQkFBYTtBQUFDLFlBQUQ7QUFBQSxRQUFRLE9BQU8sRUFBZjtBQUFvQkQsVUFBSTtBQUF4QixLQVBoQjtBQVFHLEtBQUMsQ0FBQ0gsT0FBRixJQUFhQSxRQUFRUSxHQUFSLENBQVk7QUFBQSxhQUN4QjtBQUFDLGNBQUQ7QUFBQTtBQUNFLGVBQVFuQixNQUFNYSxJQUFOLENBQVdELEtBQVgsQ0FBUixTQUE2QlEsT0FBT0MsUUFEdEM7QUFFRSxpQkFBT0QsT0FBT0UsS0FGaEI7QUFHRSxxQkFBV0YsT0FBT0csU0FBUCxJQUFvQjtBQUhqQztBQUtHSCxlQUFPQyxRQUFQLElBQW1CLENBQUNELE9BQU9JLFdBQTNCLElBQTBDO0FBQUE7QUFBQTtBQUFPWCxlQUFLTyxPQUFPQyxRQUFaO0FBQVAsU0FMN0M7QUFNR0QsZUFBT0ksV0FBUCxJQUFzQkosT0FBT0ksV0FBUCxDQUFtQlgsSUFBbkI7QUFOekIsT0FEd0I7QUFBQSxLQUFaLENBUmhCO0FBa0JHLEtBQUNMLFVBQUQsSUFBZSxvQkFBQyxVQUFELEVBQWdCUixLQUFoQjtBQWxCbEIsR0FERjtBQXNCRCxDQXBDYyxDQUFmIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ydGFibGVFbGVtZW50LCBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG4vLyBhcHBcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWQgOiAnI2ZmZicpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcm93SGVpZ2h0LCBoaWRlSGFuZGxlLCBjbGFzc05hbWUsIHNlbGVjdGVkLCBvblJvd1NlbGVjdCwgY29sdW1ucywgaWRLZXksIGl0ZW0sIGksIHNob3dJbmRleCxcbiAgICBvblJvd0RvdWJsZUNsaWNrLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBvblJvd1NlbGVjdChpdGVtW2lkS2V5XSk7XG4gIH07XG5cbiAgY29uc3Qgb25Eb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW1baWRLZXldKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIGhlaWdodD17cm93SGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICBvbkRvdWJsZUNsaWNrPXtvbkRvdWJsZUNsaWNrfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7c2hvd0luZGV4ICYmIDxDb2x1bW4gd2lkdGg9ezMwfT57aSArIDF9PC9Db2x1bW4+fVxuICAgICAgeyEhY29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAga2V5PXtgJHtwcm9wcy5pdGVtW2lkS2V5XX0tJHtjb2x1bW4udmFsdWVLZXl9YH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29sdW1uLnZhbHVlS2V5ICYmICFjb2x1bW4udmFsdWVSZW5kZXIgJiYgPHNwYW4+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L3NwYW4+fVxuICAgICAgICAgIHtjb2x1bW4udmFsdWVSZW5kZXIgJiYgY29sdW1uLnZhbHVlUmVuZGVyKGl0ZW0pfVxuICAgICAgICA8L0NvbHVtbj5cbiAgICAgICkpfVxuICAgICAgeyFoaWRlSGFuZGxlICYmIDxEcmFnSGFuZGxlIHsuLi5wcm9wc30gLz59XG4gICAgPC9Sb3c+XG4gICk7XG59KTtcbiJdfQ==