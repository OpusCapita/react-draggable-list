'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n'], ['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require('react-sortable-hoc');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcons = require('@opuscapita/react-icons');

var _draggableListColumn = require('./draggable-list-column.component');

var _draggableListColumn2 = _interopRequireDefault(_draggableListColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// app


var HandleIcon = (0, _styledComponents2.default)(_reactIcons.Icon)(_templateObject);

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  return _react2.default.createElement(HandleIcon, { type: 'indicator', name: 'draggingArrows' });
});
var Row = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.selected ? props.theme.colors.colorGridSelected : '#fff';
}, function (props) {
  return props.theme.colors.colorGridSelected;
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
      showIndex = props.showIndex,
      onRowDoubleClick = props.onRowDoubleClick;


  var onClick = function onClick() {
    onRowSelect(item[idKey]);
  };

  var onDoubleClick = function onDoubleClick() {
    onRowDoubleClick(item[idKey]);
  };

  return _react2.default.createElement(
    Row,
    {
      height: rowHeight,
      className: className,
      selected: selected,
      onDoubleClick: onDoubleClick,
      onClick: onClick
    },
    showIndex && _react2.default.createElement(
      _draggableListColumn2.default,
      { width: 30 },
      i + 1
    ),
    !!columns && columns.map(function (column) {
      return _react2.default.createElement(
        _draggableListColumn2.default,
        {
          key: props.item[idKey] + '-' + column.valueKey,
          width: column.width,
          alignment: column.alignment || 'flex-start'
        },
        column.valueKey && !column.valueRender && _react2.default.createElement(
          'span',
          null,
          item[column.valueKey]
        ),
        column.valueRender && column.valueRender(item)
      );
    }),
    !hideHandle && _react2.default.createElement(DragHandle, props)
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIYW5kbGVJY29uIiwiSWNvbiIsIkRyYWdIYW5kbGUiLCJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsInRoZW1lIiwiY29sb3JzIiwiY29sb3JHcmlkQm9yZGVyIiwic2VsZWN0ZWQiLCJjb2xvckdyaWRTZWxlY3RlZCIsInJvd0hlaWdodCIsImhpZGVIYW5kbGUiLCJjbGFzc05hbWUiLCJvblJvd1NlbGVjdCIsImNvbHVtbnMiLCJpZEtleSIsIml0ZW0iLCJpIiwic2hvd0luZGV4Iiwib25Sb3dEb3VibGVDbGljayIsIm9uQ2xpY2siLCJvbkRvdWJsZUNsaWNrIiwibWFwIiwiY29sdW1uIiwidmFsdWVLZXkiLCJ3aWR0aCIsImFsaWdubWVudCIsInZhbHVlUmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7O0FBREE7OztBQUdBLElBQU1BLGFBQWEsZ0NBQU9DLGdCQUFQLENBQWIsaUJBQU47O0FBT0EsSUFBTUMsYUFBYSxzQ0FBZTtBQUFBLFNBQU0sOEJBQUMsVUFBRCxJQUFZLE1BQUssV0FBakIsRUFBNkIsTUFBSyxnQkFBbEMsR0FBTjtBQUFBLENBQWYsQ0FBbkI7QUFDQSxJQUFNQyxNQUFNQywyQkFBT0MsR0FBYixtQkFFTTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZOLEVBSXVCO0FBQUEsU0FBU0QsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBSnZCLEVBTVU7QUFBQSxTQUFVSixNQUFNSyxRQUFOLEdBQWlCTCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLGlCQUFwQyxHQUF3RCxNQUFsRTtBQUFBLENBTlYsRUFRWTtBQUFBLFNBQVNOLE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsaUJBQTVCO0FBQUEsQ0FSWixDQUFOOztrQkFhZSx1Q0FBZ0IsVUFBQ04sS0FBRCxFQUFXO0FBQUEsTUFFdENPLFNBRnNDLEdBSXBDUCxLQUpvQyxDQUV0Q08sU0FGc0M7QUFBQSxNQUUzQkMsVUFGMkIsR0FJcENSLEtBSm9DLENBRTNCUSxVQUYyQjtBQUFBLE1BRWZDLFNBRmUsR0FJcENULEtBSm9DLENBRWZTLFNBRmU7QUFBQSxNQUVKSixRQUZJLEdBSXBDTCxLQUpvQyxDQUVKSyxRQUZJO0FBQUEsTUFFTUssV0FGTixHQUlwQ1YsS0FKb0MsQ0FFTVUsV0FGTjtBQUFBLE1BRW1CQyxPQUZuQixHQUlwQ1gsS0FKb0MsQ0FFbUJXLE9BRm5CO0FBQUEsTUFFNEJDLEtBRjVCLEdBSXBDWixLQUpvQyxDQUU0QlksS0FGNUI7QUFBQSxNQUVtQ0MsSUFGbkMsR0FJcENiLEtBSm9DLENBRW1DYSxJQUZuQztBQUFBLE1BRXlDQyxDQUZ6QyxHQUlwQ2QsS0FKb0MsQ0FFeUNjLENBRnpDO0FBQUEsTUFFNENDLFNBRjVDLEdBSXBDZixLQUpvQyxDQUU0Q2UsU0FGNUM7QUFBQSxNQUd0Q0MsZ0JBSHNDLEdBSXBDaEIsS0FKb0MsQ0FHdENnQixnQkFIc0M7OztBQU14QyxNQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQlAsZ0JBQVlHLEtBQUtELEtBQUwsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTU0sZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRixxQkFBaUJILEtBQUtELEtBQUwsQ0FBakI7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBQyxPQUFEO0FBQUE7QUFDRSxjQUFRTCxTQURWO0FBRUUsaUJBQVdFLFNBRmI7QUFHRSxnQkFBVUosUUFIWjtBQUlFLHFCQUFlYSxhQUpqQjtBQUtFLGVBQVNEO0FBTFg7QUFPR0YsaUJBQWE7QUFBQyxtQ0FBRDtBQUFBLFFBQVEsT0FBTyxFQUFmO0FBQW9CRCxVQUFJO0FBQXhCLEtBUGhCO0FBUUcsS0FBQyxDQUFDSCxPQUFGLElBQWFBLFFBQVFRLEdBQVIsQ0FBWTtBQUFBLGFBQ3hCO0FBQUMscUNBQUQ7QUFBQTtBQUNFLGVBQVFuQixNQUFNYSxJQUFOLENBQVdELEtBQVgsQ0FBUixTQUE2QlEsT0FBT0MsUUFEdEM7QUFFRSxpQkFBT0QsT0FBT0UsS0FGaEI7QUFHRSxxQkFBV0YsT0FBT0csU0FBUCxJQUFvQjtBQUhqQztBQUtHSCxlQUFPQyxRQUFQLElBQW1CLENBQUNELE9BQU9JLFdBQTNCLElBQTBDO0FBQUE7QUFBQTtBQUFPWCxlQUFLTyxPQUFPQyxRQUFaO0FBQVAsU0FMN0M7QUFNR0QsZUFBT0ksV0FBUCxJQUFzQkosT0FBT0ksV0FBUCxDQUFtQlgsSUFBbkI7QUFOekIsT0FEd0I7QUFBQSxLQUFaLENBUmhCO0FBa0JHLEtBQUNMLFVBQUQsSUFBZSw4QkFBQyxVQUFELEVBQWdCUixLQUFoQjtBQWxCbEIsR0FERjtBQXNCRCxDQXBDYyxDIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ydGFibGVFbGVtZW50LCBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG4vLyBhcHBcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWQgOiAnI2ZmZicpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcm93SGVpZ2h0LCBoaWRlSGFuZGxlLCBjbGFzc05hbWUsIHNlbGVjdGVkLCBvblJvd1NlbGVjdCwgY29sdW1ucywgaWRLZXksIGl0ZW0sIGksIHNob3dJbmRleCxcbiAgICBvblJvd0RvdWJsZUNsaWNrLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBvblJvd1NlbGVjdChpdGVtW2lkS2V5XSk7XG4gIH07XG5cbiAgY29uc3Qgb25Eb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW1baWRLZXldKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIGhlaWdodD17cm93SGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICBvbkRvdWJsZUNsaWNrPXtvbkRvdWJsZUNsaWNrfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7c2hvd0luZGV4ICYmIDxDb2x1bW4gd2lkdGg9ezMwfT57aSArIDF9PC9Db2x1bW4+fVxuICAgICAgeyEhY29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAga2V5PXtgJHtwcm9wcy5pdGVtW2lkS2V5XX0tJHtjb2x1bW4udmFsdWVLZXl9YH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29sdW1uLnZhbHVlS2V5ICYmICFjb2x1bW4udmFsdWVSZW5kZXIgJiYgPHNwYW4+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L3NwYW4+fVxuICAgICAgICAgIHtjb2x1bW4udmFsdWVSZW5kZXIgJiYgY29sdW1uLnZhbHVlUmVuZGVyKGl0ZW0pfVxuICAgICAgICA8L0NvbHVtbj5cbiAgICAgICkpfVxuICAgICAgeyFoaWRlSGFuZGxlICYmIDxEcmFnSGFuZGxlIHsuLi5wcm9wc30gLz59XG4gICAgPC9Sb3c+XG4gICk7XG59KTtcbiJdfQ==