const faker = require('faker');
const db = require('./index.js');
// generate fake data;
// eslint-disable-next-line prefer-const
let room = {
  title: faker.name.title(),
  city: faker.address.city(),
  room: {
    houseType: {
      guestNum: faker.random.number(),
      bedroomNum: faker.random.number(),
      bedNum: faker.random.number(),
      bathNum: faker.random.number(),
    },
    greatLocation: faker.lorem.sentence(),
    superhost: faker.lorem.sentence(),
    sparkling: faker.lorem.sentence(),
  },
  rmDescription: faker.lorem.paragraphs(),
  space: faker.lorem.paragraph(),
  access: faker.lorem.paragraph(),
  interact: faker.lorem.paragraph(),
  amenities: {
    basic: {
      wifi: faker.lorem.words(),
      laptop: faker.lorem.words(),
      dryer: faker.lorem.words(),
      washer: faker.lorem.words(),
      tv: faker.lorem.word(),
      airCondition: faker.lorem.word(),
      essential: faker.lorem.sentence(),
    },
    facilities: {
      parking: faker.lorem.words(),
      stairs: faker.lorem.words(),
    },
    dining: {
      kitchen: faker.lorem.sentence(),
      coffee: faker.lorem.words(),
      cooking: faker.lorem.words(),
      microwave: faker.lorem.words(),
    },
    bedbath: [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words()],
    safety: [faker.lorem.words(), faker.lorem.words(), faker.lorem.words()],
    notInclude: [faker.lorem.words(), faker.lorem.words()],
  },
  neighbor: {
    features: faker.lorem.paragraph(),
    getAround: faker.lorem.paragraph(),
  },
  polices: {
    rules: faker.lorem.paragraph(),
    acknowledge: faker.lorem.paragraph(),
    cancel: {
      moderate: faker.lorem.words(),
      policy: faker.lorem.paragraph(),
      imgUrl: 'https://s3-us-west-1.amazonaws.com/imageurl/cancelPic.png',
    },
  },
};


// eslint-disable-next-line prefer-const
for (let i = 0; i < 100; i += 1) {
  let newRoom = new db.Room({
    listingId: i,
    room: JSON.stringify(room),
  });
  db.store(null, newRoom);
}
