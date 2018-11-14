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
        containerHeight: 20 * rowHeight,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQZXJmZWN0U2Nyb2xsYmFyIiwicHJvcHMiLCJpZEtleSIsInNlbGVjdGVkSXRlbSIsInJvd0hlaWdodCIsImxpc3RIZWlnaHQiLCJpdGVtcyIsImRpc2FibGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxZQUFZLGdDQUFPQywrQkFBUCxDQUFaLGlCQUFOO2tCQUdlLHlDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFBQSxNQUV4Q0MsS0FGd0MsR0FHdENELEtBSHNDLENBRXhDQyxLQUZ3QztBQUFBLE1BRWpDQyxZQUZpQyxHQUd0Q0YsS0FIc0MsQ0FFakNFLFlBRmlDO0FBQUEsTUFFbkJDLFNBRm1CLEdBR3RDSCxLQUhzQyxDQUVuQkcsU0FGbUI7QUFBQSxNQUVSQyxVQUZRLEdBR3RDSixLQUhzQyxDQUVSSSxVQUZRO0FBQUEsTUFFSUMsS0FGSixHQUd0Q0wsS0FIc0MsQ0FFSUssS0FGSjtBQUFBLE1BRVdDLFFBRlgsR0FHdENOLEtBSHNDLENBRVdNLFFBRlg7OztBQUsxQyxTQUNFO0FBQUMsYUFBRDtBQUFBLE1BQVcsSUFBT0gsU0FBUCxlQUFYO0FBRUU7QUFBQyw2QkFBRDtBQUFBO0FBQ0UseUJBQWlCLEtBQUtBLFNBRHhCO0FBRUUsdUJBQWVBLFNBRmpCO0FBR0Usc0JBQWM7QUFBQSxpQkFBTUksU0FBU0MsY0FBVCxDQUEyQkwsU0FBM0IsZ0JBQU47QUFBQTtBQUhoQjtBQUtHRSxZQUFNSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZUFDVCw4QkFBQywwQkFBRCxlQUNNWCxLQUROO0FBRUUsaUJBQU9XLEtBRlQ7QUFHRSxhQUFHQSxLQUhMO0FBSUUsZ0JBQU1ELElBSlI7QUFLRSxlQUFLQSxLQUFLVCxLQUFMLENBTFA7QUFNRSxvQkFBVUMsaUJBQWlCUSxLQUFLVCxLQUFMLENBTjdCO0FBT0UsbUJBQVNELE1BQU1ZLFVBUGpCO0FBUUUsb0JBQVVOLFFBUlo7QUFTRSxzQkFBWUE7QUFUZCxXQURTO0FBQUEsT0FBVjtBQUxIO0FBRkYsR0FERjtBQXdCRCxDQTdCYyxDIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IFNvcnRhYmxlQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBSb3cgZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBlcmZlY3RTY3JvbGxiYXIpYFxuXG5gO1xuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVDb250YWluZXIoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZEtleSwgc2VsZWN0ZWRJdGVtLCByb3dIZWlnaHQsIGxpc3RIZWlnaHQsIGl0ZW1zLCBkaXNhYmxlZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD17YCR7cm93SGVpZ2h0fS1zY3JvbGxiYXJgfT5cblxuICAgICAgPEluZmluaXRlXG4gICAgICAgIGNvbnRhaW5lckhlaWdodD17MjAgKiByb3dIZWlnaHR9XG4gICAgICAgIGVsZW1lbnRIZWlnaHQ9e3Jvd0hlaWdodH1cbiAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyb3dIZWlnaHR9LXNjcm9sbGJhcmApfVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGk9e2luZGV4fVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtID09PSBpdGVtW2lkS2V5XX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uUm93Q2xpY2t9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBoaWRlSGFuZGxlPXtkaXNhYmxlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvSW5maW5pdGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuIl19