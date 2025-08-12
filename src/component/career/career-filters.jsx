import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "./career-filters.module.css"
const CareerFilters = ({ 
  search, 
  setSearch, 
  department, 
  setDepartment, 
  location, 
  setLocation, 
  clearFilters 
}) => {
  const departments = [
    "All Departments",
    "Engineering",
    "Design",
    "Product",
    "Marketing",
    "Sales",
    "Operations",
    "Customer Success"
  ];

  const locations = [
    "All Locations",
    "Remote",
    "Chennai"
  ];

  return (
    <div className={`${styles.filterBar}`} style={{ top: "80px", zIndex: 1000 }}>
      <div className="row g-3 align-items-end">
        {/* Search */}
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text">
              <FiSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by role, skills, or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="input-group-text bg-transparent border-0"
                onClick={() => setSearch("")}
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Department Dropdown */}
        <div className="col-md-3">
          <label className="form-label small mb-1">Department</label>
          <select
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value === "All Departments" ? "" : e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept === "All Departments" ? "" : dept.toLowerCase()}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="col-md-3">
          <label className="form-label small mb-1">Location</label>
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value === "All Locations" ? "" : e.target.value.toLowerCase())}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc === "All Locations" ? "" : loc.toLowerCase()}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="col-md-2">
          <button
            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
            onClick={clearFilters}
            disabled={!search && !department && !location}
          >
            <FiX className="me-1" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerFilters;