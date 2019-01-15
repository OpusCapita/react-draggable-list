'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInfinite = require('react-infinite');

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var _reactSortableHoc = require('react-sortable-hoc');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _draggableListRow = require('./draggable-list-row.component');

var _draggableListRow2 = _interopRequireDefault(_draggableListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Container = (0, _styledComponents2.default)(_reactPerfectScrollbar2.default)(_templateObject);
exports.default = (0, _reactSortableHoc.SortableContainer)(function (props) {
  var idKey = props.idKey,
      selectedItem = props.selectedItem,
      rowHeight = props.rowHeight,
      listHeight = props.listHeight,
      items = props.items,
      disabled = props.disabled;


  return _react2.default.createElement(
    Container,
    { id: rowHeight + '-scrollbar' },
    _react2.default.createElement(
      _reactInfinite2.default,
      {
        containerHeight: listHeight - rowHeight,
        elementHeight: rowHeight,
        getContainer: function getContainer() {
          return document.getElementById(rowHeight + '-scrollbar');
        }
      },
      items.map(function (item, index) {
        return _react2.default.createElement(_draggableListRow2.default, _extends({}, props, {
          index: index,
          i: index,
          item: item,
          key: item[idKey],
          selected: selectedItem === item[idKey],
          onClick: props.onRowClick,
          disabled: disabled,
          hideHandle: disabled
        }));
      })
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQZXJmZWN0U2Nyb2xsYmFyIiwicHJvcHMiLCJpZEtleSIsInNlbGVjdGVkSXRlbSIsInJvd0hlaWdodCIsImxpc3RIZWlnaHQiLCJpdGVtcyIsImRpc2FibGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxZQUFZLGdDQUFPQywrQkFBUCxDQUFaLGlCQUFOO2tCQUdlLHlDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFBQSxNQUV4Q0MsS0FGd0MsR0FHdENELEtBSHNDLENBRXhDQyxLQUZ3QztBQUFBLE1BRWpDQyxZQUZpQyxHQUd0Q0YsS0FIc0MsQ0FFakNFLFlBRmlDO0FBQUEsTUFFbkJDLFNBRm1CLEdBR3RDSCxLQUhzQyxDQUVuQkcsU0FGbUI7QUFBQSxNQUVSQyxVQUZRLEdBR3RDSixLQUhzQyxDQUVSSSxVQUZRO0FBQUEsTUFFSUMsS0FGSixHQUd0Q0wsS0FIc0MsQ0FFSUssS0FGSjtBQUFBLE1BRVdDLFFBRlgsR0FHdENOLEtBSHNDLENBRVdNLFFBRlg7OztBQUsxQyxTQUNFO0FBQUMsYUFBRDtBQUFBLE1BQVcsSUFBT0gsU0FBUCxlQUFYO0FBQ0U7QUFBQyw2QkFBRDtBQUFBO0FBQ0UseUJBQWlCQyxhQUFhRCxTQURoQztBQUVFLHVCQUFlQSxTQUZqQjtBQUdFLHNCQUFjO0FBQUEsaUJBQU1JLFNBQVNDLGNBQVQsQ0FBMkJMLFNBQTNCLGdCQUFOO0FBQUE7QUFIaEI7QUFLR0UsWUFBTUksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQ1QsOEJBQUMsMEJBQUQsZUFDTVgsS0FETjtBQUVFLGlCQUFPVyxLQUZUO0FBR0UsYUFBR0EsS0FITDtBQUlFLGdCQUFNRCxJQUpSO0FBS0UsZUFBS0EsS0FBS1QsS0FBTCxDQUxQO0FBTUUsb0JBQVVDLGlCQUFpQlEsS0FBS1QsS0FBTCxDQU43QjtBQU9FLG1CQUFTRCxNQUFNWSxVQVBqQjtBQVFFLG9CQUFVTixRQVJaO0FBU0Usc0JBQVlBO0FBVGQsV0FEUztBQUFBLE9BQVY7QUFMSDtBQURGLEdBREY7QUF1QkQsQ0E1QmMsQyIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcclxuaW1wb3J0IHsgU29ydGFibGVDb250YWluZXIgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG4vLyBBcHAgaW1wb3J0c1xyXG5pbXBvcnQgUm93IGZyb20gJy4vZHJhZ2dhYmxlLWxpc3Qtcm93LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUGVyZmVjdFNjcm9sbGJhcilgXHJcblxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZUNvbnRhaW5lcigocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZEtleSwgc2VsZWN0ZWRJdGVtLCByb3dIZWlnaHQsIGxpc3RIZWlnaHQsIGl0ZW1zLCBkaXNhYmxlZCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGlkPXtgJHtyb3dIZWlnaHR9LXNjcm9sbGJhcmB9PlxyXG4gICAgICA8SW5maW5pdGVcclxuICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHQgLSByb3dIZWlnaHR9XHJcbiAgICAgICAgZWxlbWVudEhlaWdodD17cm93SGVpZ2h0fVxyXG4gICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cm93SGVpZ2h0fS1zY3JvbGxiYXJgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbSA9PT0gaXRlbVtpZEtleV19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uUm93Q2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgaGlkZUhhbmRsZT17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0luZmluaXRlPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG4iXX0=