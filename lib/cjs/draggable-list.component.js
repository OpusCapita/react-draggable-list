'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  border: 1px solid ', ';\n']),
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

    _this.onRowDoubleClick = function (id) {
      var onRowDoubleClick = _this.props.onRowDoubleClick;

      onRowDoubleClick(id);
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
        onRowDoubleClick: this.onRowDoubleClick,
        useDragHandle: true,
        disabled: disabled
      }))
    );
  };

  return DraggableList;
}(_react2.default.PureComponent), _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
exports.default = DraggableList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJjb2xvckdyaWRCb3JkZXIiLCJMaXN0IiwiRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyQ29sdW1uIiwiQ29sdW1uIiwiRHJhZ2dhYmxlTGlzdCIsIm9uU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJvbkNoYW5nZSIsIml0ZW1zIiwibmV3SXRlbXMiLCJvblJvd1NlbGVjdCIsImlkIiwic2V0U3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJvblJvd0RvdWJsZUNsaWNrIiwic3RhdGUiLCJyZW5kZXIiLCJjb2x1bW5zIiwicm93SGVpZ2h0Iiwic2hvd0luZGV4IiwiZGlzYWJsZWQiLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZEtleSIsImxpc3RIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxTQUFTQywyQkFBT0MsTUFBaEIsa0JBRU07QUFBQSxTQUFTQyxNQUFNQyxNQUFmO0FBQUEsQ0FGTixFQUl1QjtBQUFBLFNBQVNELE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsZUFBNUI7QUFBQSxDQUp2QixDQUFOOztBQU9BLElBQU1DLE9BQU8sZ0NBQU9DLHdDQUFQLENBQVAsa0JBQU47O0FBSUEsSUFBTUMsWUFBWVQsMkJBQU9VLEdBQW5CLG1CQUVnQjtBQUFBLFNBQVNSLE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsZUFBNUI7QUFBQSxDQUZoQixDQUFOOztBQUtBLElBQU1LLGVBQWUsZ0NBQU9DLDZCQUFQLENBQWYsbUJBQ3NCO0FBQUEsU0FBU1YsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBRHRCLENBQU47SUFHcUJPLGE7OztBQTJCbkIseUJBQVlYLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFPbkJZLFNBUG1CLEdBT1AsZ0JBQTRCO0FBQUEsVUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLFVBQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLHdCQUNWLE1BQUtkLEtBREs7QUFBQSxVQUM5QmUsUUFEOEIsZUFDOUJBLFFBRDhCO0FBQUEsVUFDcEJDLEtBRG9CLGVBQ3BCQSxLQURvQjs7QUFFdEMsVUFBTUMsV0FBVyxpQ0FBVUQsS0FBVixFQUFpQkgsUUFBakIsRUFBMkJDLFFBQTNCLENBQWpCO0FBQ0FDLGVBQVNFLFFBQVQ7QUFDRCxLQVhrQjs7QUFBQSxVQWFuQkMsV0FibUIsR0FhTCxVQUFDQyxFQUFELEVBQVE7QUFBQSxVQUNaRCxXQURZLEdBQ0ksTUFBS2xCLEtBRFQsQ0FDWmtCLFdBRFk7O0FBRXBCLFlBQUtFLFFBQUwsQ0FBYyxFQUFFQyxjQUFjRixFQUFoQixFQUFkLEVBQW9DLFlBQU07QUFDeENELG9CQUFZQyxFQUFaO0FBQ0QsT0FGRDtBQUdELEtBbEJrQjs7QUFBQSxVQW9CbkJHLGdCQXBCbUIsR0FvQkEsVUFBQ0gsRUFBRCxFQUFRO0FBQUEsVUFDakJHLGdCQURpQixHQUNJLE1BQUt0QixLQURULENBQ2pCc0IsZ0JBRGlCOztBQUV6QkEsdUJBQWlCSCxFQUFqQjtBQUNELEtBdkJrQjs7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hGLG9CQUFjO0FBREgsS0FBYjtBQUZpQjtBQUtsQjs7MEJBb0JERyxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS3hCLEtBSEY7QUFBQSxRQUVMeUIsT0FGSyxVQUVMQSxPQUZLO0FBQUEsUUFFSUMsU0FGSixVQUVJQSxTQUZKO0FBQUEsUUFFZUMsU0FGZixVQUVlQSxTQUZmO0FBQUEsUUFFMEJDLFFBRjFCLFVBRTBCQSxRQUYxQjs7QUFJUCxXQUNFO0FBQUMsZUFBRDtBQUFBO0FBQ0U7QUFBQyxjQUFEO0FBQUEsVUFBUSxRQUFRRixTQUFoQjtBQUNHQyxxQkFBYTtBQUFDLHNCQUFEO0FBQUEsWUFBYyxPQUFPLEVBQXJCO0FBQUE7QUFBQSxTQURoQjtBQUVHRixtQkFBV0EsUUFBUUksR0FBUixDQUFZO0FBQUEsaUJBQ3RCO0FBQUMsd0JBQUQ7QUFBQTtBQUNFLG1CQUFLQyxPQUFPQyxRQURkO0FBRUUscUJBQU9ELE9BQU9FLEtBRmhCO0FBR0UseUJBQVdGLE9BQU9HLFNBQVAsSUFBb0I7QUFIakM7QUFLRTtBQUFBO0FBQUE7QUFBT0gscUJBQU9JO0FBQWQ7QUFMRixXQURzQjtBQUFBLFNBQVo7QUFGZCxPQURGO0FBYUUsb0NBQUMsSUFBRCxlQUNNLEtBQUtsQyxLQURYO0FBRUUsc0JBQWMsS0FBS3VCLEtBQUwsQ0FBV0YsWUFGM0I7QUFHRSxtQkFBVyxLQUFLVCxTQUhsQjtBQUlFLHFCQUFhLEtBQUtNLFdBSnBCO0FBS0UsMEJBQWtCLEtBQUtJLGdCQUx6QjtBQU1FLDJCQU5GO0FBT0Usa0JBQVVNO0FBUFo7QUFiRixLQURGO0FBeUJELEc7OztFQWpGd0NPLGdCQUFNQyxhLFVBY3hDQyxZLEdBQWU7QUFDcEJuQixlQUFhLHVCQUFNLENBQ2xCLENBRm1CO0FBR3BCSSxvQkFBa0IsNEJBQU0sQ0FDdkIsQ0FKbUI7QUFLcEJOLFNBQU8sRUFMYTtBQU1wQnNCLFNBQU8sSUFOYTtBQU9wQlosYUFBVyxFQVBTO0FBUXBCYSxjQUFZLEdBUlE7QUFTcEJaLGFBQVcsS0FUUztBQVVwQkMsWUFBVTtBQVZVLEM7a0JBZEhqQixhIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcnJheU1vdmUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBEcmFnZ2FibGVMaXN0U29ydGFibGVDb250YWluZXIgZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkKERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lcilgXG5cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRCb3JkZXJ9O1xuYDtcblxuY29uc3QgSGVhZGVyQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpc3RIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzaG93SW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uUm93U2VsZWN0OiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7XG4gICAgfSxcbiAgICBpdGVtczogW10sXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgcm93SGVpZ2h0OiA0MCxcbiAgICBsaXN0SGVpZ2h0OiA2MDAsXG4gICAgc2hvd0luZGV4OiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25Tb3J0RW5kID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdJdGVtcyA9IGFycmF5TW92ZShpdGVtcywgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICBvbkNoYW5nZShuZXdJdGVtcyk7XG4gIH07XG5cbiAgb25Sb3dTZWxlY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IG9uUm93U2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGlkIH0sICgpID0+IHtcbiAgICAgIG9uUm93U2VsZWN0KGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBvblJvd0RvdWJsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBvblJvd0RvdWJsZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2soaWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5zLCByb3dIZWlnaHQsIHNob3dJbmRleCwgZGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgaGVpZ2h0PXtyb3dIZWlnaHR9PlxuICAgICAgICAgIHtzaG93SW5kZXggJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzB9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgICAge2NvbHVtbnMgJiYgY29sdW1ucy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgIDxIZWFkZXJDb2x1bW5cbiAgICAgICAgICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXl9XG4gICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9XG4gICAgICAgICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntjb2x1bW4udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9IZWFkZXJDb2x1bW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgIHNlbGVjdGVkSXRlbT17dGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW19XG4gICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLm9uU29ydEVuZH1cbiAgICAgICAgICBvblJvd1NlbGVjdD17dGhpcy5vblJvd1NlbGVjdH1cbiAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXt0aGlzLm9uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgICAgdXNlRHJhZ0hhbmRsZVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==