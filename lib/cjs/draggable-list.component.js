'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid #a4afb6;\n  background: #eff2f4;\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid #a4afb6;\n  background: #eff2f4;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid #a4afb6;\n'], ['\n  width: 100%;\n  border: 1px solid #a4afb6;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid #a4afb6;\n'], ['\n  border-right: 1px solid #a4afb6;\n']);

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
});

var List = (0, _styledComponents2.default)(_draggableListSortableContainer2.default)(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3);

var HeaderColumn = (0, _styledComponents2.default)(_draggableListColumn2.default)(_templateObject4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwiTGlzdCIsIkRyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lciIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlckNvbHVtbiIsIkNvbHVtbiIsIkRyYWdnYWJsZUxpc3QiLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4Iiwib25DaGFuZ2UiLCJpdGVtcyIsIm5ld0l0ZW1zIiwib25Sb3dTZWxlY3QiLCJpZCIsInNldFN0YXRlIiwic2VsZWN0ZWRJdGVtIiwib25Sb3dEb3VibGVDbGljayIsInN0YXRlIiwicmVuZGVyIiwiY29sdW1ucyIsInJvd0hlaWdodCIsInNob3dJbmRleCIsImRpc2FibGVkIiwibWFwIiwiY29sdW1uIiwidmFsdWVLZXkiLCJ3aWR0aCIsImFsaWdubWVudCIsInRpdGxlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWRLZXkiLCJsaXN0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFGQTs7O0FBSUEsSUFBTUEsU0FBU0MsMkJBQU9DLE1BQWhCLGtCQUVNO0FBQUEsU0FBU0MsTUFBTUMsTUFBZjtBQUFBLENBRk4sQ0FBTjs7QUFRQSxJQUFNQyxPQUFPLGdDQUFPQyx3Q0FBUCxDQUFQLGtCQUFOOztBQUlBLElBQU1DLFlBQVlOLDJCQUFPTyxHQUFuQixrQkFBTjs7QUFLQSxJQUFNQyxlQUFlLGdDQUFPQyw2QkFBUCxDQUFmLGtCQUFOO0lBR3FCQyxhOzs7QUEyQm5CLHlCQUFZUixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CUyxTQVBtQixHQU9QLGdCQUE0QjtBQUFBLFVBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxVQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSx3QkFDVixNQUFLWCxLQURLO0FBQUEsVUFDOUJZLFFBRDhCLGVBQzlCQSxRQUQ4QjtBQUFBLFVBQ3BCQyxLQURvQixlQUNwQkEsS0FEb0I7O0FBRXRDLFVBQU1DLFdBQVcsaUNBQVVELEtBQVYsRUFBaUJILFFBQWpCLEVBQTJCQyxRQUEzQixDQUFqQjtBQUNBQyxlQUFTRSxRQUFUO0FBQ0QsS0FYa0I7O0FBQUEsVUFhbkJDLFdBYm1CLEdBYUwsVUFBQ0MsRUFBRCxFQUFRO0FBQUEsVUFDWkQsV0FEWSxHQUNJLE1BQUtmLEtBRFQsQ0FDWmUsV0FEWTs7QUFFcEIsWUFBS0UsUUFBTCxDQUFjLEVBQUVDLGNBQWNGLEVBQWhCLEVBQWQsRUFBb0MsWUFBTTtBQUN4Q0Qsb0JBQVlDLEVBQVo7QUFDRCxPQUZEO0FBR0QsS0FsQmtCOztBQUFBLFVBb0JuQkcsZ0JBcEJtQixHQW9CQSxVQUFDSCxFQUFELEVBQVE7QUFBQSxVQUNqQkcsZ0JBRGlCLEdBQ0ksTUFBS25CLEtBRFQsQ0FDakJtQixnQkFEaUI7O0FBRXpCQSx1QkFBaUJILEVBQWpCO0FBQ0QsS0F2QmtCOztBQUVqQixVQUFLSSxLQUFMLEdBQWE7QUFDWEYsb0JBQWM7QUFESCxLQUFiO0FBRmlCO0FBS2xCOzswQkFvQkRHLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLckIsS0FIRjtBQUFBLFFBRUxzQixPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJQyxTQUZKLFVBRUlBLFNBRko7QUFBQSxRQUVlQyxTQUZmLFVBRWVBLFNBRmY7QUFBQSxRQUUwQkMsUUFGMUIsVUFFMEJBLFFBRjFCOztBQUlQLFdBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDRTtBQUFDLGNBQUQ7QUFBQSxVQUFRLFFBQVFGLFNBQWhCO0FBQ0dDLHFCQUFhO0FBQUMsc0JBQUQ7QUFBQSxZQUFjLE9BQU8sRUFBckI7QUFBQTtBQUFBLFNBRGhCO0FBRUdGLG1CQUFXQSxRQUFRSSxHQUFSLENBQVk7QUFBQSxpQkFDdEI7QUFBQyx3QkFBRDtBQUFBO0FBQ0UsbUJBQUtDLE9BQU9DLFFBRGQ7QUFFRSxxQkFBT0QsT0FBT0UsS0FGaEI7QUFHRSx5QkFBV0YsT0FBT0csU0FBUCxJQUFvQjtBQUhqQztBQUtFO0FBQUE7QUFBQTtBQUFPSCxxQkFBT0k7QUFBZDtBQUxGLFdBRHNCO0FBQUEsU0FBWjtBQUZkLE9BREY7QUFhRSxvQ0FBQyxJQUFELGVBQ00sS0FBSy9CLEtBRFg7QUFFRSxzQkFBYyxLQUFLb0IsS0FBTCxDQUFXRixZQUYzQjtBQUdFLG1CQUFXLEtBQUtULFNBSGxCO0FBSUUscUJBQWEsS0FBS00sV0FKcEI7QUFLRSwwQkFBa0IsS0FBS0ksZ0JBTHpCO0FBTUUsMkJBTkY7QUFPRSxrQkFBVU07QUFQWjtBQWJGLEtBREY7QUF5QkQsRzs7O0VBakZ3Q08sZ0JBQU1DLGEsVUFjeENDLFksR0FBZTtBQUNwQm5CLGVBQWEsdUJBQU0sQ0FDbEIsQ0FGbUI7QUFHcEJJLG9CQUFrQiw0QkFBTSxDQUN2QixDQUptQjtBQUtwQk4sU0FBTyxFQUxhO0FBTXBCc0IsU0FBTyxJQU5hO0FBT3BCWixhQUFXLEVBUFM7QUFRcEJhLGNBQVksR0FSUTtBQVNwQlosYUFBVyxLQVRTO0FBVXBCQyxZQUFVO0FBVlUsQztrQkFkSGpCLGEiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lciBmcm9tICcuL2RyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2RyYWdnYWJsZS1saXN0LWNvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E0YWZiNjtcbiAgYmFja2dyb3VuZDogI2VmZjJmNDtcbmA7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQoRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyKWBcblxuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNGFmYjY7XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2E0YWZiNjtcbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNob3dJbmRleDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25Sb3dTZWxlY3Q6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGl0ZW1zOiBbXSxcbiAgICBpZEtleTogJ2lkJyxcbiAgICByb3dIZWlnaHQ6IDQwLFxuICAgIGxpc3RIZWlnaHQ6IDYwMCxcbiAgICBzaG93SW5kZXg6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlNb3ZlKGl0ZW1zLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKTtcbiAgfTtcblxuICBvblJvd1NlbGVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgb25Sb3dTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogaWQgfSwgKCkgPT4ge1xuICAgICAgb25Sb3dTZWxlY3QoaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uUm93RG91YmxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IG9uUm93RG91YmxlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhpZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsIHJvd0hlaWdodCwgc2hvd0luZGV4LCBkaXNhYmxlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciBoZWlnaHQ9e3Jvd0hlaWdodH0+XG4gICAgICAgICAge3Nob3dJbmRleCAmJiA8SGVhZGVyQ29sdW1uIHdpZHRoPXszMH0+IzwvSGVhZGVyQ29sdW1uPn1cbiAgICAgICAgICB7Y29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgPEhlYWRlckNvbHVtblxuICAgICAgICAgICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH1cbiAgICAgICAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L0hlYWRlckNvbHVtbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfVxuICAgICAgICAgIG9uUm93U2VsZWN0PXt0aGlzLm9uUm93U2VsZWN0fVxuICAgICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e3RoaXMub25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19