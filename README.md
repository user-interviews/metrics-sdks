# @readme/metrics

Track your API metrics within ReadMe

[![CircleCI](https://circleci.com/gh/readmeio/metrics.svg?style=svg)](https://circleci.com/gh/readmeio/metrics)

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

## Installation

```
npm install @readme/metrics
```

## Usage

### Limitations
- Currently only supports JSON. Adding a whitelist/blacklist for non-json bodies will not work (unless they're added to `req.body`)
the same way that `body-parser` does it. The properties will be converted to JSON in the har format.
- Needs more support for getting URL when behind a reverse proxy: x-forwarded-for, x-forwarded-proto etc
- Needs more support for getting client ip address when behind a reverse proxy
- Logs are "fire and forget" to the metrics server, so any failed requests (even for incorrect API key!) will currently fail

## Credits
[Dom Harrington](https://github.com/domharrington/)

## License

ISC
