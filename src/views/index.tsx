import { createRoot}  from "react-dom/client";
import CategoryList from "./CategoryList";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <CategoryList/>
);