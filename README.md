<p align="center">
  <img src="https://avatars.githubusercontent.com/u/7943272?s=200&v=4" alt="jsonresume.org logo">
</p>

<p align="center">
  <a href="https://badge.fury.io/js/jsonresume-theme-lucide">
    <img src="https://badge.fury.io/js/jsonresume-theme-lucide.svg" alt="npm version">
  </a>
</p>

## About Lucide theme

A modern PDF format theme for [JSONResume](https://jsonresume.org), based on a fork of [jsonresume-theme-stackoverflow](https://github.com/jsonresume/jsonresume.org/tree/master/themes/stackoverflow). 
This theme introduces support:

- Automatic build 
- Skills/Soft-Skills
- SCSS
- Social Icons  

## Getting started

### Install the command line

Create your resume in json on [jsonresume](https://jsonresume.org)

The official [resume-cli](https://github.com/jsonresume/resume-cli) to run the development server.

Go ahead and install it:

```
npm install -g resume-cli
```

### Install and serve theme

Clone the repository

```
git clone https://github.com/Clement-Cauet/jsonresume-theme-lucide.git
```

Create a 'resume.json' file in the current folder and follow the [json resume schema](https://jsonresume.org/schema/)

Install dependencies:

```
pnpm install
```

and simply run:

```
pnpm run serve
```

## Automatic Build to ``/public``

On every code save, the theme will automatically generate the ``/public`` folder with the updated resume. 
(Tips: You can pair this with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to preview changes in real time.)

## Features

### SCSS Support

This theme uses SCSS for easy customization of styles. You can modify the SCSS files to adjust colors, fonts, and layouts to your liking. Changes to the SCSS files are automatically compiled into the theme.

### Social Profiles Icons

**Profiles supported with brand colors:**

Please note that all the [Font awesome brands icons](https://fontawesome.com/search?s=brands) are supported. Although only the ones listed below have a color code associated with it in my CSS file:

- GitHub
- Stack Overflow
- LinkedIn
- Dribbble
- Twitter
- Facebook
- Pinterest
- Instagram
- SoundCloud
- WordPress
- YouTube
- Flickr
- Google Plus
- Tumblr
- Foursquare

To have a social icon close the social link profile (or username) it is enough to set a `network` the name of the Social Network (ex: 'Stack Overflow').

### Support to extra fields

With Lucide theme it is possible to add:

- `keywords` to each 'work', 'publication' and 'volunteer' item
- `summary` to each 'interests' and 'education' item
- `birth` to 'basics' (might be commonly used in Europe)

Example of the extra `birth` object:

```
"birth": {
  "place": "New York",
  "state": "USA",
  "date": "1988"
}
```
### Skills and Soft-Skills Separation

Skills and soft-skills are displayed separately for better clarity.

Example of the extra `Soft Skills` object:

```
{
  "keywords": [
    "Team Leadership",
    "Communication",
    "Problem Solving"
  ],
  "name": "Soft Skills"
}
```

## License

Available under the [MIT license](http://opensource.org/licenses/mit-license.php).
