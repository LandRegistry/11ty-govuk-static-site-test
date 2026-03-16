import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'Circus Agency'
      },
      productName: 'Apply for a juggling licence',
    },
    stylesheets: ['/assets/styles.css']
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/11ty-govuk-static-site-test/",
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};