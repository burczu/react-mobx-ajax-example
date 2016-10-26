import { observable } from 'mobx';
import fetch from 'isomorphic-fetch';

class Store {
  @observable fetched = false;

  fetchData() {
    fetch('https://api.github.com/repos/burczu/react-redux-ajax-example/branches')
      .then(() => this.fetched = true)
      .catch(() => this.fetched = false);
  }
}

export default Store;