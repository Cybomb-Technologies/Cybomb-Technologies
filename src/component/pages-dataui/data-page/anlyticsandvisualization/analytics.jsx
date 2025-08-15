import AnalyticsVisualizationContent from "./analytics-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function AnalyticsandVisualization() {
  const metaPropsData = {
    title: "Analytics & Visualization - Cybomb Technologies | Data Insights & BI Solutions",
    description:
      "Cybomb Technologies offers expert analytics and visualization services, transforming complex data into actionable insights through interactive dashboards and advanced BI tools.",
    keyword:
      "Analytics Services, Data Visualization, Business Intelligence, BI Solutions, Data Insights, Interactive Dashboards, Cybomb Technologies",
    url: "https://www.cybomb.com/services/analyticsandvisualization",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AnalyticsVisualizationContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default AnalyticsandVisualization;
