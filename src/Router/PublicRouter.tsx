import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../Components/Layout'
import { FieldsetsPage, CardsPage, AcordeonPage, LoadersPage, ButtonsPage, ProgressPage, ToastPage, BottomBarPage, TooltipsPage } from '../Pages/'

export const PublicRouter = () => {
  return (
    <BrowserRouter>
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className='col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 vh100-scroll-y'>
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
                        <Route path="/botones" element={<ButtonsPage/>}></Route>
                        <Route path="/acordeon" element={<AcordeonPage/>}></Route>
                        <Route path="/forms" element={<p>forms</p>}></Route>
                        <Route path="/loaders" element={<LoadersPage/>}></Route>
                        <Route path="/offcanvas" element={<p>offcanvas</p>}></Route>
                        <Route path="/cards" element={<CardsPage/>}></Route>
                        <Route path="/fieldsets" element={<FieldsetsPage/>}></Route>
                        <Route path="/alerts" element={<p>alerts</p>}></Route>
                        <Route path="/bottom-bar" element={<p>bottom-bar</p>}></Route>
                        <Route path="/navbar" element={<p>navbar</p>}></Route>
                        <Route path="/modals" element={<p>modals</p>}></Route>
                        <Route path="/toasts" element={<ToastPage/>}></Route>
                        <Route path="/tooltips" element={<TooltipsPage/>}></Route>
                        <Route path="/carousel" element={<p>carousel</p>}></Route>
                        <Route path="/dropdown" element={<p>dropdown</p>}></Route>
                        <Route path="/progess" element={<ProgressPage />}></Route>
                        <Route path="/bottom-bar-navigation" element={<BottomBarPage />}></Route>
                    </Routes>
                </div>
            </div>
        </div>        
    </BrowserRouter>
  )
}
