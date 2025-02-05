import Alert from "../Alert/Alert";
import { copnrRow } from "./alertdemos.css";

const AlertDemos = () => {
  return (
    <div>
      <Alert>Default</Alert>
      <Alert type="error" textAlign="left">
        Error with textAlign left
      </Alert>
      <Alert type="info">Info with isInline</Alert>
      <Alert isInline>Default with isInline</Alert>
      <h3>copnr styles</h3>
      <div className={copnrRow}>
        <Alert copnr={null}>Null</Alert>
        <Alert type="news" copnr={0}>
          0%
        </Alert>
        <Alert type="news" copnr={25}>
          25%
        </Alert>
        <Alert type="news" copnr={50}>
          50%
        </Alert>
        <Alert type="news" copnr={75}>
          75%
        </Alert>
      </div>
    </div>
  );
};

export default AlertDemos;
