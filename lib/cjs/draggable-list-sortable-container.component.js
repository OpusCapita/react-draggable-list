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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQZXJmZWN0U2Nyb2xsYmFyIiwicHJvcHMiLCJpZEtleSIsInNlbGVjdGVkSXRlbSIsInJvd0hlaWdodCIsImxpc3RIZWlnaHQiLCJpdGVtcyIsImRpc2FibGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxZQUFZLGdDQUFPQywrQkFBUCxDQUFaLGlCQUFOO2tCQUdlLHlDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFBQSxNQUV4Q0MsS0FGd0MsR0FHdENELEtBSHNDLENBRXhDQyxLQUZ3QztBQUFBLE1BRWpDQyxZQUZpQyxHQUd0Q0YsS0FIc0MsQ0FFakNFLFlBRmlDO0FBQUEsTUFFbkJDLFNBRm1CLEdBR3RDSCxLQUhzQyxDQUVuQkcsU0FGbUI7QUFBQSxNQUVSQyxVQUZRLEdBR3RDSixLQUhzQyxDQUVSSSxVQUZRO0FBQUEsTUFFSUMsS0FGSixHQUd0Q0wsS0FIc0MsQ0FFSUssS0FGSjtBQUFBLE1BRVdDLFFBRlgsR0FHdENOLEtBSHNDLENBRVdNLFFBRlg7OztBQUsxQyxTQUNFO0FBQUMsYUFBRDtBQUFBLE1BQVcsSUFBT0gsU0FBUCxlQUFYO0FBQ0U7QUFBQyw2QkFBRDtBQUFBO0FBQ0UseUJBQWlCQyxhQUFhRCxTQURoQztBQUVFLHVCQUFlQSxTQUZqQjtBQUdFLHNCQUFjO0FBQUEsaUJBQU1JLFNBQVNDLGNBQVQsQ0FBMkJMLFNBQTNCLGdCQUFOO0FBQUE7QUFIaEI7QUFLR0UsWUFBTUksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQ1QsOEJBQUMsMEJBQUQsZUFDTVgsS0FETjtBQUVFLGlCQUFPVyxLQUZUO0FBR0UsYUFBR0EsS0FITDtBQUlFLGdCQUFNRCxJQUpSO0FBS0UsZUFBS0EsS0FBS1QsS0FBTCxDQUxQO0FBTUUsb0JBQVVDLGlCQUFpQlEsS0FBS1QsS0FBTCxDQU43QjtBQU9FLG1CQUFTRCxNQUFNWSxVQVBqQjtBQVFFLG9CQUFVTixRQVJaO0FBU0Usc0JBQVlBO0FBVGQsV0FEUztBQUFBLE9BQVY7QUFMSDtBQURGLEdBREY7QUF1QkQsQ0E1QmMsQyIsImZpbGUiOiJkcmFnZ2FibGUtbGlzdC1zb3J0YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBTb3J0YWJsZUNvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgUm93IGZyb20gJy4vZHJhZ2dhYmxlLWxpc3Qtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChQZXJmZWN0U2Nyb2xsYmFyKWBcblxuYDtcbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlQ29udGFpbmVyKChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWRLZXksIHNlbGVjdGVkSXRlbSwgcm93SGVpZ2h0LCBsaXN0SGVpZ2h0LCBpdGVtcywgZGlzYWJsZWQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9e2Ake3Jvd0hlaWdodH0tc2Nyb2xsYmFyYH0+XG4gICAgICA8SW5maW5pdGVcbiAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0SGVpZ2h0IC0gcm93SGVpZ2h0fVxuICAgICAgICBlbGVtZW50SGVpZ2h0PXtyb3dIZWlnaHR9XG4gICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cm93SGVpZ2h0fS1zY3JvbGxiYXJgKX1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Um93XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBpPXtpbmRleH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbSA9PT0gaXRlbVtpZEtleV19XG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblJvd0NsaWNrfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgaGlkZUhhbmRsZT17ZGlzYWJsZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0luZmluaXRlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSk7XG5cbiJdfQ==