import React from "react";
import styles from "./SingleApplication.module.css";

// a function to format currency
export const formatCurrency = (amount: number) => {};

// a function to format date
export const formatDate = (dateString: string) => {};

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {application.loan_amount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {application.date_created}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {application.expiry_date}
      </div>
    </div>
  );
};

export default SingleApplication;
