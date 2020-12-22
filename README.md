![WebsiteLogo](https://user-images.githubusercontent.com/45587386/77818965-02f7eb80-713c-11ea-994a-7600c1a31a32.png 'matteas.nz')

My personal website. Designed by me, implemented by me and about me - for everyone to see.

### Development

I decided to learn React; so I made a website. There was a lot of blood, sweat and error logs, but in the end it all came together to be what you see today. Combining Material UI and Sass, I was able to create a fluid, scalable and responsive website that looks great on every device.

### Deployment

For automating the deployment of the website to GitHub pages, I created a workflow with GitHub actions that utilises _[Deploy To GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages)_. Anytime there's an update to the `development` branch, the changes are reflected in the build on `master` and deployed instantly.

### Design

Originally, I designed my website in Paint.NET. That design can be found on the
`frosted-design` branch. There were a lot of issues with that design, so I've
moved to a new layout. I owe this new design to the great templates created by
[Dorota Gil](https://github.com/Dorota1997) and [Shlok Somani](https://github.com/shloksomani). Although I combined and modified their work, I urge you to go check out their original templates [here](https://github.com/Dorota1997/react-frontend-dev-portfolio) and [here](https://github.com/shloksomani/react-portfolio).

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
