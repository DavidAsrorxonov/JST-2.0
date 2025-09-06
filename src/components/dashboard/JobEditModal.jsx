import { useEffect, useRef, useState } from "react";
import Dropdown from "../todo/Dropdown";
import { jobtypes, jobstatuses } from "../../constants/jobConstants";
import gsap from "gsap";

const JobEditModal = ({ job, onSave, onClose }) => {
  const [editedJob, setEditedJob] = useState({ ...job });
  const jobEditModalRef = useRef(null);

  useEffect(() => {
    if (jobEditModalRef.current) {
      gsap.fromTo(
        jobEditModalRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  }, [jobEditModalRef]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedJob);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      ref={jobEditModalRef}
    >
      <div className="bg-[#171717] border border-white/30 p-6 rounded-lg w-[400px] shadow-lg space-y-4">
        <h2 className="text-lg font-semibold text-[#e5e5e5] mb-4">Edit Job</h2>
        <input
          name="job_title"
          value={editedJob.job_title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
        />
        <input
          name="company"
          value={editedJob.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
        />

        <div className="flex flex-col gap-4">
          <Dropdown
            defaultValue={editedJob.job_type}
            options={jobtypes}
            onSelect={(jobtype) =>
              setEditedJob({ ...editedJob, job_type: jobtype })
            }
          />

          <Dropdown
            defaultValue={editedJob.job_status}
            options={jobstatuses}
            onSelect={(jobstatus) =>
              setEditedJob({ ...editedJob, job_status: jobstatus })
            }
          />
        </div>

        <input
          name="website_url"
          value={editedJob.website_url}
          onChange={handleChange}
          placeholder="Website URL"
          className="w-full bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-[#171717] text-[#e5e5e5] border border-white/30 px-4 py-1 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-gray-200 px-4 py-1 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobEditModal;
