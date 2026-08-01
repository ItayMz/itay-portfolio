import { Route, Routes } from "react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { IocWorkbenchPage } from "@/pages/IocWorkbenchPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="projects/ioc-workbench" element={<IocWorkbenchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
