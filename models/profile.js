const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema(
  {
    profileName: {
      type: String
    },
    bioBody: {
      type: String
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// create the Pizza model using the PizzaSchema
const Profile = model('Profile', ProfileSchema);

// export the Pizza model
module.exports = Profile;