import React, { useEffect, useState } from "react";

function NotificationSystem({ newRequest }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (newRequest) {
      setNotifications([...notifications, newRequest]);
    }
  }, [newRequest]);

  return (
    <div>
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          New request received: {notification.summary}
        </div>
      ))}
    </div>
  );
}

export default NotificationSystem;
