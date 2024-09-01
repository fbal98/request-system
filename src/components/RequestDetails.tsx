import React from "react";

function RequestDetails({ request, onClose }) {
  return (
    <div className="modal">
      <h2>Request Details</h2>
      <p>{request.details}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RequestDetails;
