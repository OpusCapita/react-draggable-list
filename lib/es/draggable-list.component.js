var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  display: flex;\n  border-right: 1px solid ', ';\n  padding: 0 ', ';\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  display: flex;\n  border-right: 1px solid ', ';\n  padding: 0 ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']);

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

var Header = styled.header(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.theme.colors.colorGridBorder;
});

var HeaderColumn = styled.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.colorGridBorder;
}, function (props) {
  return props.theme.halfGutterWidth;
});
var List = styled(DraggableListSortableContainer)(_templateObject3);
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
      'div',
      null,
      React.createElement(
        Header,
        { height: rowHeight },
        showIndex && React.createElement(
          HeaderColumn,
          { width: 30 },
          '#'
        ),
        columns.map(function (column) {
          return React.createElement(
            HeaderColumn,
            { key: column.valueKey, width: column.width },
            column.title
          );
        })
      ),
      React.createElement(List, _extends({}, this.props, {
        selectedItem: this.state.selectedItem,
        onSortEnd: this.onSortEnd,
        onRowSelect: this.onRowSelect,
        useDragHandle: true,
        disabled: disabled
      }))
    );
  };

  return DraggableList;
}(React.PureComponent), _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
export { DraggableList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlNb3ZlIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRHJhZ2dhYmxlTGlzdFNvcnRhYmxlQ29udGFpbmVyIiwiSGVhZGVyIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImNvbG9yR3JpZEJvcmRlciIsIkhlYWRlckNvbHVtbiIsImRpdiIsIndpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiTGlzdCIsIkRyYWdnYWJsZUxpc3QiLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4Iiwib25DaGFuZ2UiLCJpdGVtcyIsIm5ld0l0ZW1zIiwib25Sb3dTZWxlY3QiLCJpZCIsInNldFN0YXRlIiwic2VsZWN0ZWRJdGVtIiwic3RhdGUiLCJyZW5kZXIiLCJjb2x1bW5zIiwicm93SGVpZ2h0Iiwic2hvd0luZGV4IiwiZGlzYWJsZWQiLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsInRpdGxlIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImlkS2V5IiwibGlzdEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLG9CQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsT0FBT0MsOEJBQVAsTUFBMkMsK0NBQTNDOztBQUVBLElBQU1DLFNBQVNGLE9BQU9HLE1BQWhCLGtCQUVNO0FBQUEsU0FBU0MsTUFBTUMsTUFBZjtBQUFBLENBRk4sRUFJb0I7QUFBQSxTQUFTRCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLGVBQTVCO0FBQUEsQ0FKcEIsRUFLdUI7QUFBQSxTQUFTSixNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLGVBQTVCO0FBQUEsQ0FMdkIsQ0FBTjs7QUFRQSxJQUFNQyxlQUFlVCxPQUFPVSxHQUF0QixtQkFDUztBQUFBLFNBQVNOLE1BQU1PLEtBQWY7QUFBQSxDQURULEVBRUs7QUFBQSxTQUFTUCxNQUFNTyxLQUFmO0FBQUEsQ0FGTCxFQUtzQjtBQUFBLFNBQVNQLE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsZUFBNUI7QUFBQSxDQUx0QixFQU1TO0FBQUEsU0FBU0osTUFBTUUsS0FBTixDQUFZTSxlQUFyQjtBQUFBLENBTlQsQ0FBTjtBQVFBLElBQU1DLE9BQU9iLE9BQU9DLDhCQUFQLENBQVAsa0JBQU47SUFHcUJhLGE7OztBQXdCbkIseUJBQVlWLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFPbkJXLFNBUG1CLEdBT1AsZ0JBQTRCO0FBQUEsVUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLFVBQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLHdCQUNWLE1BQUtiLEtBREs7QUFBQSxVQUM5QmMsUUFEOEIsZUFDOUJBLFFBRDhCO0FBQUEsVUFDcEJDLEtBRG9CLGVBQ3BCQSxLQURvQjs7QUFFdEMsVUFBTUMsV0FBV3RCLFVBQVVxQixLQUFWLEVBQWlCSCxRQUFqQixFQUEyQkMsUUFBM0IsQ0FBakI7QUFDQUMsZUFBU0UsUUFBVDtBQUNELEtBWGtCOztBQUFBLFVBYW5CQyxXQWJtQixHQWFMLFVBQUNDLEVBQUQsRUFBUTtBQUFBLFVBQ1pELFdBRFksR0FDSSxNQUFLakIsS0FEVCxDQUNaaUIsV0FEWTs7QUFFcEIsWUFBS0UsUUFBTCxDQUFjLEVBQUVDLGNBQWNGLEVBQWhCLEVBQWQsRUFBb0MsWUFBTTtBQUN4Q0Qsb0JBQVlDLEVBQVo7QUFDRCxPQUZEO0FBR0QsS0FsQmtCOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFDWEQsb0JBQWM7QUFESCxLQUFiO0FBRmlCO0FBS2xCOzswQkFlREUsTSxxQkFBUztBQUFBLGlCQUdILEtBQUt0QixLQUhGO0FBQUEsUUFFTHVCLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlDLFNBRkosVUFFSUEsU0FGSjtBQUFBLFFBRWVDLFNBRmYsVUFFZUEsU0FGZjtBQUFBLFFBRTBCQyxRQUYxQixVQUUwQkEsUUFGMUI7O0FBSVAsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGNBQUQ7QUFBQSxVQUFRLFFBQVFGLFNBQWhCO0FBQ0dDLHFCQUFhO0FBQUMsc0JBQUQ7QUFBQSxZQUFjLE9BQU8sRUFBckI7QUFBQTtBQUFBLFNBRGhCO0FBRUdGLGdCQUFRSSxHQUFSLENBQVk7QUFBQSxpQkFDWDtBQUFDLHdCQUFEO0FBQUEsY0FBYyxLQUFLQyxPQUFPQyxRQUExQixFQUFvQyxPQUFPRCxPQUFPckIsS0FBbEQ7QUFBMERxQixtQkFBT0U7QUFBakUsV0FEVztBQUFBLFNBQVo7QUFGSCxPQURGO0FBT0UsMEJBQUMsSUFBRCxlQUNNLEtBQUs5QixLQURYO0FBRUUsc0JBQWMsS0FBS3FCLEtBQUwsQ0FBV0QsWUFGM0I7QUFHRSxtQkFBVyxLQUFLVCxTQUhsQjtBQUlFLHFCQUFhLEtBQUtNLFdBSnBCO0FBS0UsMkJBTEY7QUFNRSxrQkFBVVM7QUFOWjtBQVBGLEtBREY7QUFrQkQsRzs7O0VBbEV3Q2pDLE1BQU1zQyxhLFVBYXhDQyxZLEdBQWU7QUFDcEJmLGVBQWEsdUJBQU0sQ0FDbEIsQ0FGbUI7QUFHcEJGLFNBQU8sRUFIYTtBQUlwQmtCLFNBQU8sSUFKYTtBQUtwQlQsYUFBVyxFQUxTO0FBTXBCVSxjQUFZLEdBTlE7QUFPcEJULGFBQVcsS0FQUztBQVFwQkMsWUFBVTtBQVJVLEM7U0FiSGhCLGEiLCJmaWxlIjoiZHJhZ2dhYmxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lciBmcm9tICcuL2RyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JHcmlkQm9yZGVyfTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmNvbG9yR3JpZEJvcmRlcn07XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5jb2xvckdyaWRCb3JkZXJ9O1xuICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5jb25zdCBMaXN0ID0gc3R5bGVkKERyYWdnYWJsZUxpc3RTb3J0YWJsZUNvbnRhaW5lcilgXG5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNob3dJbmRleDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25Sb3dTZWxlY3Q6ICgpID0+IHtcbiAgICB9LFxuICAgIGl0ZW1zOiBbXSxcbiAgICBpZEtleTogJ2lkJyxcbiAgICByb3dIZWlnaHQ6IDQwLFxuICAgIGxpc3RIZWlnaHQ6IDYwMCxcbiAgICBzaG93SW5kZXg6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlNb3ZlKGl0ZW1zLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKTtcbiAgfTtcblxuICBvblJvd1NlbGVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgb25Sb3dTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogaWQgfSwgKCkgPT4ge1xuICAgICAgb25Sb3dTZWxlY3QoaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5zLCByb3dIZWlnaHQsIHNob3dJbmRleCwgZGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgaGVpZ2h0PXtyb3dIZWlnaHR9PlxuICAgICAgICAgIHtzaG93SW5kZXggJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzB9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICA8SGVhZGVyQ29sdW1uIGtleT17Y29sdW1uLnZhbHVlS2V5fSB3aWR0aD17Y29sdW1uLndpZHRofT57Y29sdW1uLnRpdGxlfTwvSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPExpc3RcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBzZWxlY3RlZEl0ZW09e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtfVxuICAgICAgICAgIG9uU29ydEVuZD17dGhpcy5vblNvcnRFbmR9XG4gICAgICAgICAgb25Sb3dTZWxlY3Q9e3RoaXMub25Sb3dTZWxlY3R9XG4gICAgICAgICAgdXNlRHJhZ0hhbmRsZVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==