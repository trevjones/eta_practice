import React from "react";
import Layout from './layout';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
    }

        render()
        {
            return (
                <Layout />
            );
        }
}
export default App;
