const path = require('path');
const fs = require('fs');
const Jimp = require('jimp');
const chalk = require('chalk');
const log = console.log;

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
const LINE_START = '- ';

const folder = path.join(__dirname, articlesFolder);
const imagesDir = path.join(__dirname, imageBuildFolder);
const markdownDir = path.join(__dirname, markdownBuildFolder);
const outputFile = path.join(__dirname, outputFileName);

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

  //listing all files using forEach
  files.forEach(async function(file) {
    const slug = getSlug(file);
    const filePath = getFilePath(file);
    const content = getContent(filePath);
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
    .replace('_', '');
}

function getContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
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
  const newFilePath = `${imagesDir}/${imageName}`;

  // Run the module.
  Jimp.read(imageUrl, (err, img) => {
    if (err) throw err;
    img
      .resize(1200, Jimp.AUTO) // resize
      .quality(60) // set JPEG quality
      .write(newFilePath); // save
  }).then(() => console.log('File completed', imageName));

  return `${pathPublicImages}/${imageName}`;
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
