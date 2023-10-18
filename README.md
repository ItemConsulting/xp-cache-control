# Cache Control app for XP

This app lets you set a Cache Control header for your XP pages. This will only apply to HTML-pages.

 > [!NOTE]\
 > Enonic XP will [already set a Cache Control header on assets](https://developer.enonic.com/docs/xp/stable/runtime/engines/asset-service#cache_headers) served by XP.

This can be used to tell a CDN how long to cache HTML-pages, or the browser itself on how long to keep pages.

[![](https://jitpack.io/v/no.item/xp-cache-control.svg)](https://jitpack.io/#no.item/xp-cache-control)

## Installation

You can download the jar from Jitpack and deploy it in your *XP_HOME/deploy* directory.

## Usage

### Configuration

When you add the Cache Control application to your *site*, you can to configure these fields under site config.

1. Enable setting the cache control header
2. Set the Cache-Control header string. E.g. `max-age=60, s-maxage=60`
3. Set if response should include `"Last-Modified"` header. Also resolves requests with `"If-Modified-Since"` headers
   to status _307 (Not Modified)_ and empty body if the value is equal to `"Last-Modified"`. 

## Deploying

### Building

To build he project run the following code

```bash
enonic project build
```

### Deploy locally

Deploy locally for testing purposes:

```bash
enonic project deploy
```

## Deploy to Jitpack

Go to the [Jitpack page for xp-cache-control](https://jitpack.io/#no.item/xp-cache-control) to deploy from Github.
