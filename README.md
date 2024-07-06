# UmbreoClaw's Website

## Setup
* Download and install the [most current LTS version of Node](https://nodejs.org/en/download/prebuilt-installer).
* Clone this repository with a Git client or in the terminal.
* Navigate to the repository's directory in the terminal.
* Run `npm install` to download and install required packages.
* Run `npm run start` for development preview, which offers hot reload without restarting in most cases.
    * You can now visit the website at its default URL, http://localhost:8080/.

## Deployment
This is normally handled by Cloudflare Pages, however you can also run `npm run build` for a processed build of the website.
The output will be available in the `_site` folder.

Also double check that all values in `src/_data/siteMetadata.json`, especially the `"url"` field are correct.

## Resources
This website is built with Eleventy. In addition, it uses TailwindCSS and DaisyUI for styling.
Links are provided below for documentation.

* Eleventy (static site generator) - https://www.11ty.dev/
* TailwindCSS (CSS framework) - https://tailwindcss.com/
* DaisyUI (component library for simplifying TailwindCSS) - https://daisyui.com/