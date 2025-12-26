import { Toaster } from "@/components/ui/sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load heavy pages
const Resume = lazy(() => import("./pages/Resume"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const base = import.meta.env.BASE_URL;
  const basename = base === "/" ? undefined : base.replace(/\/$/, "");

  const router = createBrowserRouter(
    [
      { path: "/", element: <Index /> },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: "/projects/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
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
