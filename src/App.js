import "./styles.css";
import Tabs from "./Component/Tabs";

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Setting",
    content: <div>Setting Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
];
export default function App() {
  return <Tabs tabsData={tabsData} />;
}
