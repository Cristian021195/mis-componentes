import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const PublicRouter = () => {
  return (
    <Routes>
		<Route path="/" element={
            <>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            <div className="switch">
                <label>
                Off
                <input type="checkbox"/>
                <span className="lever"></span>
                On
                </label>
            </div>
            </>
        }></Route>
        <Route path="/botones" element={
            <div>
                <button className="ripple-button">Button</button>
                <button>FLOATING ACTION BTN</button>
            </div>
        }></Route>
        <Route path="/acordeon" element={<p>acordeon</p>}></Route>
        <Route path="/forms" element={<p>forms</p>}></Route>
        <Route path="/loaders" element={<p>loaders</p>}></Route>
        <Route path="/offcanvas" element={<p>offcanvas</p>}></Route>
        <Route path="/cards" element={<p>cards</p>}></Route>
        <Route path="/fieldsets" element={<p>fieldsets</p>}></Route>
        <Route path="/alerts" element={<p>alerts</p>}></Route>
        <Route path="/bottom-bar" element={<p>bottom-bar</p>}></Route>
        <Route path="/navbar" element={<p>navbar</p>}></Route>
        <Route path="/modals" element={<p>modals</p>}></Route>
        <Route path="/toasts" element={<p>toasts</p>}></Route>
        <Route path="/tooltips" element={<p>tooltips</p>}></Route>
        <Route path="/carousel" element={<p>carousel</p>}></Route>
        <Route path="/dropdown" element={<p>dropdown</p>}></Route>
        <Route path="/progess" element={<p>progess</p>}></Route>
	</Routes>
  )
}
