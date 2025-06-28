import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import cssnano from "cssnano";
import htmlmin from "html-minifier-terser";

export default function(eleventyConfig) {
    // Pass these files to compiled output
    eleventyConfig.addPassthroughCopy("./src/assets");
    // Copy favicon.ico to root directory for backward compatibility on some browsers
    eleventyConfig.addPassthroughCopy({ "./src/assets/img/icons/favicon.ico": "/favicon.ico" });

    // Compile TailwindCSS and daisyUI
    eleventyConfig.on('eleventy.before', async () => {
      const tailwindInputPath = path.resolve("./src/assets/stylesheets/main.css");
      const tailwindOutputPath = "./_site/assets/stylesheets/output.css";
      const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
      const outputDir = path.dirname(tailwindOutputPath);
  
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      const result = await postcss([tailwindcss(), cssnano()]).process(cssContent, {
        from: tailwindInputPath,
        to: tailwindOutputPath,
      });
  
      fs.writeFileSync(tailwindOutputPath, result.css);
    });

    // Delete source files in build (TODO: a better way to do this)
    eleventyConfig.on("eleventy.after", () => {
      const filePath = "./_site/assets/stylesheets/main.css";
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

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

    // Show you local links for dev server
    eleventyConfig.setServerOptions({
      showAllHosts: true,
    });

    // Where 11ty should look for pages
    return {
        dir: {
          input: "src"
        }
    }
};
