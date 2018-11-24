import * as React from "react";

export default class Home extends React.Component<{}, {}> {

    clickHello = (e: any) => {
        console.log("HELLO HYDRATED", e);
    }

    render() {
        return (
            <div>
                <h1>Home Page!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    A optio odio voluptatem fuga assumenda possimus praesentium 
                    adipisci beatae aspernatur corporis reiciendis facilis 
                    eum illo officiis, sed ab incidunt in perspiciatis?</p>
                <button onClick={e => this.clickHello(e)}>Hello</button>
            </div>
        );        
    }
}