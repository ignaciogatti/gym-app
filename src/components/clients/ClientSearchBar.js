import React from 'react';

class ClientSearchBar extends React.Component{

    state = {term:''};


    onInputChange = event => {
        this.setState({term:event.target.value});
    };

    //This is the visible prop for Parent Component
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Buscar Cliente</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                         />
                    </div>
                </form>
            </div>
        );
    }
}

export default ClientSearchBar;