import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import toast from "react-hot-toast";
import { darkTheme, lightTheme } from "src/constants/theme";
import { Tools } from "src/containers/Editor/LiveEditor/Tools";
import useGraph from "src/store/useGraph";
import useJson from "src/store/useJson";

const GraphCanvas = dynamic(
  () => import("src/containers/Editor/LiveEditor/GraphCanvas").then(c => c.GraphCanvas),
  {
    ssr: false,
  }
);

interface EmbedMessage {
  data: {
    json?: string;
    options?: any;
  };
}

const WidgetPage = () => {
  const { query, push, isReady } = useRouter();
  const [theme, setTheme] = React.useState("dark");
  const fetchJson = useJson(state => state.fetchJson);
  const setGraph = useGraph(state => state.setGraph);

  React.useEffect(() => {
    if (isReady) {
      fetchJson(query.json);
    }
  }, [fetchJson, isReady, push, query.json, query.partner]);

  React.useEffect(() => {
    const handler = (event: EmbedMessage) => {
      try {
        if (!event.data?.json) return;
        if (event.data?.options?.theme === "light" || event.data?.options?.theme === "dark") {
          setTheme(event.data.options.theme);
        }

        setGraph(event.data.json, event.data.options);
      } catch (error) {
        console.error(error);
        toast.error("Invalid JSON!");
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [setGraph, theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Tools isWidget />
      <GraphCanvas isWidget />
    </ThemeProvider>
  );
};

export default WidgetPage;
