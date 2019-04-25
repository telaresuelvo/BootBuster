import React, { Component } from "react";
import PostList from './PostList.jsx';
import AddAddress from './AddAddress.jsx';

class HistoryComp extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address:'',
        items: []
      };
      this.addItem = this.addItem.bind(this);
      this.getData = this.getData.bind(this);
      this.postData = this.postData.bind(this);
    }

    componentDidMount() {
      this.getData('/address');
    }

    getData(url = '') {
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            items: data,
          });
        })
        .catch(err => console.error(err));
    }

    postData(url = '', data = {}) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(() => this.getData(u/historyrl))
        .catch(err => console.error(err));
    }

    addItem(description) {
      let { items } = this.state;
      const newItem = {
        id: items.length + 1,
        description,
      };
      const existingIndex = items.findIndex(
        item => item.description === newItem.description
      );
    }

    render() {
      const { items } = this.state;
      return (
        <div>
          <AddAddress addItem={this.addItem} postData={this.postData} />
          <PostList items={items} />
        </div>
      );
    }
  };
export default HistoryComp;
