'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  display: flex;\n  border-right: 1px solid ', ';\n  padding: 0 ', ';\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  display: flex;\n  border-right: 1px solid ', ';\n  padding: 0 ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require('react-sortable-hoc');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _draggableListSortableContainer = require('./draggable-list-sortable-container.component');

var _draggableListSortableContainer2 = _interopRequireDefault(_draggableListSortableContainer);

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
}, function (props) {
  return props.theme.colors.colorGridBorder;
});

var HeaderColumn = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.theme.halfGutterWidth;
});
var List = (0, _styledComponents2.default)(_draggableListSortableContainer2.default)(_templateObject3);
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
      'div',
      null,
      _react2.default.createElement(
        Header,
        { height: rowHeight },
        showIndex && _react2.default.createElement(
          HeaderColumn,
          { width: 30 },
          '#'
        ),
        columns.map(function (column) {
          return _react2.default.createElement(
            HeaderColumn,
            { key: column.valueKey, width: column.width },
            column.title
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
}(_react2.default.PureComponent), _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
exports.default = DraggableList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJjb2xvckdyaWRCb3JkZXIiLCJIZWFkZXJDb2x1bW4iLCJkaXYiLCJ3aWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkxpc3QiLCJEcmFnZ2FibGVMaXN0U29ydGFibGVDb250YWluZXIiLCJEcmFnZ2FibGVMaXN0Iiwib25Tb3J0RW5kIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJuZXdJdGVtcyIsIm9uUm93U2VsZWN0IiwiaWQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsInN0YXRlIiwicmVuZGVyIiwiY29sdW1ucyIsInJvd0hlaWdodCIsInNob3dJbmRleCIsImRpc2FibGVkIiwibWFwIiwiY29sdW1uIiwidmFsdWVLZXkiLCJ0aXRsZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImlkS2V5IiwibGlzdEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBREE7OztBQUdBLElBQU1BLFNBQVNDLDJCQUFPQyxNQUFoQixrQkFFTTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZOLEVBSW9CO0FBQUEsU0FBU0QsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBSnBCLEVBS3VCO0FBQUEsU0FBU0osTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBTHZCLENBQU47O0FBUUEsSUFBTUMsZUFBZVAsMkJBQU9RLEdBQXRCLG1CQUNTO0FBQUEsU0FBU04sTUFBTU8sS0FBZjtBQUFBLENBRFQsRUFFSztBQUFBLFNBQVNQLE1BQU1PLEtBQWY7QUFBQSxDQUZMLEVBS3NCO0FBQUEsU0FBU1AsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQUE1QjtBQUFBLENBTHRCLEVBTVM7QUFBQSxTQUFTSixNQUFNRSxLQUFOLENBQVlNLGVBQXJCO0FBQUEsQ0FOVCxDQUFOO0FBUUEsSUFBTUMsT0FBTyxnQ0FBT0Msd0NBQVAsQ0FBUCxrQkFBTjtJQUdxQkMsYTs7O0FBd0JuQix5QkFBWVgsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQU9uQlksU0FQbUIsR0FPUCxnQkFBNEI7QUFBQSxVQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsVUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQUEsd0JBQ1YsTUFBS2QsS0FESztBQUFBLFVBQzlCZSxRQUQ4QixlQUM5QkEsUUFEOEI7QUFBQSxVQUNwQkMsS0FEb0IsZUFDcEJBLEtBRG9COztBQUV0QyxVQUFNQyxXQUFXLGlDQUFVRCxLQUFWLEVBQWlCSCxRQUFqQixFQUEyQkMsUUFBM0IsQ0FBakI7QUFDQUMsZUFBU0UsUUFBVDtBQUNELEtBWGtCOztBQUFBLFVBYW5CQyxXQWJtQixHQWFMLFVBQUNDLEVBQUQsRUFBUTtBQUFBLFVBQ1pELFdBRFksR0FDSSxNQUFLbEIsS0FEVCxDQUNaa0IsV0FEWTs7QUFFcEIsWUFBS0UsUUFBTCxDQUFjLEVBQUVDLGNBQWNGLEVBQWhCLEVBQWQsRUFBb0MsWUFBTTtBQUN4Q0Qsb0JBQVlDLEVBQVo7QUFDRCxPQUZEO0FBR0QsS0FsQmtCOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFDWEQsb0JBQWM7QUFESCxLQUFiO0FBRmlCO0FBS2xCOzswQkFlREUsTSxxQkFBUztBQUFBLGlCQUdILEtBQUt2QixLQUhGO0FBQUEsUUFFTHdCLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlDLFNBRkosVUFFSUEsU0FGSjtBQUFBLFFBRWVDLFNBRmYsVUFFZUEsU0FGZjtBQUFBLFFBRTBCQyxRQUYxQixVQUUwQkEsUUFGMUI7O0FBSVAsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGNBQUQ7QUFBQSxVQUFRLFFBQVFGLFNBQWhCO0FBQ0dDLHFCQUFhO0FBQUMsc0JBQUQ7QUFBQSxZQUFjLE9BQU8sRUFBckI7QUFBQTtBQUFBLFNBRGhCO0FBRUdGLGdCQUFRSSxHQUFSLENBQVk7QUFBQSxpQkFDWDtBQUFDLHdCQUFEO0FBQUEsY0FBYyxLQUFLQyxPQUFPQyxRQUExQixFQUFvQyxPQUFPRCxPQUFPdEIsS0FBbEQ7QUFBMERzQixtQkFBT0U7QUFBakUsV0FEVztBQUFBLFNBQVo7QUFGSCxPQURGO0FBT0Usb0NBQUMsSUFBRCxlQUNNLEtBQUsvQixLQURYO0FBRUUsc0JBQWMsS0FBS3NCLEtBQUwsQ0FBV0QsWUFGM0I7QUFHRSxtQkFBVyxLQUFLVCxTQUhsQjtBQUlFLHFCQUFhLEtBQUtNLFdBSnBCO0FBS0UsMkJBTEY7QUFNRSxrQkFBVVM7QUFOWjtBQVBGLEtBREY7QUFrQkQsRzs7O0VBbEV3Q0ssZ0JBQU1DLGEsVUFheENDLFksR0FBZTtBQUNwQmhCLGVBQWEsdUJBQU0sQ0FDbEIsQ0FGbUI7QUFHcEJGLFNBQU8sRUFIYTtBQUlwQm1CLFNBQU8sSUFKYTtBQUtwQlYsYUFBVyxFQUxTO0FBTXBCVyxjQUFZLEdBTlE7QUFPcEJWLGFBQVcsS0FQUztBQVFwQkMsWUFBVTtBQVJVLEM7a0JBYkhoQixhIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcnJheU1vdmUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBEcmFnZ2FibGVMaXN0U29ydGFibGVDb250YWluZXIgZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRCb3JkZXJ9O1xuYDtcblxuY29uc3QgSGVhZGVyQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbiAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuY29uc3QgTGlzdCA9IHN0eWxlZChEcmFnZ2FibGVMaXN0U29ydGFibGVDb250YWluZXIpYFxuXG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpc3RIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzaG93SW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uUm93U2VsZWN0OiAoKSA9PiB7XG4gICAgfSxcbiAgICBpdGVtczogW10sXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgcm93SGVpZ2h0OiA0MCxcbiAgICBsaXN0SGVpZ2h0OiA2MDAsXG4gICAgc2hvd0luZGV4OiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25Tb3J0RW5kID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdJdGVtcyA9IGFycmF5TW92ZShpdGVtcywgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICBvbkNoYW5nZShuZXdJdGVtcyk7XG4gIH07XG5cbiAgb25Sb3dTZWxlY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IG9uUm93U2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGlkIH0sICgpID0+IHtcbiAgICAgIG9uUm93U2VsZWN0KGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1ucywgcm93SGVpZ2h0LCBzaG93SW5kZXgsIGRpc2FibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIGhlaWdodD17cm93SGVpZ2h0fT5cbiAgICAgICAgICB7c2hvd0luZGV4ICYmIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezMwfT4jPC9IZWFkZXJDb2x1bW4+fVxuICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgPEhlYWRlckNvbHVtbiBrZXk9e2NvbHVtbi52YWx1ZUtleX0gd2lkdGg9e2NvbHVtbi53aWR0aH0+e2NvbHVtbi50aXRsZX08L0hlYWRlckNvbHVtbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfVxuICAgICAgICAgIG9uUm93U2VsZWN0PXt0aGlzLm9uUm93U2VsZWN0fVxuICAgICAgICAgIHVzZURyYWdIYW5kbGVcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=