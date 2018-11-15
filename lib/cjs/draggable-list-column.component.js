'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  display: flex;\n  padding: 0 ', ';\n  justify-content: ', ';\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  display: flex;\n  padding: 0 ', ';\n  justify-content: ', ';\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.alignment;
});

exports.default = Column;