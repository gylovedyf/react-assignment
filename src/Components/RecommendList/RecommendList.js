import React from 'react';
// import RecommendBlock from '../RecommendBlock/RecommendBlock';
import ListBlock from '../ListBlock/ListBlock';
import './RecommendList.css';

class RecommendList extends React.Component{

    constructor(props) {
        super(props);
        this.renderRecommendBlock = this.renderRecommendBlock.bind(this);
        }

    renderRecommendBlock(list){
        return list.map((comp,index) => {
            return (
            <ListBlock key={index} 
                img={comp.img}
                title={comp.title}
                btn={"Add"}
                id={comp.id}
                blockHandler={this.props.addFromRecommendList}/>
        )})
    }

    render() {
        const renderList = this.renderRecommendBlock(this.props.RecommendList)
        return(
            <div className='list-wrapper'>
                <h2>Recommend List</h2>
                <div className='list-view recommend-list'>
                    {renderList}
                </div>
            </div>
        )
    }
}

export default RecommendList;