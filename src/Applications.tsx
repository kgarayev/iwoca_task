import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleApplication from "./SingleApplication";
import { Button } from "./ui/Button/Button";
import styles from "./Applications.module.css";

const Applications = () => {
  // setting up state
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // triggering this at the start and if a page state variable changes
  useEffect(() => {
    const fetchApplications = async () => {
      // setting loading indicator to true and error to empty string
      setIsLoading(true);
      setError("");
      try {
        // fetching data from API
        // would be a good practice to store the URL in the .env file and import here
        const response = await axios.get(
          `http://localhost:3001/api/applications?_page=${page}&_limit=5`
        );

        // storing API data in the applications state variable
        setApplications([...applications, ...response.data]);
      } catch (e) {
        setError("Failed to load");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [page]);

  // a callback function to change page number
  const loadMoreApplications = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={styles.Applications}>
        {error && <p>{error}</p>}
        {applications.map((application) => (
          <SingleApplication key={application.id} application={application} />
        ))}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button className={styles.button} onClick={loadMoreApplications}>
            Load more
          </Button>
        )}
      </div>
    </>
  );
};

export default Applications;
