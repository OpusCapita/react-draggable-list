import React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import DraggableListSortableContainer from './draggable-list-sortable-container.component';

const Header = styled.header`
  display: flex;
  height: ${props => props.height}px;
  font-weight: 600;
  border-top: 1px solid ${props => props.theme.colors.colorGridBorder};
  border-bottom: 1px solid ${props => props.theme.colors.colorGridBorder};
`;

const HeaderColumn = styled.div`
  min-width: ${props => props.width}px;
  width: ${props => props.width}px;
  align-items: center;
  display: flex;
  border-right: 1px solid ${props => props.theme.colors.colorGridBorder};
  padding: 0 ${props => props.theme.halfGutterWidth};
`;
const List = styled(DraggableListSortableContainer)`

`;
export default class DraggableList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func.isRequired,
    onRowSelect: PropTypes.func,
    idKey: PropTypes.string,
    rowHeight: PropTypes.number,
    listHeight: PropTypes.number,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    showIndex: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onRowSelect: () => {
    },
    items: [],
    idKey: 'id',
    rowHeight: 40,
    listHeight: 600,
    showIndex: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { onChange, items } = this.props;
    const newItems = arrayMove(items, oldIndex, newIndex);
    onChange(newItems);
  };

  onRowSelect = (id) => {
    const { onRowSelect } = this.props;
    this.setState({ selectedItem: id }, () => {
      onRowSelect(id);
    });
  };

  render() {
    const {
      columns, rowHeight, showIndex, disabled,
    } = this.props;
    return (
      <div>
        <Header height={rowHeight}>
          {showIndex && <HeaderColumn width={30}>#</HeaderColumn>}
          {columns.map(column => (
            <HeaderColumn key={column.valueKey} width={column.width}>{column.title}</HeaderColumn>
          ))}
        </Header>
        <List
          {...this.props}
          selectedItem={this.state.selectedItem}
          onSortEnd={this.onSortEnd}
          onRowSelect={this.onRowSelect}
          useDragHandle
          disabled={disabled}
        />
      </div>
    );
  }
}
