import React from "react";

function RequestInbox({ requests }) {
  return (
    <div>
      <h2>Request Inbox</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <div>{request.summary}</div>
            <button onClick={() => viewDetails(request.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestInbox;
