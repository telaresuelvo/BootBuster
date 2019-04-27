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

    getData(url = '/address') {
      console.log('inside getdata')
      return fetch(url)
        .then(response => {
          console.log('inside fetch, responseeeeeeee', response)
          response.json()
          console.log('iiiiiiiiiii am the ' + response.json());
        })
        .then(data => {
          console.log('before this set state', data)
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
        .then(response => {
          console.log('hello');
          console.log(response);
          response.json()
          console.log('history', history)
        })
        .then(() => {
          console.log('geting data')
          this.getData(history)
        })
        .catch(err => {
          console.error('error after get data', err)
        });
    }

    addItem(description) {
      let { items } = this.state;
      const newItem = {
        id: items.length + 1,
        description,
      };
      const existingIndex = item.findIndex(
        item => item.description === newItem.description
      );
    }

    render() {
      const { items } = this.state;
      return (
        <div>
          <AddAddress addItem={this.addItem} postData={this.postData} />
            <div className="addAddress">
            <PostList items={items} />
            </div>
        </div>
      );
    }
  };
export default HistoryComp;
