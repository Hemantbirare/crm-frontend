import MaterialTable from "@material-table/core";
import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Loader from "../Component/Loader";
import useAuth from "../hooks/use-auth";
import useTickets from "../hooks/use-tickets";
import WelcomeMsg from "../Component/WelcomeMsg";
import StatusRow from "../Component/StatusRow";
import UpdateTicketModal from "../Component/UpdateTicketModal";

const Engineer = () => {
  const [showModal, setShowModal] = useState(false);
  const [ticketDetail, setTicketDetail] = useState({});
  useAuth();
  const [isLoading, ticketList, setTicketList] = useTickets();

  const handleRowClick = (event, rowData) => {
    setShowModal(true);
    setTicketDetail(rowData);
  };

  const changeTicketDetails = (event) => {
    setTicketDetail({
      ...ticketDetail,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="row bg-light vh-100">
        <Sidebar />
        <div className="col my-4 ">
          <div className="container">
            <div>
              <WelcomeMsg
                name={localStorage.getItem("name")}
                userType="engineer"
              />
              <StatusRow ticketList={ticketList} />
              <hr />
              {isLoading ? (
                <Loader />
              ) : (
                <MaterialTable
                  onRowClick={handleRowClick}
                  title="Tickets assigned to me"
                  data={ticketList}
                  columns={[
                    { title: "Ticket ID", field: "id" },
                    {
                      title: "Title",
                      field: "title",
                    },
                    {
                      title: "Description",
                      field: "description",
                    },
                    {
                      title: "Reporter",
                      field: "reporter",
                    },
                    {
                      title: "Priority",
                      field: "ticketPriority",
                    },
                    {
                      title: "Assignee",
                      field: "assignee",
                    },
                    {
                      title: "Status",
                      field: "status",
                    },
                  ]}
                />
              )}
              <UpdateTicketModal
                showModal={showModal}
                setShowModal={setShowModal}
                ticketDetail={ticketDetail}
                changeTicketDetails={changeTicketDetails}
                ticketList={ticketList}
                setTicketList={setTicketList}
                statusOptions={["OPEN", "CLOSED", "IN_PROGRESS", "BLOCKED"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineer;
