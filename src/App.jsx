import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";

import Sidebar from "./layout/Sidebar";
import Breadcrumbs from "./layout/Breadcrumbs";
import PageTransition from "./ui/PageTransition";
  
// Import Components ...
import ReactSetupGuide from "./components/concepts/introduction/ReactSetupGuide";
import ReactComponentsGuide from "./components/concepts/compTypes/ReactComponentsGuide";
import ReactPropsGuide from "./components/concepts/props/ReactPropsGuide";
import ReactStateGuide from "./components/concepts/states/ReactStateGuide";
import Counter from "./components/concepts/states/Counter";
import ReactClassStateGuide from "./components/concepts/states/ReactClassStateGuide";
import ReactUseEffectGuide from "./components/hooks/ReactUseEffectGuide";
import TodoApp from "./components/hooks/TodoApp";
import ReactListsKeysDemo from "./components/concepts/listsKeys/ReactListsKeysDemo";
import ReactConditionalRendering from "./components/concepts/cr/ReactConditionalRendering";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex">
          <Sidebar />

          <main className="ml-60 p-8 w-full transition">
            <Breadcrumbs />

            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageTransition><ReactSetupGuide /></PageTransition>} />
                <Route path="/components" element={<PageTransition><ReactComponentsGuide /></PageTransition>} />
                <Route path="/props" element={<PageTransition><ReactPropsGuide /></PageTransition>} />
                <Route path="/state" element={<PageTransition><ReactStateGuide /><Counter /><ReactClassStateGuide /></PageTransition>} />
                <Route path="/useeffect" element={<PageTransition><ReactUseEffectGuide /><TodoApp /></PageTransition>} />
                <Route path="/listkeys" element={<PageTransition><ReactListsKeysDemo /></PageTransition>} />
                <Route path="/cr" element={<PageTransition><ReactConditionalRendering /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
