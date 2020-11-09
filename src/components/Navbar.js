import React, { Component } from 'react';

export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (e) => this.setState({ searchTerm: e.target.value });
    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        const { handleFormSubmit } = this.props;
        handleFormSubmit(searchTerm);
    }
    render() {
        return (
            <nav className="navbar shadow-lg navbar-dark bg-dark">
                <h1 className="navbar-brand brandTitle"><strong>You<span className="text-danger">Mini</span></strong></h1>
                <form className="form-inline w-75 mr-auto" onSubmit={this.handleSubmit}>
                    <div className="input-group w-100">
                        <input type="text" onChange={this.handleChange} className="form-control border-0" placeholder="Search..." aria-label="Search videos" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn bg-white border-0" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </nav>
        )
    }
}

export default Navbar;
