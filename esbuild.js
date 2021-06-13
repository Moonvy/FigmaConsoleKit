require("esbuild")
    .build({
        entryPoints: ["./src/index.js"],
        bundle: true,
        minify: true,
        outfile: "./dist/FigmaConsoleKit.js",
    })
    .catch(() => process.exit(1))
