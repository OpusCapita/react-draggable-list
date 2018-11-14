var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n\n'], ['\n\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import Infinite from 'react-infinite';
import { SortableContainer } from 'react-sortable-hoc';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
// App imports
import Row from './draggable-list-row.component';

var Container = styled(PerfectScrollbar)(_templateObject);
export default SortableContainer(function (props) {
  var idKey = props.idKey,
      selectedItem = props.selectedItem,
      rowHeight = props.rowHeight,
      listHeight = props.listHeight,
      items = props.items,
      disabled = props.disabled;


  return React.createElement(
    Container,
    { id: rowHeight + '-scrollbar' },
    React.createElement(
      Infinite,
      {
        containerHeight: 20 * rowHeight,
        elementHeight: rowHeight,
        getContainer: function getContainer() {
          return document.getElementById(rowHeight + '-scrollbar');
        }
      },
      items.map(function (item, index) {
        return React.createElement(Row, _extends({}, props, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkluZmluaXRlIiwiU29ydGFibGVDb250YWluZXIiLCJzdHlsZWQiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiUm93IiwiQ29udGFpbmVyIiwicHJvcHMiLCJpZEtleSIsInNlbGVjdGVkSXRlbSIsInJvd0hlaWdodCIsImxpc3RIZWlnaHQiLCJpdGVtcyIsImRpc2FibGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLG9CQUFsQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCO0FBQ0E7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGdDQUFoQjs7QUFFQSxJQUFNQyxZQUFZSCxPQUFPQyxnQkFBUCxDQUFaLGlCQUFOO0FBR0EsZUFBZUYsa0JBQWtCLFVBQUNLLEtBQUQsRUFBVztBQUFBLE1BRXhDQyxLQUZ3QyxHQUd0Q0QsS0FIc0MsQ0FFeENDLEtBRndDO0FBQUEsTUFFakNDLFlBRmlDLEdBR3RDRixLQUhzQyxDQUVqQ0UsWUFGaUM7QUFBQSxNQUVuQkMsU0FGbUIsR0FHdENILEtBSHNDLENBRW5CRyxTQUZtQjtBQUFBLE1BRVJDLFVBRlEsR0FHdENKLEtBSHNDLENBRVJJLFVBRlE7QUFBQSxNQUVJQyxLQUZKLEdBR3RDTCxLQUhzQyxDQUVJSyxLQUZKO0FBQUEsTUFFV0MsUUFGWCxHQUd0Q04sS0FIc0MsQ0FFV00sUUFGWDs7O0FBSzFDLFNBQ0U7QUFBQyxhQUFEO0FBQUEsTUFBVyxJQUFPSCxTQUFQLGVBQVg7QUFFRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLHlCQUFpQixLQUFLQSxTQUR4QjtBQUVFLHVCQUFlQSxTQUZqQjtBQUdFLHNCQUFjO0FBQUEsaUJBQU1JLFNBQVNDLGNBQVQsQ0FBMkJMLFNBQTNCLGdCQUFOO0FBQUE7QUFIaEI7QUFLR0UsWUFBTUksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQ1Qsb0JBQUMsR0FBRCxlQUNNWCxLQUROO0FBRUUsaUJBQU9XLEtBRlQ7QUFHRSxhQUFHQSxLQUhMO0FBSUUsZ0JBQU1ELElBSlI7QUFLRSxlQUFLQSxLQUFLVCxLQUFMLENBTFA7QUFNRSxvQkFBVUMsaUJBQWlCUSxLQUFLVCxLQUFMLENBTjdCO0FBT0UsbUJBQVNELE1BQU1ZLFVBUGpCO0FBUUUsb0JBQVVOLFFBUlo7QUFTRSxzQkFBWUE7QUFUZCxXQURTO0FBQUEsT0FBVjtBQUxIO0FBRkYsR0FERjtBQXdCRCxDQTdCYyxDQUFmIiwiZmlsZSI6ImRyYWdnYWJsZS1saXN0LXNvcnRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IFNvcnRhYmxlQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBSb3cgZnJvbSAnLi9kcmFnZ2FibGUtbGlzdC1yb3cuY29tcG9uZW50JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBlcmZlY3RTY3JvbGxiYXIpYFxuXG5gO1xuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVDb250YWluZXIoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZEtleSwgc2VsZWN0ZWRJdGVtLCByb3dIZWlnaHQsIGxpc3RIZWlnaHQsIGl0ZW1zLCBkaXNhYmxlZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD17YCR7cm93SGVpZ2h0fS1zY3JvbGxiYXJgfT5cblxuICAgICAgPEluZmluaXRlXG4gICAgICAgIGNvbnRhaW5lckhlaWdodD17MjAgKiByb3dIZWlnaHR9XG4gICAgICAgIGVsZW1lbnRIZWlnaHQ9e3Jvd0hlaWdodH1cbiAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyb3dIZWlnaHR9LXNjcm9sbGJhcmApfVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGk9e2luZGV4fVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtID09PSBpdGVtW2lkS2V5XX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uUm93Q2xpY2t9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBoaWRlSGFuZGxlPXtkaXNhYmxlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvSW5maW5pdGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuIl19