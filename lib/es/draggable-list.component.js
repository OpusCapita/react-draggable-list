var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n  background: ', '\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n  background: ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  border: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid ', ';\n'], ['\n  border-right: 1px solid ', ';\n']);

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
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey4;
});

var Container = styled.div(_templateObject2, function (props) {
  return props.theme.colors.grey7;
});

var HeaderColumn = styled(Column)(_templateObject3, function (props) {
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
      React.createElement(DraggableListSortableContainer, _extends({}, this.props, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlNb3ZlIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIiwiQ29sdW1uIiwiSGVhZGVyIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiZ3JleTQiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJDb2x1bW4iLCJEcmFnZ2FibGVMaXN0Iiwib25Tb3J0RW5kIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJuZXdJdGVtcyIsIm9uUm93U2VsZWN0IiwiaWQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsIm9uUm93RG91YmxlQ2xpY2siLCJzdGF0ZSIsInJlbmRlciIsImNvbHVtbnMiLCJyb3dIZWlnaHQiLCJzaG93SW5kZXgiLCJkaXNhYmxlZCIsIm1hcCIsImNvbHVtbiIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJ0aXRsZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZEtleSIsImxpc3RIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixvQkFBMUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLCtDQUEzQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUNBQW5COztBQUVBLElBQU1DLFNBQVNILE9BQU9JLE1BQWhCLGtCQUVNO0FBQUEsU0FBU0MsTUFBTUMsTUFBZjtBQUFBLENBRk4sRUFJdUI7QUFBQSxTQUFTRCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQTVCO0FB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cEJZLGNBQVksR0FSUTtBQVNwQlgsYUFBVyxLQVRTO0FBVXBCQyxZQUFVO0FBVlUsQztTQWRIakIsYSIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXJyYXlNb3ZlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIGZyb20gJy4vZHJhZ2dhYmxlLWxpc3Qtc29ydGFibGUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vZHJhZ2dhYmxlLWxpc3QtY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fVxuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbmA7XG5cbmNvbnN0IEhlYWRlckNvbHVtbiA9IHN0eWxlZChDb2x1bW4pYFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpc3RIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzaG93SW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uUm93U2VsZWN0OiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7XG4gICAgfSxcbiAgICBpdGVtczogW10sXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgcm93SGVpZ2h0OiA0MCxcbiAgICBsaXN0SGVpZ2h0OiA2MDAsXG4gICAgc2hvd0luZGV4OiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25Tb3J0RW5kID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdJdGVtcyA9IGFycmF5TW92ZShpdGVtcywgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICBvbkNoYW5nZShuZXdJdGVtcyk7XG4gIH07XG5cbiAgb25Sb3dTZWxlY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IG9uUm93U2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGlkIH0sICgpID0+IHtcbiAgICAgIG9uUm93U2VsZWN0KGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBvblJvd0RvdWJsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBvblJvd0RvdWJsZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2soaWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5zLCByb3dIZWlnaHQsIHNob3dJbmRleCwgZGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgaGVpZ2h0PXtyb3dIZWlnaHR9PlxuICAgICAgICAgIHtzaG93SW5kZXggJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzB9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgICAge2NvbHVtbnMgJiYgY29sdW1ucy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgIDxIZWFkZXJDb2x1bW5cbiAgICAgICAgICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXl9XG4gICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9XG4gICAgICAgICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntjb2x1bW4udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9IZWFkZXJDb2x1bW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8RHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyXG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfVxuICAgICAgICAgIG9uUm93U2VsZWN0PXt0aGlzLm9uUm93U2VsZWN0fVxuICAgICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e3RoaXMub25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19