var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  padding: 0 ', ';\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  padding: 0 ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';
import { Icon } from '@opuscapita/react-icons';

var DragHandle = SortableHandle(function () {
  return React.createElement(Icon, { type: 'indicator', name: 'draggingArrows' });
});

var Row = styled.div(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.selected ? props.theme.colors.colorGridSelected : '#fff';
}, function (props) {
  return props.theme.colors.colorGridSelected;
});

var Column = styled.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.halfGutterWidth;
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
          width: column.width
        },
        column.valueKey && !column.valueRender && item[column.valueKey],
        column.valueRender && column.valueRender(item)
      );
    }),
    !hideHandle && React.createElement(DragHandle, props)
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvcnRhYmxlRWxlbWVudCIsIlNvcnRhYmxlSGFuZGxlIiwic3R5bGVkIiwiSWNvbiIsIkRyYWdIYW5kbGUiLCJSb3ciLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsInRoZW1lIiwiY29sb3JzIiwiY29sb3JHcmlkQm9yZGVyIiwic2VsZWN0ZWQiLCJjb2xvckdyaWRTZWxlY3RlZCIsIkNvbHVtbiIsIndpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwicm93SGVpZ2h0IiwiaGlkZUhhbmRsZSIsImNsYXNzTmFtZSIsIm9uUm93U2VsZWN0IiwiY29sdW1ucyIsImlkS2V5IiwiaXRlbSIsImkiLCJzaG93SW5kZXgiLCJvbkNsaWNrIiwibWFwIiwiY29sdW1uIiwidmFsdWVLZXkiLCJ2YWx1ZVJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxFQUEwQkMsY0FBMUIsUUFBZ0Qsb0JBQWhEO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjs7QUFHQSxJQUFNQyxhQUFhSCxlQUFlO0FBQUEsU0FBTSxvQkFBQyxJQUFELElBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssZ0JBQTVCLEdBQU47QUFBQSxDQUFmLENBQW5COztBQUVBLElBQU1JLE1BQU1ILE9BQU9JLEdBQWIsa0JBRU07QUFBQSxTQUFTQyxNQUFNQyxNQUFmO0FBQUEsQ0FGTixFQUl1QjtBQUFBLFNBQVNELE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsZUFBNUI7QUFBQSxDQUp2QixFQU1VO0FBQUEsU0FBVUosTUFBTUssUUFBTixHQUFpQkwsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CRyxpQkFBcEMsR0FBd0QsTUFBbEU7QUFBQSxDQU5WLEVBUVk7QUFBQSxTQUFTTixNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLGlCQUE1QjtBQUFBLENBUlosQ0FBTjs7QUFhQSxJQUFNQyxTQUFTWixPQUFPSSxHQUFoQixtQkFDUztBQUFBLFNBQVNDLE1BQU1RLEtBQWY7QUFBQSxDQURULEVBRUs7QUFBQSxTQUFTUixNQUFNUSxLQUFmO0FBQUEsQ0FGTCxFQUdTO0FBQUEsU0FBU1IsTUFBTUUsS0FBTixDQUFZTyxlQUFyQjtBQUFBLENBSFQsQ0FBTjs7QUFNQSxlQUFlaEIsZ0JBQWdCLFVBQUNPLEtBQUQsRUFBVztBQUFBLE1BRXRDVSxTQUZzQyxHQUdwQ1YsS0FIb0MsQ0FFdENVLFNBRnNDO0FBQUEsTUFFM0JDLFVBRjJCLEdBR3BDWCxLQUhvQyxDQUUzQlcsVUFGMkI7QUFBQSxNQUVmQyxTQUZlLEdBR3BDWixLQUhvQyxDQUVmWSxTQUZlO0FBQUEsTUFFSlAsUUFGSSxHQUdwQ0wsS0FIb0MsQ0FFSkssUUFGSTtBQUFBLE1BRU1RLFdBRk4sR0FHcENiLEtBSG9DLENBRU1hLFdBRk47QUFBQSxNQUVtQkMsT0FGbkIsR0FHcENkLEtBSG9DLENBRW1CYyxPQUZuQjtBQUFBLE1BRTRCQyxLQUY1QixHQUdwQ2YsS0FIb0MsQ0FFNEJlLEtBRjVCO0FBQUEsTUFFbUNDLElBRm5DLEdBR3BDaEIsS0FIb0MsQ0FFbUNnQixJQUZuQztBQUFBLE1BRXlDQyxDQUZ6QyxHQUdwQ2pCLEtBSG9DLENBRXlDaUIsQ0FGekM7QUFBQSxNQUU0Q0MsU0FGNUMsR0FHcENsQixLQUhvQyxDQUU0Q2tCLFNBRjVDOzs7QUFLeEMsTUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEJOLGdCQUFZRyxLQUFLRCxLQUFMLENBQVo7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBQyxPQUFEO0FBQUEsTUFBSyxRQUFRTCxTQUFiLEVBQXdCLFdBQVdFLFNBQW5DLEVBQThDLFVBQVVQLFFBQXhELEVBQWtFLFNBQVNjLE9BQTNFO0FBQ0dELGlCQUFhO0FBQUMsWUFBRDtBQUFBLFFBQVEsT0FBTyxFQUFmO0FBQW9CRCxVQUFJO0FBQXhCLEtBRGhCO0FBRUcsS0FBQyxDQUFDSCxPQUFGLElBQWFBLFFBQVFNLEdBQVIsQ0FBWTtBQUFBLGFBQ3hCO0FBQUMsY0FBRDtBQUFBO0FBQ0UsZUFBUXBCLE1BQU1nQixJQUFOLENBQVdELEtBQVgsQ0FBUixTQUE2Qk0sT0FBT0MsUUFEdEM7QUFFRSxpQkFBT0QsT0FBT2I7QUFGaEI7QUFJR2EsZUFBT0MsUUFBUCxJQUFtQixDQUFDRCxPQUFPRSxXQUEzQixJQUEwQ1AsS0FBS0ssT0FBT0MsUUFBWixDQUo3QztBQUtHRCxlQUFPRSxXQUFQLElBQXNCRixPQUFPRSxXQUFQLENBQW1CUCxJQUFuQjtBQUx6QixPQUR3QjtBQUFBLEtBQVosQ0FGaEI7QUFXRyxLQUFDTCxVQUFELElBQWUsb0JBQUMsVUFBRCxFQUFnQlgsS0FBaEI7QUFYbEIsR0FERjtBQWVELENBeEJjLENBQWYiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3Qtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTb3J0YWJsZUVsZW1lbnQsIFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcblxuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRTZWxlY3RlZCA6ICcjZmZmJyl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRTZWxlY3RlZH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlRWxlbWVudCgocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJvd0hlaWdodCwgaGlkZUhhbmRsZSwgY2xhc3NOYW1lLCBzZWxlY3RlZCwgb25Sb3dTZWxlY3QsIGNvbHVtbnMsIGlkS2V5LCBpdGVtLCBpLCBzaG93SW5kZXgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIG9uUm93U2VsZWN0KGl0ZW1baWRLZXldKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSb3cgaGVpZ2h0PXtyb3dIZWlnaHR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzZWxlY3RlZD17c2VsZWN0ZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge3Nob3dJbmRleCAmJiA8Q29sdW1uIHdpZHRoPXszMH0+e2kgKyAxfTwvQ29sdW1uPn1cbiAgICAgIHshIWNvbHVtbnMgJiYgY29sdW1ucy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIGtleT17YCR7cHJvcHMuaXRlbVtpZEtleV19LSR7Y29sdW1uLnZhbHVlS2V5fWB9XG4gICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2x1bW4udmFsdWVLZXkgJiYgIWNvbHVtbi52YWx1ZVJlbmRlciAmJiBpdGVtW2NvbHVtbi52YWx1ZUtleV19XG4gICAgICAgICAge2NvbHVtbi52YWx1ZVJlbmRlciAmJiBjb2x1bW4udmFsdWVSZW5kZXIoaXRlbSl9XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgKSl9XG4gICAgICB7IWhpZGVIYW5kbGUgJiYgPERyYWdIYW5kbGUgey4uLnByb3BzfSAvPn1cbiAgICA8L1Jvdz5cbiAgKTtcbn0pO1xuIl19