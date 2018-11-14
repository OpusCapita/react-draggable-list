'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  padding: 0 ', ';\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  padding: 0 ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require('react-sortable-hoc');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcons = require('@opuscapita/react-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  return _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'draggingArrows' });
});

var Row = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.selected ? props.theme.colors.colorGridSelected : '#fff';
}, function (props) {
  return props.theme.colors.colorGridSelected;
});

var Column = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.halfGutterWidth;
});

exports.default = (0, _reactSortableHoc.SortableElement)(function (props) {
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

  return _react2.default.createElement(
    Row,
    { height: rowHeight, className: className, selected: selected, onClick: onClick },
    showIndex && _react2.default.createElement(
      Column,
      { width: 30 },
      i + 1
    ),
    !!columns && columns.map(function (column) {
      return _react2.default.createElement(
        Column,
        {
          key: props.item[idKey] + '-' + column.valueKey,
          width: column.width
        },
        column.valueKey && !column.valueRender && item[column.valueKey],
        column.valueRender && column.valueRender(item)
      );
    }),
    !hideHandle && _react2.default.createElement(DragHandle, props)
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEcmFnSGFuZGxlIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImNvbG9yR3JpZEJvcmRlciIsInNlbGVjdGVkIiwiY29sb3JHcmlkU2VsZWN0ZWQiLCJDb2x1bW4iLCJ3aWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsInJvd0hlaWdodCIsImhpZGVIYW5kbGUiLCJjbGFzc05hbWUiLCJvblJvd1NlbGVjdCIsImNvbHVtbnMiLCJpZEtleSIsIml0ZW0iLCJpIiwic2hvd0luZGV4Iiwib25DbGljayIsIm1hcCIsImNvbHVtbiIsInZhbHVlS2V5IiwidmFsdWVSZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1BLGFBQWEsc0NBQWU7QUFBQSxTQUFNLDhCQUFDLGdCQUFELElBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssZ0JBQTVCLEdBQU47QUFBQSxDQUFmLENBQW5COztBQUVBLElBQU1DLE1BQU1DLDJCQUFPQyxHQUFiLGtCQUVNO0FBQUEsU0FBU0MsTUFBTUMsTUFBZjtBQUFBLENBRk4sRUFJdUI7QUFBQSxTQUFTRCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLGVBQTVCO0FBQUEsQ0FKdkIsRUFNVTtBQUFBLFNBQVVKLE1BQU1LLFFBQU4sR0FBaUJMLE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsaUJBQXBDLEdBQXdELE1BQWxFO0FBQUEsQ0FOVixFQVFZO0FBQUEsU0FBU04sTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CRyxpQkFBNUI7QUFBQSxDQVJaLENBQU47O0FBYUEsSUFBTUMsU0FBU1QsMkJBQU9DLEdBQWhCLG1CQUNTO0FBQUEsU0FBU0MsTUFBTVEsS0FBZjtBQUFBLENBRFQsRUFFSztBQUFBLFNBQVNSLE1BQU1RLEtBQWY7QUFBQSxDQUZMLEVBR1M7QUFBQSxTQUFTUixNQUFNRSxLQUFOLENBQVlPLGVBQXJCO0FBQUEsQ0FIVCxDQUFOOztrQkFNZSx1Q0FBZ0IsVUFBQ1QsS0FBRCxFQUFXO0FBQUEsTUFFdENVLFNBRnNDLEdBR3BDVixLQUhvQyxDQUV0Q1UsU0FGc0M7QUFBQSxNQUUzQkMsVUFGMkIsR0FHcENYLEtBSG9DLENBRTNCVyxVQUYyQjtBQUFBLE1BRWZDLFNBRmUsR0FHcENaLEtBSG9DLENBRWZZLFNBRmU7QUFBQSxNQUVKUCxRQUZJLEdBR3BDTCxLQUhvQyxDQUVKSyxRQUZJO0FBQUEsTUFFTVEsV0FGTixHQUdwQ2IsS0FIb0MsQ0FFTWEsV0FGTjtBQUFBLE1BRW1CQyxPQUZuQixHQUdwQ2QsS0FIb0MsQ0FFbUJjLE9BRm5CO0FBQUEsTUFFNEJDLEtBRjVCLEdBR3BDZixLQUhvQyxDQUU0QmUsS0FGNUI7QUFBQSxNQUVtQ0MsSUFGbkMsR0FHcENoQixLQUhvQyxDQUVtQ2dCLElBRm5DO0FBQUEsTUFFeUNDLENBRnpDLEdBR3BDakIsS0FIb0MsQ0FFeUNpQixDQUZ6QztBQUFBLE1BRTRDQyxTQUY1QyxHQUdwQ2xCLEtBSG9DLENBRTRDa0IsU0FGNUM7OztBQUt4QyxNQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQk4sZ0JBQVlHLEtBQUtELEtBQUwsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFDLE9BQUQ7QUFBQSxNQUFLLFFBQVFMLFNBQWIsRUFBd0IsV0FBV0UsU0FBbkMsRUFBOEMsVUFBVVAsUUFBeEQsRUFBa0UsU0FBU2MsT0FBM0U7QUFDR0QsaUJBQWE7QUFBQyxZQUFEO0FBQUEsUUFBUSxPQUFPLEVBQWY7QUFBb0JELFVBQUk7QUFBeEIsS0FEaEI7QUFFRyxLQUFDLENBQUNILE9BQUYsSUFBYUEsUUFBUU0sR0FBUixDQUFZO0FBQUEsYUFDeEI7QUFBQyxjQUFEO0FBQUE7QUFDRSxlQUFRcEIsTUFBTWdCLElBQU4sQ0FBV0QsS0FBWCxDQUFSLFNBQTZCTSxPQUFPQyxRQUR0QztBQUVFLGlCQUFPRCxPQUFPYjtBQUZoQjtBQUlHYSxlQUFPQyxRQUFQLElBQW1CLENBQUNELE9BQU9FLFdBQTNCLElBQTBDUCxLQUFLSyxPQUFPQyxRQUFaLENBSjdDO0FBS0dELGVBQU9FLFdBQVAsSUFBc0JGLE9BQU9FLFdBQVAsQ0FBbUJQLElBQW5CO0FBTHpCLE9BRHdCO0FBQUEsS0FBWixDQUZoQjtBQVdHLEtBQUNMLFVBQUQsSUFBZSw4QkFBQyxVQUFELEVBQWdCWCxLQUFoQjtBQVhsQixHQURGO0FBZUQsQ0F4QmMsQyIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNvcnRhYmxlRWxlbWVudCwgU29ydGFibGVIYW5kbGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgoKSA9PiA8SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCIgLz4pO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRCb3JkZXJ9O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZFNlbGVjdGVkIDogJyNmZmYnKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZFNlbGVjdGVkfTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIHBhZGRpbmc6IDAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcm93SGVpZ2h0LCBoaWRlSGFuZGxlLCBjbGFzc05hbWUsIHNlbGVjdGVkLCBvblJvd1NlbGVjdCwgY29sdW1ucywgaWRLZXksIGl0ZW0sIGksIHNob3dJbmRleCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgb25Sb3dTZWxlY3QoaXRlbVtpZEtleV0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBoZWlnaHQ9e3Jvd0hlaWdodH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNlbGVjdGVkPXtzZWxlY3RlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICB7c2hvd0luZGV4ICYmIDxDb2x1bW4gd2lkdGg9ezMwfT57aSArIDF9PC9Db2x1bW4+fVxuICAgICAgeyEhY29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAga2V5PXtgJHtwcm9wcy5pdGVtW2lkS2V5XX0tJHtjb2x1bW4udmFsdWVLZXl9YH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICA+XG4gICAgICAgICAge2NvbHVtbi52YWx1ZUtleSAmJiAhY29sdW1uLnZhbHVlUmVuZGVyICYmIGl0ZW1bY29sdW1uLnZhbHVlS2V5XX1cbiAgICAgICAgICB7Y29sdW1uLnZhbHVlUmVuZGVyICYmIGNvbHVtbi52YWx1ZVJlbmRlcihpdGVtKX1cbiAgICAgICAgPC9Db2x1bW4+XG4gICAgICApKX1cbiAgICAgIHshaGlkZUhhbmRsZSAmJiA8RHJhZ0hhbmRsZSB7Li4ucHJvcHN9IC8+fVxuICAgIDwvUm93PlxuICApO1xufSk7XG4iXX0=