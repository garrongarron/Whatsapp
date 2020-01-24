import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
      }
    
      componentDidMount() {
        // this.setState({ name: this.props.name });
      }
    
      handleChange = (e) => {
        this.props.search(e.target.value)
      }
    render() {
        return (
            <div className="search">
                <i className="material-icons">search</i>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                
                
            </div>
            // <div className="search">
            //     <i className="material-icons">tag_faces</i>
            //     <input type="text" value={this.state.name} onChange={this.search} />
            // </div>
        )
    }
}
