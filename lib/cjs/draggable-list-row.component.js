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
      showIndex = props.showIndex;


  var onClick = function onClick() {
    onRowSelect(item[idKey]);
  };

  return _react2.default.createElement(
    Row,
    { height: rowHeight, className: className, selected: selected, onClick: onClick },
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