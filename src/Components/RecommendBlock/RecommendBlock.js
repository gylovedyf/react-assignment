import React from 'react';
import './RecommendBlock.css';

class RecommendBlock extends React.Component{
    render() {
        let {RecommendBlock}=this.props;
        return(
            <div className='showing-block'>
                <figcaption>{RecommendBlock.title}</figcaption>
                <img src={RecommendBlock.img} alt={RecommendBlock.title}/>
                <button onClick={()=> this.props.addFromRecommendList(RecommendBlock.id)} className='block-button'>Add</button>
            </div>
        )
    }
}
export default RecommendBlock;