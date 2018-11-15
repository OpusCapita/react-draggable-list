var _templateObject = _taggedTemplateLiteralLoose(['\n  min-width: ', 'px;\n  width: ', 'px;\n  display: flex;\n  padding: 0 ', ';\n  justify-content: ', ';\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n'], ['\n  min-width: ', 'px;\n  width: ', 'px;\n  display: flex;\n  padding: 0 ', ';\n  justify-content: ', ';\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var Column = styled.div(_templateObject, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.alignment;
});

export default Column;