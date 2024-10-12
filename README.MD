# What is this?

This is a API wrapper for BIG Games: Pets Go! All data is fetched through their APIs.

# How can I install this?

In the console, run "npm install petsgo.js"

# Usage

## Fetching details of a booth

```javascript
const fetchBooths = require('petsgo.js')

async function booths() {
    const booths = await fetchBooths("Default Booth")
    console.log(JSON.stringify(booths));
}

booths()
```
For fetching specific data, you would do it like this:

```javascript
async function booths() {
    const booths = await fetchBooths("Default Booth"); 
    console.log(JSON.stringify(booths.configName));
}
```

You could also leave the parameter blank "e.g." fetchBooths(), and it will return all booths. You can do this for all functions except for fetching a pets RAP and exist number.

## Bugs

If you have bugs, feel free to report them here: https://github.com/editlt/petsgo.js/issues.

## Other

I am currently waiting on /collection/CraftingMachine & /collection/Consumable to be updated with data (if they ever will be). Also, if documentation comes out and more APIs are revealed, I will add them.

Happy Coding!