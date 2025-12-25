import { Toaster } from "@/components/ui/sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  const base = import.meta.env.BASE_URL;
  const basename = base === "/" ? undefined : base.replace(/\/$/, "");

  const router = createBrowserRouter(
    [
      { path: "/", element: <Index /> },
      { path: "/resume", element: <Resume /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
      { path: "*", element: <NotFound /> },
    ],
    {
      basename,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      future: { v7_startTransition: true } as any,
    }
  );

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
