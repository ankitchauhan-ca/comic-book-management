/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchUserDetails } from "../services/api";

const UserProfile = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await fetchUserDetails(token);
      setUser(userData);
    };
    getUserDetails();
  }, [token]);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
