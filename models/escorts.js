const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escorts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    agency: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shortDesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    availability: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    incalls: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    outcalls: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    height: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eyes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    hair: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    stats: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dressSize: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sexualPreference: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    languages: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    occupation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hobbies: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    advertisedPrice: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oneHourIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oneAndAHalfHourIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    twoHourIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    additionalHourIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dinnerIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    overnightIn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oneHourOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oneAndAHalfHourOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    twoHourOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    additionalHourOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dinnerOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    overnightOut: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    serviceInfo: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    escort: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    profpic: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    featured: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    monday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tuesday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    wednesday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    thursday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    friday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    saturday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    sunday: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    chest: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cup: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    waist: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    hips: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    language1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    language2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    language3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    agencyname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    greek: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bdsm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cim: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cob: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    couples: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    deepthroat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    domination: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    facesitting: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fingering: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fisting: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    footfetish: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    frenchkissing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gfe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    givinghardsports: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    receivinghardsports: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lapdancing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    massage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oralsex: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    owo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pse: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    parties: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    reverseoral: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    givingrimming: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    receivingrimming: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    roleplay: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sextoys: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    spanking: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    strapon: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    striptease: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    teabagging: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tieandtease: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    uniforms: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    givingwatersports: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    receivingwatersports: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    webcamsex: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    twitterid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    userRole: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ad1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otherpricing: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    ad2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tempdir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enabled: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'escorts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
