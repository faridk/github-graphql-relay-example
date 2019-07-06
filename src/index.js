import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))
export default {
    config: function(config) {
        LibConfig = config;
    },
    widgets: {
        myWidget: {
            new: function(config){
                let uid = uniqueid({prefix: 'widget_ns_'});
                return{
                    render(arg){
                        <App />
                    }
                }
            }
        }
    }
}