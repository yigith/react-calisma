import React from 'react';

class Dugme extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sayi: props.deger };
    }

    render() {
        return (
            <button onClick={() => this.setState({ sayi: this.state.sayi + 1 })}>
                {this.state.sayi}
            </button>
        );
    }
}

export default Dugme;