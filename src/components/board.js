//react class based component - rcc
import React, { Component } from 'react';
import square from './square';

export default class board extends Component {
    renderSquare(i){
        return <square value ={this.props.square[i]}
        onClick = {() => this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div classNam="border-row">
                    {this.render.square(0)}
                    {this.render.square(1)}
                    {this.render.square(2)}
                </div>
                <div classNam="border-row">
                    {this.render.square(3)}
                    {this.render.square(4)}
                    {this.render.square(5)}
                </div>
                <div classNam="border-row">
                    {this.render.square(6)}
                    {this.render.square(7)}
                    {this.render.square(8)}
                </div>
                
            </div>
        )
    }
}
