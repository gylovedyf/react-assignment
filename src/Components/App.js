import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecommendList from './RecommendList/RecommendList';
import MyList from './MyList/MyList';
import { removeFromMyList, addFromRecommendList, getMovieList } from '../Actions/index'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.myListTitle = this.myListTitle.bind(this);
  }

  componentDidMount(){
    this.props.getMovieList();
  }

  myListTitle(list) {
    const titles = [];
    list.length===0 ? 
    titles.push(<div className="no-data" key="empty">No Item! </div>) : 
    list.map((comp,index) => {
      return titles.push(<div className='my-list-title' key={index}>{comp.title}</div>)
    })
      return titles;  
  }

  render() {
    const listTitle = this.myListTitle(this.props.mylist);
    return (
      <div className="app">
        <p className="header">NETFLIX PAGE</p>
        <MyList
          MyList={this.props.mylist}
          removeFromMyList={this.props.removeFromMyList} />

        <RecommendList
          RecommendList={this.props.recommendations}
          addFromRecommendList={this.props.addFromRecommendList} />
      </div>

        
    );
  }
}

function mapStateToProps(state){
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  }
}
//connect necessary actions
function mapDispatchToProps(dispatch){
  return {
    getMovieList:()=>{
      dispatch(getMovieList())
    },
    removeFromMyList:(id)=>{
      dispatch(removeFromMyList(id))
    },
    addFromRecommendList:(id)=>{
      dispatch(addFromRecommendList(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
