![WebsiteLogo](https://user-images.githubusercontent.com/45587386/77818965-02f7eb80-713c-11ea-994a-7600c1a31a32.png "matteas.nz")

My personal website. Designed by me, implemented by me and about me - for everyone to see.

### Development

I decided to learn React; so I made a website. There was a lot of blood, sweat and error logs, but in the end it all came together to be what you see today. Combining Material UI and Sass, I was able to create a fluid, scalable and responsive website that looks great on every device.

### Deployment

For automating the deployment of the website to GitHub pages, I created a workflow with GitHub actions that utilises *[Deploy To GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages)*. Anytime there's an update to the `development` branch, the changes are reflected in the build on `master` and deployed instantly.

### Design

There are a lot of website designs out there, but I wanted mine to feel unique - so I designed it from scratch, in Paint.NET. I felt it important to ensure that my website scaled with window size, so that it didn't matter whether it was being viewed in 720p or 4k - it would always look exactly the way I wanted it to.

### Usage

This website uses `yarn` to manage dependencies. After cloning the repository
from GitHub, you need to install the dependencies listed in the `package.json`.
Once that is complete, you can simply run the site and access it on
`localhost:3000`.

```
git clone https://github.com/Matteas-Eden/matteas-eden.github.io
cd matteas-eden.github.io
yarn install
yarn start
```

Alternatively, just access the website where it's hosted; [matteas.nz](https://matteas.nz).
