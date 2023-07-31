import getCookie from "../utils/getCookie";

var csrftoken = getCookie("csrftoken");

const CSRFToken = () => {
  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;
