import * as React from "react";
import { useParams } from "react-router-dom";

const CustomerTransactions = () => {
  const { id } = useParams();
  return (
    <>
      <h4>Customer Transactions: ID {id}</h4>
      <table className="table table-bordered mb-0">
        <thead className="small text-uppercase bg-body text-muted">
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td>#57473829</td>
            <td>13 Sep, 2021</td>
            <td>Renee Sims</td>
            <td>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </span>
                <span>$145</span>
              </div>
            </td>
            <td>
              <span className="badge fs-6 fw-normal bg-tint-success text-success">
                Completed
              </span>
            </td>
          </tr>
          <tr className="align-middle">
            <td>#012458780</td>
            <td>19 Aug, 2021</td>
            <td>Edith Koenig</td>
            <td>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </span>
                <span>$641.64</span>
              </div>
            </td>
            <td>
              <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                Pending
              </span>
            </td>
          </tr>
          <tr className="align-middle">
            <td>#76444326</td>
            <td>03 April, 2021</td>
            <td>Carrie Blount</td>
            <td>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </span>
                <span>$12,457</span>
              </div>
            </td>
            <td>
              <span className="badge fs-6 fw-normal bg-tint-success text-success">
                Completed
              </span>
            </td>
          </tr>
          <tr className="align-middle">
            <td>#12498745</td>
            <td>15 March, 2021</td>
            <td>Ander Durham</td>
            <td>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </span>
                <span>$785</span>
              </div>
            </td>
            <td>
              <span className="badge fs-6 fw-normal bg-tint-success text-success">
                Completed
              </span>
            </td>
          </tr>
          <tr className="align-middle">
            <td>#87444654</td>
            <td>23 Jan, 2021</td>
            <td>Netflix Inc.</td>
            <td>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </span>
                <span>$199</span>
              </div>
            </td>
            <td>
              <span className="badge fs-6 fw-normal bg-tint-success text-success">
                Completed
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerTransactions;
