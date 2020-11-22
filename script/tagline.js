const taglines = [
  'has got some news for you', // <== max length
  'likes to create',
  'is online somewhere',
  'needs more sleep',
  'is running out of taglines'
];

let ind = Math.round(Math.random() * (taglines.length - 1));

$("#tagline").append(
  `${taglines[ind]}`
)
