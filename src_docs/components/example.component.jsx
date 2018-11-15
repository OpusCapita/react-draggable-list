import React from 'react';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
// app imports
import DraggableList from '../../src/index';
import items from './example-items.json';

const columns = [{
  title: 'Name',
  width: 180,
  valueKey: 'name',
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
    };
  }

  onChange = (newItems) => {
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div style={{ padding: '20px', height: '600px' }}>
        <DraggableList
          items={this.state.items}
          columns={columns}
          listHeight={560}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
