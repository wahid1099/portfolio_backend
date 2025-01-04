import { model, Schema } from "mongoose";
import { IAbout } from "./about.interfaces";

const aboutSchema = new Schema<IAbout>(
  {
    name: {
      type: String,
      default: "ABDUL WAHID",
    },
    bio: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: () => new Date().getFullYear() - 2000,
    },
    designation: {
      type: String,
      default: "Competitive Programmer && Software Engineer",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const About = model<IAbout>("About", aboutSchema);
export default About;
