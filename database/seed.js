const faker = require('faker');
const db = require('index.js');
const Videos = require('./Videos.js');

const sampleVideos = [];

for(let i = 0; i <= 100; i++) {
    const images = [];
    let paragraph = '';
    for(let j = 0; j < 10; j++) {
        const videoId = (Math.floor(Math.random() * 66) + 1).toString();
        images.push({image: `https://feccarouselimages.s3-us-west-1.amazonaws.com/images/videoImages${videoId}.jpeg`})
    }
    for(let k = 0; k < 20; k++) {
        paragraph += `${faker.hacker.noun()}`;
    }
    sampleVideos.push({
        id: i, name: faker.name.findName(), description: paragraph, photos: images
    });
}

const insertSampleVideos = ()  => {
    Videos.create(sampleVideos)
        .then(() => {
            console.log('Data has been seeded');
            db.close();
        });
};

insertSampleVideos();