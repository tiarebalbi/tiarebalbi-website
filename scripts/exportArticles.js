const path = require('path');
const fs = require('fs');
const Jimp = require('jimp');
const chalk = require('chalk');
const log = console.log;
const crypto = require('crypto');
const request = require('request');
const builder = require('xmlbuilder');

/**
 * Script to extract details of a markdown to prepare file to be used as the source of an article.
 *
 * Convention:
 * * Line 0 -> Ignored
 * * Line 1 -> Ignored
 * * Line 2 -> Title
 * * Line 3 -> Category
 * * Line 4 -> Image
 * * Line 5 -> Slogan
 * * Line 6 -> Ignored
 * * Line 7 -> Ignored
 * * Line 8 -> Ignored
 *
 * Features:
 * * Download of Images with compression and resizing
 * * Export resources to public folder for static hosted
 *
 * @author Tiarê Balbi Bonamini
 */

// Config
const pathPublicImages = `/images/d`;
const articlesFolder = '../src/resources/articles';
const imageBuildFolder = `../public${pathPublicImages}`;
const markdownBuildFolder = `../public/md`;
const outputFileName = `../public/articles.json`;
const sitemapLocation = `../public/sitemap.xml`;
const LINE_START = '- ';

const folder = path.join(__dirname, articlesFolder);
const imagesDir = path.join(__dirname, imageBuildFolder);
const markdownDir = path.join(__dirname, markdownBuildFolder);
const outputFile = path.join(__dirname, outputFileName);
const sitemapFile = path.join(__dirname, sitemapLocation);

const articles = [];

// Create pre-required folder
[imagesDir, markdownDir].forEach(folder => {
  if (!fs.existsSync(folder)) {
    console.log(`Creating folder ${folder}...`);
    fs.mkdirSync(folder);
  }
});

// Read Files
fs.readdir(folder, function(err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // Listing all files using forEach
  files.forEach(async function(file) {
    const slug = getSlug(file);
    const filePath = getFilePath(file);
    const content = await getContent(filePath);
    const image = await getImage(content, slug);
    const title = getTitle(content);
    const category = getCategory(content);
    const order = file.match(/\d+/)[0];
    const markdown = getMarkdown(content, slug);
    const slogan = getSlogan(content);

    log(chalk.bold('Processing file'), chalk.white.bgBlue(file));

    const definition = {
      slug,
      order,
      title,
      category,
      image,
      markdown,
      slogan,
    };

    articles.push(definition);

    log(chalk.bold('Total of Lines'), chalk.white.bgBlue(content.split('\n').length));
    log('Def:', definition);
    log(`------------`);
    // Create sitemap
    createSitemap(articles);

    fs.writeFileSync(
      outputFile,
      JSON.stringify({
        lastUpdate: new Date().toLocaleDateString(),
        articles: articles.sort((a, b) => (a.order < b.order ? 1 : -1)),
      }),
    );
  });


});

// Functions
function getSlug(file) {
  return file
    .replace('.md', '')
    .replace(/\d+/, '')
    .replace('_', '')
    .toLowerCase();
}

async function getContent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>".*")?\)/g;
  let m;

  while ((m = regex.exec(content)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    if (m.length > 1) {
      const url = m[1];
      const name = path.basename(url);
      const format = path.extname(url);
      const hash = crypto
        .createHash('md5')
        .update(name)
        .digest('hex');

      console.log(`Found match, group ${url} ${name} ${format}`);
      let newFilePath = `${imagesDir}/${hash}`.toLowerCase();
      let destinationName = `${pathPublicImages}/${hash}`.toLowerCase();

      if (format === '.gif') {
        newFilePath = `${newFilePath}.gif`;
        destinationName = `${destinationName}.gif`;
        await request(url).pipe(fs.createWriteStream(newFilePath));
      } else {
        downloadImage(url, newFilePath, name);
      }

      content = content.replace(url, destinationName);
    }
  }

  return content;
}

function getFilePath(file) {
  return path.join(__dirname, `${articlesFolder}/${file}`);
}

function getTitle(content) {
  return content.split('\n')[2].replace(LINE_START, '');
}

function getCategory(content) {
  return content.split('\n')[3].replace(LINE_START, '');
}

function getSlogan(content) {
  return content.split('\n')[5].replace(LINE_START, '');
}

async function getImage(content, slug) {
  const imageUrl = content.split('\n')[4].replace(LINE_START, '');
  const format = path.extname(imageUrl);

  const imageName = `${slug}-profile${format}`;
  const hash = crypto
    .createHash('md5')
    .update(imageName)
    .digest('hex');
  const newFilePath = `${imagesDir}/${hash}`.toLowerCase();

  // Run the module.
  downloadImage(imageUrl, newFilePath, imageName);

  return `${pathPublicImages}/${hash}`.toLowerCase();
}

function getMarkdown(content, slug) {
  const lines = content.split('\n');
  const newContent = content
    .replace(lines[0] + '\n', '')
    .replace(lines[1] + '\n', '')
    .replace(lines[2] + '\n', '')
    .replace(lines[3] + '\n', '')
    .replace(lines[4] + '\n', '')
    .replace(lines[5] + '\n', '')
    .replace(lines[6] + '\n', '')
    .replace(lines[7] + '\n', '')
    .replace(lines[8] + '\n', '');

  const fileName = `${slug}.md`;
  const mdName = `${markdownDir}/${fileName}`;
  fs.writeFileSync(mdName, newContent);

  return `/md/${fileName}`;
}

function downloadImage(imageUrl, newFilePath, imageName) {
  Jimp.read(imageUrl, (err, img) => {
    if (err) throw new Error(`File: ${imageUrl}: ${err.message}`);
    img
      .resize(1200, Jimp.AUTO) // resize
      .quality(60) // set JPEG quality
      .write(newFilePath); // save
  }).then(() => console.log('File completed', imageName));
}

function createSitemap(articles, domain = 'https://tiarebalbi.com') {
  const xml = builder
    .create('urlset', { version: '1.0', encoding: 'UTF-8', standalone: true })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    .att(
      'xsi:schemaLocation',
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
    );

  const staticMapping = [domain, `${domain}/articles`];

  staticMapping.forEach(url => {
    createElement(xml, url, 1);
  });

  articles.forEach(article => {
    createElement(xml, `${domain}/article/${article.slug}`, 0.5);
  });

  fs.writeFileSync(sitemapFile, xml.end({ pretty: true }));
}

function createElement(xml, url, priority = 1) {
  return xml
    .ele('url')
    .ele('loc', {}, url)
    .up()
    .ele('lastmod', {}, new Date().toISOString().substring(0, 10))
    .up()
    .ele('changefreq', {}, 'daily')
    .up()
    .ele('priority', {}, priority)
    .up()
    .up();
}
