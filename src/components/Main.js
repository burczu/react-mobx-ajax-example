import React from 'react';
import { observer } from 'mobx-react';

@observer
class AppComponent extends React.Component {
  componentDidMount() {
    this.props.store.fetchData();
  }

  render() {
    return (
      <div className="index">
        <span>{`${this.props.store.fetched}`}</span>
      </div>
    );
  }
}

export default AppComponent;
