'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  height: 100%;\n  border: 1px solid ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid ', ';\n'], ['\n  border-right: 1px solid ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require('react-sortable-hoc');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _draggableListSortableContainer = require('./draggable-list-sortable-container.component');

var _draggableListSortableContainer2 = _interopRequireDefault(_draggableListSortableContainer);

var _draggableListColumn = require('./draggable-list-column.component');

var _draggableListColumn2 = _interopRequireDefault(_draggableListColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Header = _styledComponents2.default.header(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
});

var List = (0, _styledComponents2.default)(_draggableListSortableContainer2.default)(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.colors.colorGridBorder;
});

var HeaderColumn = (0, _styledComponents2.default)(_draggableListColumn2.default)(_templateObject4, function (props) {
  return props.theme.colors.colorGridBorder;
});
var DraggableList = (_temp = _class = function (_React$PureComponent) {
  _inherits(DraggableList, _React$PureComponent);

  function DraggableList(props) {
    _classCallCheck(this, DraggableList);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onSortEnd = function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          items = _this$props.items;

      var newItems = (0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex);
      onChange(newItems);
    };

    _this.onRowSelect = function (id) {
      var onRowSelect = _this.props.onRowSelect;

      _this.setState({ selectedItem: id }, function () {
        onRowSelect(id);
      });
    };

    _this.state = {
      selectedItem: null
    };
    return _this;
  }

  DraggableList.prototype.render = function render() {
    var _props = this.props,
        columns = _props.columns,
        rowHeight = _props.rowHeight,
        showIndex = _props.showIndex,
        disabled = _props.disabled;

    return _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Header,
        { height: rowHeight },
        showIndex && _react2.default.createElement(
          HeaderColumn,
          { width: 30 },
          '#'
        ),
        columns && columns.map(function (column) {
          return _react2.default.createElement(
            HeaderColumn,
            {
              key: column.valueKey,
              width: column.width,
              alignment: column.alignment || 'flex-start'
            },
            _react2.default.createElement(
              'span',
              null,
              column.title
            )
          );
        })
      ),
      _react2.default.createElement(List, _extends({}, this.props, {
        selectedItem: this.state.selectedItem,
        onSortEnd: this.onSortEnd,
        onRowSelect: this.onRowSelect,
        useDragHandle: true,
        disabled: disabled
      }))
    );
  };

  return DraggableList;
}(_react2.default.PureComponent), _class.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  onChange: _propTypes2.default.func.isRequired,
  onRowSelect: _propTypes2.default.func,
  idKey: _propTypes2.default.string,
  rowHeight: _propTypes2.default.number,
  listHeight: _propTypes2.default.number,
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  showIndex: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
}, _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
exports.default = DraggableList;