import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

const Main = () => {
  return (
    <main className="main">
    <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} /> */}
        {/* <Route path="/confirmed" element={<ConfirmedBooking/> } /> */}
    </Routes>
</main>

  )
}

export default Main