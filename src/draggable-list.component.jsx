import React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import DraggableListSortableContainer from './draggable-list-sortable-container.component';
import Column from './draggable-list-column.component';

const Header = styled.header`
  display: flex;
  height: ${props => props.height}px;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.colors.grey7};
  background: ${props => props.theme.colors.grey4}
`;

const Container = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.grey7};
`;

const HeaderColumn = styled(Column)`
  border-right: 1px solid ${props => props.theme.colors.grey7};
`;
export default class DraggableList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func.isRequired,
    onRowSelect: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
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
    onRowDoubleClick: () => {
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

  onRowDoubleClick = (id) => {
    const { onRowDoubleClick } = this.props;
    onRowDoubleClick(id);
  };

  render() {
    const {
      columns, rowHeight, showIndex, disabled,
    } = this.props;
    return (
      <Container>
        <Header height={rowHeight}>
          {showIndex && <HeaderColumn width={30}>#</HeaderColumn>}
          {columns && columns.map(column => (
            <HeaderColumn
              key={column.valueKey}
              width={column.width}
              alignment={column.alignment || 'flex-start'}
            >
              <span>{column.title}</span>
            </HeaderColumn>
          ))}
        </Header>
        <DraggableListSortableContainer
          {...this.props}
          selectedItem={this.state.selectedItem}
          onSortEnd={this.onSortEnd}
          onRowSelect={this.onRowSelect}
          onRowDoubleClick={this.onRowDoubleClick}
          useDragHandle
          disabled={disabled}
        />
      </Container>
    );
  }
}
