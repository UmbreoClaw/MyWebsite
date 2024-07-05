module.exports = function(eleventyConfig) {
    // Pass these files to compiled output
    eleventyConfig.addPassthroughCopy("./src/assets");
    // Copy favicon.ico to root directory for backward compatibility on some browsers
    eleventyConfig.addPassthroughCopy({ "./src/assets/img/icons/favicon.ico": "/favicon.ico" });

    // Layout definitions
    eleventyConfig.addLayoutAlias("homepage", "_default/homepage.html");
    eleventyConfig.addLayoutAlias("base", "_default/base.html");

    // Where 11ty should look for pages
    return {
        dir: {
          input: "src"
        }
    }
};