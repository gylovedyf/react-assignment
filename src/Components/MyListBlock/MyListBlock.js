import React from 'react';

class MyListBlock extends React.Component {
    render() {
        let {MyListBlock} = this.props;
        return (
            <div className='showing-block'>
                <p>{MyListBlock.title}</p>
                <img src={MyListBlock.img} alt={MyListBlock.title} />
                <button onClick={()=> this.props.removeFromMyList(MyListBlock.id)} className='block-button'>Remove</button>
            </div>
        )
    }
}

export default MyListBlock;