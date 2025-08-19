import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar.Jsx";// fixed wrong ".Jsx" extension
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const ApplyJobs = () => {
  const { id } = useParams();
  const [JobsData, setJobsData] = useState(null);
  const { jobs } = useContext(Appcontext);

  const fetchJob = () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobsData(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return JobsData ? (
    <>
     
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        
        {/* Job Card */}
        <div className="bg-sky-50 border border-sky-400 rounded-xl px-14 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Section */}
          <div className="flex items-center gap-8 flex-wrap justify-center md:justify-start">
            <img
              className="h-20 w-20 bg-white rounded-lg p-3 border"
              src={JobsData.companyId.image}
              alt={JobsData.companyId.name}
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-medium text-neutral-800">
                {JobsData.title}
              </h1>
              <div className="flex flex-wrap gap-6 mt-3 text-gray-600">
                <span className="flex items-center gap-1">
                  <img src={assets.suitcase_icon} alt="" />
                  {JobsData.companyId.name}
                </span>
                <span className="flex items-center gap-1">
                  <img src={assets.location_icon} alt="" />
                  {JobsData.location}
                </span>
                <span className="flex items-center gap-1">
                  <img src={assets.person_icon} alt="" />
                  {JobsData.level}
                </span>
                <span className="flex items-center gap-1">
                  <img src={assets.money_icon} alt="" />
                  CTC: {kconvert.convertTo(JobsData.salary)}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded">
              Apply now
            </button>
            <p className="mt-1 text-gray-600 text-sm">
              Posted {moment(JobsData.date).fromNow()}
            </p>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-10">
          <h2 className="font-bold text-2xl mb-4">Job description</h2>
          <div
            className="rich-text text-gray-800"
            dangerouslySetInnerHTML={{ __html: JobsData.description }}
          ></div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded mt-6">
            Apply Now
          </button>
        </div>

        {/* Right Section More Jobs */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
          <h2>More jobs From {JobsData.companyId.name}</h2>
          {jobs
            .filter(job => job._id !== JobsData._id && job.companyId._id === JobsData.companyId._id) // fixed wrong variable "job_id" and wrong comparison
            .slice(0, 4)
            .map((job, index) => <JobCard key={index} job={job} />)}
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJobs;
