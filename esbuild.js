let package = require("./package.json")

require("esbuild")
    .build({
        entryPoints: ["./src/index.js"],
        bundle: true,
        minify: true,
        outfile: "./dist/FigmaConsoleKit.js",
        define: {
            VERSION: `"${package.version}"`,
        },
    })
    .catch(() => process.exit(1))
