import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.Jsx";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Dashboard from "./pages/Dashboard";
import ViewApplications from "./pages/ViewApplications";
import ManageJobs from "./pages/MangaeJobs";
import AddJob from "./pages/AddJob";
;
import RecruiterLogin from "./components/RecruiterLogin";
import { Appcontext } from "./context/Appcontext";
import "quill/dist/quill.snow.css";

const App = () => {
  const { showRecruiterLogin } = useContext(Appcontext);

  return (
    <div>
      
      {showRecruiterLogin && <RecruiterLogin />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-jobs/:id" element={<ApplyJobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
