import React from 'react';
// import MyListBlock from '../MyListBlock/MyListBlock';
import ListBlock from '../ListBlock/ListBlock';
import './MyList.css';

class MyList extends React.Component {
    constructor(props){
        super(props);
        this.renderMyListBLock = this.renderMyListBLock.bind(this);
    }
    

    renderMyListBLock(list) {
        return list.map((comp,index) => {
            return (
            <ListBlock key={index} 
                img={comp.img}
                title={comp.title}
                btn={"Remove"}
                id={comp.id}
                blockHandler={this.props.removeFromMyList}/>
        )})
    }

    render() {
        const renderList= this.renderMyListBLock(this.props.MyList);
        return(
            <div className='list-wrapper'>
                <h2>My List</h2>
                <div className='list-view my-list'>
                    {renderList}
                </div>
            </div>
        )
    }
}

export default MyList;