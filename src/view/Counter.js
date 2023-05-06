import React from "react";
import { connect } from "react-redux";
import { doincrement, dodecrement, doreset, dostep, domax } from "../action";

class Counter extends React.Component {
    render() {
        let { number, dispatch } = this.props;
        return (
        <div>
            <center>
                <div>
                    <h1>{number}</h1>

                    <div className="flex">
                        <div className="step">
                            <h2 className="div-header">Steps</h2>
                            {[5, 20, 60, 80].map(stepnumber => (
                                <button
                                onClick={() => dispatch(dostep(stepnumber))}
                                className="btn"
                                >
                                {stepnumber}
                                </button>
                            ))}
                        </div>
                        <div className="max">
                            <h2 className="div-header">Max Value</h2>
                            {[100, 300, 500, 800].map(maxnumber => (
                                <button
                                onClick={() => dispatch(domax(maxnumber))}
                                value={maxnumber}
                                className={"btn"}
                                >
                                {maxnumber}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => dispatch(doincrement())} className="buttons">
                    Increment
                    </button>
                    <button onClick={() => dispatch(dodecrement())} className="buttons">
                    Decrement
                    </button>
                    <button onClick={() => dispatch(doreset())} className="buttons">
                    Reset
                    </button>
                </div>
                
            </center>
        </div>
        );
    }
    }
    function mapStateToProps(state) {
    return {
        number: state.number,
        step: state.step,
        max: state.max
    };
}

export default connect(mapStateToProps)(Counter);