var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid #a4afb6;\n  background: #eff2f4;\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid #a4afb6;\n  background: #eff2f4;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid #a4afb6;\n'], ['\n  width: 100%;\n  border: 1px solid #a4afb6;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid #a4afb6;\n'], ['\n  border-right: 1px solid #a4afb6;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import DraggableListSortableContainer from './draggable-list-sortable-container.component';
import Column from './draggable-list-column.component';

var Header = styled.header(_templateObject, function (props) {
  return props.height;
});

var List = styled(DraggableListSortableContainer)(_templateObject2);

var Container = styled.div(_templateObject3);

var HeaderColumn = styled(Column)(_templateObject4);
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

      var newItems = arrayMove(items, oldIndex, newIndex);
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

    return React.createElement(
      Container,
      null,
      React.createElement(
        Header,
        { height: rowHeight },
        showIndex && React.createElement(
          HeaderColumn,
          { width: 30 },
          '#'
        ),
        columns && columns.map(function (column) {
          return React.createElement(
            HeaderColumn,
            {
              key: column.valueKey,
              width: column.width,
              alignment: column.alignment || 'flex-start'
            },
            React.createElement(
              'span',
              null,
              column.title
            )
          );
        })
      ),
      React.createElement(List, _extends({}, this.props, {
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
}(React.PureComponent), _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
export { DraggableList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlNb3ZlIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIiwiQ29sdW1uIiwiSGVhZGVyIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJMaXN0IiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyQ29sdW1uIiwiRHJhZ2dhYmxlTGlzdCIsIm9uU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJvbkNoYW5nZSIsIml0ZW1zIiwibmV3SXRlbXMiLCJvblJvd1NlbGVjdCIsImlkIiwic2V0U3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJvblJvd0RvdWJsZUNsaWNrIiwic3RhdGUiLCJyZW5kZXIiLCJjb2x1bW5zIiwicm93SGVpZ2h0Iiwic2hvd0luZGV4IiwiZGlzYWJsZWQiLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWRLZXkiLCJsaXN0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLG9CQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsT0FBT0MsOEJBQVAsTUFBMkMsK0NBQTNDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQ0FBbkI7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksTUFBaEIsa0JBRU07QUFBQSxTQUFTQyxNQUFNQyxNQUFmO0FBQUEsQ0FGTixDQUFOOztBQVFBLElBQU1DLE9BQU9QLE9BQU9DLDhCQUFQLENBQVAsa0JBQU47O0FBSUEsSUFBTU8sWUFBWVIsT0FBT1MsR0FBbkIsa0JBQU47O0FBS0EsSUFBTUMsZUFBZVYsT0FBT0UsTUFBUCxDQUFmLGtCQUFOO0lBR3FCUyxhOzs7QUEyQm5CLHlCQUFZTixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CTyxTQVBtQixHQU9QLGdCQUE0QjtBQUFBLFVBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxVQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSx3QkFDVixNQUFLVCxLQURLO0FBQUEsVUFDOUJVLFFBRDhCLGVBQzlCQSxRQUQ4QjtBQUFBLFVBQ3BCQyxLQURvQixlQUNwQkEsS0FEb0I7O0FBRXRDLFVBQU1DLFdBQVduQixVQUFVa0IsS0FBVixFQUFpQkgsUUFBakIsRUFBMkJDLFFBQTNCLENBQWpCO0FBQ0FDLGVBQVNFLFFBQVQ7QUFDRCxLQVhrQjs7QUFBQSxVQWFuQkMsV0FibUIsR0FhTCxVQUFDQyxFQUFELEVBQVE7QUFBQSxVQUNaRCxXQURZLEdBQ0ksTUFBS2IsS0FEVCxDQUNaYSxXQURZOztBQUVwQixZQUFLRSxRQUFMLENBQWMsRUFBRUMsY0FBY0YsRUFBaEIsRUFBZCxFQUFvQyxZQUFNO0FBQ3hDRCxvQkFBWUMsRUFBWjtBQUNELE9BRkQ7QUFHRCxLQWxCa0I7O0FBQUEsVUFvQm5CRyxnQkFwQm1CLEdBb0JBLFVBQUNILEVBQUQsRUFBUTtBQUFBLFVBQ2pCRyxnQkFEaUIsR0FDSSxNQUFLakIsS0FEVCxDQUNqQmlCLGdCQURpQjs7QUFFekJBLHVCQUFpQkgsRUFBakI7QUFDRCxLQXZCa0I7O0FBRWpCLFVBQUtJLEtBQUwsR0FBYTtBQUNYRixvQkFBYztBQURILEtBQWI7QUFGaUI7QUFLbEI7OzBCQW9CREcsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtuQixLQUhGO0FBQUEsUUFFTG9CLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlDLFNBRkosVUFFSUEsU0FGSjtBQUFBLFFBRWVDLFNBRmYsVUFFZUEsU0FGZjtBQUFBLFFBRTBCQyxRQUYxQixVQUUwQkEsUUFGMUI7O0FBSVAsV0FDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFO0FBQUMsY0FBRDtBQUFBLFVBQVEsUUFBUUYsU0FBaEI7QUFDR0MscUJBQWE7QUFBQyxzQkFBRDtBQUFBLFlBQWMsT0FBTyxFQUFyQjtBQUFBO0FBQUEsU0FEaEI7QUFFR0YsbUJBQVdBLFFBQVFJLEdBQVIsQ0FBWTtBQUFBLGlCQUN0QjtBQUFDLHdCQUFEO0FBQUE7QUFDRSxtQkFBS0MsT0FBT0MsUUFEZDtBQUVFLHFCQUFPRCxPQUFPRSxLQUZoQjtBQUdFLHlCQUFXRixPQUFPRyxTQUFQLElBQW9CO0FBSGpDO0FBS0U7QUFBQTtBQUFBO0FBQU9ILHFCQUFPSTtBQUFkO0FBTEYsV0FEc0I7QUFBQSxTQUFaO0FBRmQsT0FERjtBQWFFLDBCQUFDLElBQUQsZUFDTSxLQUFLN0IsS0FEWDtBQUVFLHNCQUFjLEtBQUtrQixLQUFMLENBQVdGLFlBRjNCO0FBR0UsbUJBQVcsS0FBS1QsU0FIbEI7QUFJRSxxQkFBYSxLQUFLTSxXQUpwQjtBQUtFLDBCQUFrQixLQUFLSSxnQkFMekI7QUFNRSwyQkFORjtBQU9FLGtCQUFVTTtBQVBaO0FBYkYsS0FERjtBQXlCRCxHOzs7RUFqRndDL0IsTUFBTXNDLGEsVUFjeENDLFksR0FBZTtBQUNwQmxCLGVBQWEsdUJBQU0sQ0FDbEIsQ0FGbUI7QUFHcEJJLG9CQUFrQiw0QkFBTSxDQUN2QixDQUptQjtBQUtwQk4sU0FBTyxFQUxhO0FBTXBCcUIsU0FBTyxJQU5hO0FBT3BCWCxhQUFXLEVBUFM7QUFRcEJZLGNBQVksR0FSUTtBQVNwQlgsYUFBVyxLQVRTO0FBVXBCQyxZQUFVO0FBVlUsQztTQWRIakIsYSIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXJyYXlNb3ZlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIGZyb20gJy4vZHJhZ2dhYmxlLWxpc3Qtc29ydGFibGUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vZHJhZ2dhYmxlLWxpc3QtY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTRhZmI2O1xuICBiYWNrZ3JvdW5kOiAjZWZmMmY0O1xuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZChEcmFnZ2FibGVMaXN0U29ydGFibGVDb250YWluZXIpYFxuXG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E0YWZiNjtcbmA7XG5cbmNvbnN0IEhlYWRlckNvbHVtbiA9IHN0eWxlZChDb2x1bW4pYFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYTRhZmI2O1xuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaXN0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2hvd0luZGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblJvd1NlbGVjdDogKCkgPT4ge1xuICAgIH0sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge1xuICAgIH0sXG4gICAgaXRlbXM6IFtdLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHJvd0hlaWdodDogNDAsXG4gICAgbGlzdEhlaWdodDogNjAwLFxuICAgIHNob3dJbmRleDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBhcnJheU1vdmUoaXRlbXMsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgb25DaGFuZ2UobmV3SXRlbXMpO1xuICB9O1xuXG4gIG9uUm93U2VsZWN0ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBvblJvd1NlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBpZCB9LCAoKSA9PiB7XG4gICAgICBvblJvd1NlbGVjdChpZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25Sb3dEb3VibGVDbGljayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgb25Sb3dEb3VibGVDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0RvdWJsZUNsaWNrKGlkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1ucywgcm93SGVpZ2h0LCBzaG93SW5kZXgsIGRpc2FibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIGhlaWdodD17cm93SGVpZ2h0fT5cbiAgICAgICAgICB7c2hvd0luZGV4ICYmIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezMwfT4jPC9IZWFkZXJDb2x1bW4+fVxuICAgICAgICAgIHtjb2x1bW5zICYmIGNvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICA8SGVhZGVyQ29sdW1uXG4gICAgICAgICAgICAgIGtleT17Y29sdW1uLnZhbHVlS2V5fVxuICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofVxuICAgICAgICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPExpc3RcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBzZWxlY3RlZEl0ZW09e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtfVxuICAgICAgICAgIG9uU29ydEVuZD17dGhpcy5vblNvcnRFbmR9XG4gICAgICAgICAgb25Sb3dTZWxlY3Q9e3RoaXMub25Sb3dTZWxlY3R9XG4gICAgICAgICAgb25Sb3dEb3VibGVDbGljaz17dGhpcy5vblJvd0RvdWJsZUNsaWNrfVxuICAgICAgICAgIHVzZURyYWdIYW5kbGVcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=