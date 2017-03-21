### Usage

Run `yarn`.  
Edit styles in styles.css.  
Run `gulp` to build html templates with inline styles.  

You don't need the <head> portion of generated markup for email templates.  Copy the relevant contents of the html files in the `build` directory for airmail templates.  

## Notes to Self:

This repo is in the process of being cleaned up for public release.  

Where possible, the hardcoded fields in the template should be refactored to pull from the site settings. Site Settings many need to be created, so they can be accessed.  

Hardcoded items are marked with `<!--configure-->`.  

Right now, you need to use {{format_currency}} helper to show price objects with the right currency symbol and punctuation. Is this the best way to return it with propellers? (it could be automated to detect the currency symbol...though not sure if this is best, for developers).  

Timezone?  
