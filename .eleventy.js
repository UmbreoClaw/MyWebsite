import htmlmin from "html-minifier-terser";

export default async function(eleventyConfig) {
    eleventyConfig.setServerOptions({
      showAllHosts: true,
    });

    // Pass these files to compiled output
    eleventyConfig.addPassthroughCopy("./src/assets");
    // Copy favicon.ico to root directory for backward compatibility on some browsers
    eleventyConfig.addPassthroughCopy({ "./src/assets/img/icons/favicon.ico": "/favicon.ico" });

    // Layout definitions
    eleventyConfig.addLayoutAlias("homepage", "_default/homepage.html");
    eleventyConfig.addLayoutAlias("base", "_default/base.html");

    // Minify HTML files at build
    eleventyConfig.addTransform("htmlmin", function (content) {
      if ((this.page.outputPath || "").endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          removeRedundantAttributes: true,
          collapseWhitespace: true,
        });
        return minified;
      }
      // If not an HTML output, return content as-is
      return content;
    });

    // Where 11ty should look for pages
    return {
        dir: {
          input: "src"
        }
    }
};