'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n  background: ', '\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n  background: ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  border: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid ', ';\n'], ['\n  border-right: 1px solid ', ';\n']);

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
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey4;
});

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.colors.grey7;
});

var HeaderColumn = (0, _styledComponents2.default)(_draggableListColumn2.default)(_templateObject3, function (props) {
  return props.theme.colors.grey7;
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
      _react2.default.createElement(_draggableListSortableContainer2.default, _extends({}, this.props, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsImdyZXk0IiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyQ29sdW1uIiwiQ29sdW1uIiwiRHJhZ2dhYmxlTGlzdCIsIm9uU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJvbkNoYW5nZSIsIml0ZW1zIiwibmV3SXRlbXMiLCJvblJvd1NlbGVjdCIsImlkIiwic2V0U3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJvblJvd0RvdWJsZUNsaWNrIiwic3RhdGUiLCJyZW5kZXIiLCJjb2x1bW5zIiwicm93SGVpZ2h0Iiwic2hvd0luZGV4IiwiZGlzYWJsZWQiLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZEtleSIsImxpc3RIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBRkE7OztBQUlBLElBQU1BLFNBQVNDLDJCQUFPQyxNQUFoQixrQkFFTTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZOLEVBSXVCO0FBQUEsU0FBU0QsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUE1QjtBQUFBLENBSnZCLEVBS1U7QUFBQSxTQUFTSixNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEtBQTVCO0FBQUEsQ0FMVixDQUFOOztBQVFBLElBQU1DLFlBQVlSLDJCQUFPUyxHQUFuQixtQkFFZ0I7QUFBQSxTQUFTUCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQTVCO0FBQUEsQ0FGaEIsQ0FBTjs7QUFLQSxJQUFNSSxlQUFlLGdDQUFPQyw2QkFBUCxDQUFmLG1CQUNzQjtBQUFBLFNBQVNULE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBNUI7QUFBQSxDQUR0QixDQUFOO0lBR3FCTSxhOzs7QUEyQm5CLHlCQUFZVixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CVyxTQVBtQixHQU9QLGdCQUE0QjtBQUFBLFVBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxVQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSx3QkFDVixNQUFLYixLQURLO0FBQUEsVUFDOUJjLFFBRDhCLGVBQzlCQSxRQUQ4QjtBQUFBLFVBQ3BCQyxLQURvQixlQUNwQkEsS0FEb0I7O0FBRXRDLFVBQU1DLFdBQVcsaUNBQVVELEtBQVYsRUFBaUJILFFBQWpCLEVBQTJCQyxRQUEzQixDQUFqQjtBQUNBQyxlQUFTRSxRQUFUO0FBQ0QsS0FYa0I7O0FBQUEsVUFhbkJDLFdBYm1CLEdBYUwsVUFBQ0MsRUFBRCxFQUFRO0FBQUEsVUFDWkQsV0FEWSxHQUNJLE1BQUtqQixLQURULENBQ1ppQixXQURZOztBQUVwQixZQUFLRSxRQUFMLENBQWMsRUFBRUMsY0FBY0YsRUFBaEIsRUFBZCxFQUFvQyxZQUFNO0FBQ3hDRCxvQkFBWUMsRUFBWjtBQUNELE9BRkQ7QUFHRCxLQWxCa0I7O0FBQUEsVUFvQm5CRyxnQkFwQm1CLEdBb0JBLFVBQUNILEVBQUQsRUFBUTtBQUFBLFVBQ2pCRyxnQkFEaUIsR0FDSSxNQUFLckIsS0FEVCxDQUNqQnFCLGdCQURpQjs7QUFFekJBLHVCQUFpQkgsRUFBakI7QUFDRCxLQXZCa0I7O0FBRWpCLFVBQUtJLEtBQUwsR0FBYTtBQUNYRixvQkFBYztBQURILEtBQWI7QUFGaUI7QUFLbEI7OzBCQW9CREcsTSxxQkFBUztBQUFBLGlCQUdILEtBQUt2QixLQUhGO0FBQUEsUUFFTHdCLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlDLFNBRkosVUFFSUEsU0FGSjtBQUFBLFFBRWVDLFNBRmYsVUFFZUEsU0FGZjtBQUFBLFFBRTBCQyxRQUYxQixVQUUwQkEsUUFGMUI7O0FBSVAsV0FDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFO0FBQUMsY0FBRDtBQUFBLFVBQVEsUUFBUUYsU0FBaEI7QUFDR0MscUJBQWE7QUFBQyxzQkFBRDtBQUFBLFlBQWMsT0FBTyxFQUFyQjtBQUFBO0FBQUEsU0FEaEI7QUFFR0YsbUJBQVdBLFFBQVFJLEdBQVIsQ0FBWTtBQUFBLGlCQUN0QjtBQUFDLHdCQUFEO0FBQUE7QUFDRSxtQkFBS0MsT0FBT0MsUUFEZDtBQUVFLHFCQUFPRCxPQUFPRSxLQUZoQjtBQUdFLHlCQUFXRixPQUFPRyxTQUFQLElBQW9CO0FBSGpDO0FBS0U7QUFBQTtBQUFBO0FBQU9ILHFCQUFPSTtBQUFkO0FBTEYsV0FEc0I7QUFBQSxTQUFaO0FBRmQsT0FERjtBQWFFLG9DQUFDLHdDQUFELGVBQ00sS0FBS2pDLEtBRFg7QUFFRSxzQkFBYyxLQUFLc0IsS0FBTCxDQUFXRixZQUYzQjtBQUdFLG1CQUFXLEtBQUtULFNBSGxCO0FBSUUscUJBQWEsS0FBS00sV0FKcEI7QUFLRSwwQkFBa0IsS0FBS0ksZ0JBTHpCO0FBTUUsMkJBTkY7QUFPRSxrQkFBVU07QUFQWjtBQWJGLEtBREY7QUF5QkQsRzs7O0VBakZ3Q08sZ0JBQU1DLGEsVUFjeENDLFksR0FBZTtBQUNwQm5CLGVBQWEsdUJBQU0sQ0FDbEIsQ0FGbUI7QUFHcEJJLG9CQUFrQiw0QkFBTSxDQUN2QixDQUptQjtBQUtwQk4sU0FBTyxFQUxhO0FBTXBCc0IsU0FBTyxJQU5hO0FBT3BCWixhQUFXLEVBUFM7QUFRcEJhLGNBQVksR0FSUTtBQVNwQlosYUFBVyxLQVRTO0FBVXBCQyxZQUFVO0FBVlUsQztrQkFkSGpCLGEiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lciBmcm9tICcuL2RyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2RyYWdnYWJsZS1saXN0LWNvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaXN0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2hvd0luZGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblJvd1NlbGVjdDogKCkgPT4ge1xuICAgIH0sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge1xuICAgIH0sXG4gICAgaXRlbXM6IFtdLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHJvd0hlaWdodDogNDAsXG4gICAgbGlzdEhlaWdodDogNjAwLFxuICAgIHNob3dJbmRleDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBhcnJheU1vdmUoaXRlbXMsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgb25DaGFuZ2UobmV3SXRlbXMpO1xuICB9O1xuXG4gIG9uUm93U2VsZWN0ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBvblJvd1NlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBpZCB9LCAoKSA9PiB7XG4gICAgICBvblJvd1NlbGVjdChpZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25Sb3dEb3VibGVDbGljayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgb25Sb3dEb3VibGVDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0RvdWJsZUNsaWNrKGlkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1ucywgcm93SGVpZ2h0LCBzaG93SW5kZXgsIGRpc2FibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIGhlaWdodD17cm93SGVpZ2h0fT5cbiAgICAgICAgICB7c2hvd0luZGV4ICYmIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezMwfT4jPC9IZWFkZXJDb2x1bW4+fVxuICAgICAgICAgIHtjb2x1bW5zICYmIGNvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICA8SGVhZGVyQ29sdW1uXG4gICAgICAgICAgICAgIGtleT17Y29sdW1uLnZhbHVlS2V5fVxuICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lclxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgIHNlbGVjdGVkSXRlbT17dGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW19XG4gICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLm9uU29ydEVuZH1cbiAgICAgICAgICBvblJvd1NlbGVjdD17dGhpcy5vblJvd1NlbGVjdH1cbiAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXt0aGlzLm9uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgICAgdXNlRHJhZ0hhbmRsZVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==