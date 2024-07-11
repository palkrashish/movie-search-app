import React from "react";
import  ReactDOM  from "react";
import App from "./App";

it('renders without crashing',()=>{
const div = document.createElement('div')
ReactDOM.Children(<App />, div)
})

describe("attribute", ()=>{
    it('uses the right homepage', ()=>{
        const app = new App()
        expect(app.get)
    })
}
)