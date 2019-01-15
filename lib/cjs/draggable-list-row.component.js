'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n'], ['\n  text-overflow: ellipsis;\n  white-space: ', ';\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n'], ['\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n'], ['\n  display: flex;\n  height: ', 'px;\n  cursor: pointer;\n  border-bottom: 1px solid ', ';\n  align-items:center;\n  background: ', ';\n  &:hover {\n    background: ', ';\n  }\n  user-select: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require('react-sortable-hoc');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcons = require('@opuscapita/react-icons');

var _reactBootstrap = require('react-bootstrap');

var _draggableListColumn = require('./draggable-list-column.component');

var _draggableListColumn2 = _interopRequireDefault(_draggableListColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// app


var DefaultTextContainer = _styledComponents2.default.span(_templateObject, function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});

var HandleIcon = (0, _styledComponents2.default)(_reactIcons.Icon)(_templateObject2);

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  return _react2.default.createElement(HandleIcon, { type: 'indicator', name: 'draggingArrows' });
});
var Row = _styledComponents2.default.div(_templateObject3, function (props) {
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

  var getContent = function getContent(column) {
    var insideTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (column.valueKey && !column.valueRender) {
      return _react2.default.createElement(
        DefaultTextContainer,
        { insideTooltip: insideTooltip },
        item[column.valueKey]
      );
    }
    return _react2.default.createElement(
      'div',
      null,
      column.valueRender(item)
    );
  };

  var tooltip = function tooltip(col, id) {
    return _react2.default.createElement(
      _reactBootstrap.Tooltip,
      { id: 'tooltip-' + id },
      getContent(col, true)
    );
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
        column.useTooltip && _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { overlay: tooltip(column, props.item[idKey]), placement: 'bottom' },
          getContent(column)
        ),
        !column.useTooltip && getContent(column)
      );
    }),
    !hideHandle && _react2.default.createElement(DragHandle, props)
  );
});

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEZWZhdWx0VGV4dENvbnRhaW5lciIsInN0eWxlZCIsInNwYW4iLCJwcm9wcyIsImluc2lkZVRvb2x0aXAiLCJIYW5kbGVJY29uIiwiSWNvbiIsIkRyYWdIYW5kbGUiLCJSb3ciLCJkaXYiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImNvbG9yR3JpZEJvcmRlciIsInNlbGVjdGVkIiwiY29sb3JHcmlkU2VsZWN0ZWQiLCJyb3dIZWlnaHQiLCJoaWRlSGFuZGxlIiwiY2xhc3NOYW1lIiwib25Sb3dTZWxlY3QiLCJjb2x1bW5zIiwiaWRLZXkiLCJpdGVtIiwiaSIsInNob3dJbmRleCIsIm9uUm93RG91YmxlQ2xpY2siLCJvbkNsaWNrIiwib25Eb3VibGVDbGljayIsImdldENvbnRlbnQiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsInZhbHVlUmVuZGVyIiwidG9vbHRpcCIsImNvbCIsImlkIiwibWFwIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJ1c2VUb29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxJQUE5QixrQkFFVztBQUFBLFNBQVUsQ0FBQ0MsTUFBTUMsYUFBUCxHQUF1QixRQUF2QixHQUFrQyxRQUE1QztBQUFBLENBRlgsQ0FBTjs7QUFNQSxJQUFNQyxhQUFhLGdDQUFPQyxnQkFBUCxDQUFiLGtCQUFOOztBQU9BLElBQU1DLGFBQWEsc0NBQWU7QUFBQSxTQUFNLDhCQUFDLFVBQUQsSUFBWSxNQUFLLFdBQWpCLEVBQTZCLE1BQUssZ0JBQWxDLEdBQU47QUFBQSxDQUFmLENBQW5CO0FBQ0EsSUFBTUMsTUFBTVAsMkJBQU9RLEdBQWIsbUJBRU07QUFBQSxTQUFTTixNQUFNTyxNQUFmO0FBQUEsQ0FGTixFQUl1QjtBQUFB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dkU7QUFDR08scUJBQVdDLE1BQVg7QUFESCxTQU5GO0FBU0csU0FBQ0EsT0FBT1MsVUFBUixJQUFzQlYsV0FBV0MsTUFBWDtBQVR6QixPQUR3QjtBQUFBLEtBQVosQ0FSaEI7QUFxQkcsS0FBQ1osVUFBRCxJQUFlLDhCQUFDLFVBQUQsRUFBZ0JkLEtBQWhCO0FBckJsQixHQURGO0FBeUJELENBcERjLEM7O0FBcURmIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ydGFibGVFbGVtZW50LCBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG4vLyBhcHBcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgRGVmYXVsdFRleHRDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhhbmRsZUljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuYDtcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxIYW5kbGVJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIi8+KTtcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWQgOiAnI2ZmZicpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkU2VsZWN0ZWR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcm93SGVpZ2h0LCBoaWRlSGFuZGxlLCBjbGFzc05hbWUsIHNlbGVjdGVkLCBvblJvd1NlbGVjdCwgY29sdW1ucywgaWRLZXksIGl0ZW0sIGksIHNob3dJbmRleCxcbiAgICBvblJvd0RvdWJsZUNsaWNrLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBvblJvd1NlbGVjdChpdGVtW2lkS2V5XSk7XG4gIH07XG5cbiAgY29uc3Qgb25Eb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW1baWRLZXldKTtcbiAgfTtcblxuICBjb25zdCBnZXRDb250ZW50ID0gKGNvbHVtbiwgaW5zaWRlVG9vbHRpcCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGNvbHVtbi52YWx1ZUtleSAmJiAhY29sdW1uLnZhbHVlUmVuZGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGVmYXVsdFRleHRDb250YWluZXIgaW5zaWRlVG9vbHRpcD17aW5zaWRlVG9vbHRpcH0+XG4gICAgICAgICAge2l0ZW1bY29sdW1uLnZhbHVlS2V5XX1cbiAgICAgICAgPC9EZWZhdWx0VGV4dENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2Pntjb2x1bW4udmFsdWVSZW5kZXIoaXRlbSl9PC9kaXY+O1xuICB9O1xuXG4gIGNvbnN0IHRvb2x0aXAgPSAoY29sLCBpZCkgPT4gPFRvb2x0aXAgaWQ9e2B0b29sdGlwLSR7aWR9YH0+e2dldENvbnRlbnQoY29sLCB0cnVlKX08L1Rvb2x0aXA+O1xuXG4gIHJldHVybiAoXG4gICAgPFJvd1xuICAgICAgaGVpZ2h0PXtyb3dIZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgIG9uRG91YmxlQ2xpY2s9e29uRG91YmxlQ2xpY2t9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHtzaG93SW5kZXggJiYgPENvbHVtbiB3aWR0aD17MzB9PntpICsgMX08L0NvbHVtbj59XG4gICAgICB7ISFjb2x1bW5zICYmIGNvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBrZXk9e2Ake3Byb3BzLml0ZW1baWRLZXldfS0ke2NvbHVtbi52YWx1ZUtleX1gfVxuICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9XG4gICAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2x1bW4udXNlVG9vbHRpcCAmJlxuICAgICAgICAgIDxPdmVybGF5VHJpZ2dlciBvdmVybGF5PXt0b29sdGlwKGNvbHVtbiwgcHJvcHMuaXRlbVtpZEtleV0pfSBwbGFjZW1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgICAgIHtnZXRDb250ZW50KGNvbHVtbil9XG4gICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj59XG4gICAgICAgICAgeyFjb2x1bW4udXNlVG9vbHRpcCAmJiBnZXRDb250ZW50KGNvbHVtbil9XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgKSl9XG4gICAgICB7IWhpZGVIYW5kbGUgJiYgPERyYWdIYW5kbGUgey4uLnByb3BzfSAvPn1cbiAgICA8L1Jvdz5cbiAgKTtcbn0pO1xuO1xuXG4iXX0=