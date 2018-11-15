var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  height: ', 'px;\n  font-weight: 600;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: 100%;\n  border: 1px solid ', ';\n'], ['\n  width: 100%;\n  height: 100%;\n  border: 1px solid ', ';\n']),
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
        useDragHandle: true,
        disabled: disabled
      }))
    );
  };

  return DraggableList;
}(React.PureComponent), _class.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func.isRequired,
  onRowSelect: PropTypes.func,
  idKey: PropTypes.string,
  rowHeight: PropTypes.number,
  listHeight: PropTypes.number,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showIndex: PropTypes.bool,
  disabled: PropTypes.bool
}, _class.defaultProps = {
  onRowSelect: function onRowSelect() {},
  items: [],
  idKey: 'id',
  rowHeight: 40,
  listHeight: 600,
  showIndex: false,
  disabled: false
}, _temp);
export { DraggableList as default };