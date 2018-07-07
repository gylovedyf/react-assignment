import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromMyList, addFromRecommendList, getMovieList } from '../Actions/index'
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  // Component Init
  componentDidMount() {
    // axios.get(URL)
    //   .then(res => {
    //     this.setState({ posts });
    // });
    this.props.getMovieList();
  }

  render() {
    // render myList 
    const myList = this.props.mylist.map((comp, index) => {
      return (
        <div className='showing-block'>
          <p>{comp.title}</p>
          <img src={comp.img} alt={comp.title} />
          <button onClick={() => this.props.removeFromMyList(comp.id)} className='block-button'>Remove</button>
        </div>
      )
    });

    // render recommendList
    const recommendList = this.props.recommendations.map((comp, index) => {
      return (
        <div className='showing-block'>
          <p>{comp.title}</p>
          <img src={comp.img} alt={comp.title} />
          <button onClick={() => this.props.addFromRecommendList(comp.id)} className='block-button'>Add</button>
        </div>
      );
    });

    return (
      <div className="app">
        <h3 className="header">This is in develop Branch</h3>
        <div>Diverge Testing</div>
        <div className='list-wrapper'>
          <h2>My List</h2>
          <div className='list-view my-list'>
            {myList}
          </div>
        </div>
        <div className='list-wrapper'>
          <h2>Recommend List</h2>
          <div className='list-view recommend-list'>
            {recommendList}
          </div>
        </div>
      </div>
    )
  }
}

//conect necessary state
function mapStateToProps(state) {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  }
}
//connect necessary actions
function mapDispatchToProps(dispatch) {
  return {
    getMovieList: () => {
      dispatch(getMovieList())
    },
    removeFromMyList: (id) => {
      dispatch(removeFromMyList(id))
    },
    addFromRecommendList: (id) => {
      dispatch(addFromRecommendList(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
