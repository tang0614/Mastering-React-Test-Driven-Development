import React from 'react'
import ReactDOM from 'react-dom'
import {Appointment} from  '../src/Appointment'

describe('render Appointment', ()=>{
    it('render customer name', ()=>{

        const customer = {
            firstName:'Anna'
        }
        const component = <Appointment customer={customer}/>
        const container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(component,container)

        expect(document.body.textContent).toMatch('Anna')

    })
})