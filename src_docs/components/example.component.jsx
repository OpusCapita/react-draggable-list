import React from 'react';
import styled from 'styled-components';
// app imports
import DraggableList from '../../src/index';
import items from './example-items.json';

const ActionContainer = styled.div`
  padding: 0.5rem;
  background: #fafafa;
  margin-bottom : 1rem;
  border: 1px solid #ddd;
  height: 30px;
`;

const columns = [{
  title: 'Name',
  width: 180,
  valueKey: 'name',
  useTooltip: true,
}, {
  title: 'Active',
  width: 75,
  valueKey: 'active',
  valueRender: row => (row.active ? 'Yes' : 'No'),
  alignment: 'center',
}, {
  title: 'Email',
  width: 180,
  valueKey: 'email',
}];

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items,
      action: null,
    };
  }


  onSelect = (id) => {
    this.setState({
      action: `${this.getName(id)} was selected`,
    });
  };

  onDoubleClick = (id) => {
    this.setState({
      action: `${this.getName(id)} was double clicked`,
    });
  };

  onChange = (newItems) => {
    this.setState({ items: newItems });
  };

  getName = id => this.state.items.find(item => item.id === id).name;

  render() {
    return (
      <div style={{
        padding: '20px',
        height: '700px',
      }}
      >
        <ActionContainer>{this.state.action}</ActionContainer>
        <div>
          <DraggableList
            items={this.state.items}
            columns={columns}
            listHeight={560}
            onChange={this.onChange}
            onRowSelect={this.onSelect}
            onRowDoubleClick={this.onDoubleClick}
          />
        </div>
      </div>
    );
  }
}
