module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "The Continuity of Splines: A Deep Dive into Curve Smoothness",
      })()
    };