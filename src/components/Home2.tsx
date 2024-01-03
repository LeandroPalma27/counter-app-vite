import React, { Component } from 'react'

type Home2Props = {
    title?: string,
    name?: string,
    age?: number
};
export default class Home2 extends Component<Home2Props> {
    render() {
        const { title, name, age } = this.props;
        return (
            <>
                <div id='Home2'>
                    <h1>{title}</h1>
                    <p>{age}</p>
                </div>
            </>
        )
    }
}
