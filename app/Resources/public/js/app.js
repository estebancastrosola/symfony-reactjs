// assets/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        fetch('/articles/find')
            .then(response => response.json())
            .then(entries => {
                this.setState({
                    entries
                });
            });
    }

    render() {
        return (
                <div className="row">
                    {this.state.entries.map(
                        ({ id, name, description, img }) => (
                            <div key={id} className="col-md-6 col-sm-6 col-sm-12 col-12 col-lg-3 divProduct p-3 ">
                                <div className="itemProduct shadow-sm p-3 mb-5 bg-white rounded">
                                    <div className="imageProduct">
                                        <img className="imageProduct" src={img} alt=""/>
                                    </div>
                                    <div className="bodyProduct">
                                        <h4>{name}</h4>
                                        <p>{description}</p>
                                        <a href={"/article/"+id+"/buy"} type="button" className="btn btn-success">Buy</a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));