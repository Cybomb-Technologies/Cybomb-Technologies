import WebDevBanner from "./web-dev-banner";
import WebDevContent from "./web-dev-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';

// import Form from "../form/form";

export default function WebDev() {
  return (
    <>
      <WebDevBanner />
      <WebDevContent />
      <AgileProcess/>
      <StillNotSure/>
      {/* <Form /> */}
    </>
  );
}
