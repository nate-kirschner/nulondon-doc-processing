import axios from "axios";
import getCookie from "../../utils/getCookie";
// A button that sends a post request containing list of ApproverID
// and TemplateID
// Values are hardcoded for now

const MockSendApproverEmail: React.FC = () => {
  const handleClick = () => {
    const url = "http://127.0.0.1:8000/send-approver-email/";
    // HARDCODED VALUES!!!!!!
    const data = { ApproverIDs: [3], TemplateID: 9 };
    const csrftoken = getCookie("csrftoken");

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error From MockSendApproverEmail(): ", error);
      });
  };

  return <button onClick={handleClick}> Send Email To Approver </button>;
};

export default MockSendApproverEmail;
