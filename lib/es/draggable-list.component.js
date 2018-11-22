var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  border: 1px solid ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-right: 1px solid ', ';\n'], ['\n  border-right: 1px solid ', ';\n']);

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
  return props.theme.colors.colorGridBorder;
});

var List = styled(DraggableListSortableContainer)(_templateObject2);

var Container = styled.div(_templateObject3, function (props) {
  return props.theme.colors.colorGridBorder;
});

var HeaderColumn = styled(Column)(_templateObject4, function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlNb3ZlIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIiwiQ29sdW1uIiwiSGVhZGVyIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImNvbG9yR3JpZEJvcmRlciIsIkxpc3QiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJDb2x1bW4iLCJEcmFnZ2FibGVMaXN0Iiwib25Tb3J0RW5kIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJuZXdJdGVtcyIsIm9uUm93U2VsZWN0IiwiaWQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsIm9uUm93RG91YmxlQ2xpY2siLCJzdGF0ZSIsInJlbmRlciIsImNvbHVtbnMiLCJyb3dIZWlnaHQiLCJzaG93SW5kZXgiLCJkaXNhYmxlZCIsIm1hcCIsImNvbHVtbiIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJ0aXRsZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZEtleSIsImxpc3RIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsb0JBQTFCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0E7QUFDQSxPQUFPQyw4QkFBUCxNQUEyQywrQ0FBM0M7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1DQUFuQjs7QUFFQSxJQUFNQyxTQUFTSCxPQUFPSSxNQUFoQixrQkFFTTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZOLEVBSXVCO0FBQUEsU0FBU0QsTUFBTUUsS0FBTixDQUFZQyxNQUFaLENBQW1C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UlE7QUFTcEJYLGFBQVcsS0FUUztBQVVwQkMsWUFBVTtBQVZVLEM7U0FkSGpCLGEiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lciBmcm9tICcuL2RyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2RyYWdnYWJsZS1saXN0LWNvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbmA7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQoRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyKWBcblxuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNob3dJbmRleDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25Sb3dTZWxlY3Q6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGl0ZW1zOiBbXSxcbiAgICBpZEtleTogJ2lkJyxcbiAgICByb3dIZWlnaHQ6IDQwLFxuICAgIGxpc3RIZWlnaHQ6IDYwMCxcbiAgICBzaG93SW5kZXg6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlNb3ZlKGl0ZW1zLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKTtcbiAgfTtcblxuICBvblJvd1NlbGVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgb25Sb3dTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogaWQgfSwgKCkgPT4ge1xuICAgICAgb25Sb3dTZWxlY3QoaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uUm93RG91YmxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IG9uUm93RG91YmxlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhpZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsIHJvd0hlaWdodCwgc2hvd0luZGV4LCBkaXNhYmxlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciBoZWlnaHQ9e3Jvd0hlaWdodH0+XG4gICAgICAgICAge3Nob3dJbmRleCAmJiA8SGVhZGVyQ29sdW1uIHdpZHRoPXszMH0+IzwvSGVhZGVyQ29sdW1uPn1cbiAgICAgICAgICB7Y29sdW1ucyAmJiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgPEhlYWRlckNvbHVtblxuICAgICAgICAgICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH1cbiAgICAgICAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L0hlYWRlckNvbHVtbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfVxuICAgICAgICAgIG9uUm93U2VsZWN0PXt0aGlzLm9uUm93U2VsZWN0fVxuICAgICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e3RoaXMub25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19