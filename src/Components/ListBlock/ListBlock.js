import React from 'react';



class ListBlock extends React.Component {
    render() {
       
        return (
            <div className='showing-block'>
                <p>{this.props.title}</p>
                <img src={this.props.img} alt={this.props.title} />
                <button onClick={()=> this.props.blockHandler(this.props.id)} className='block-button'>{this.props.btn}</button>
            </div>
        )
    }
}
export default ListBlock;