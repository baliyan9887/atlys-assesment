import ava1 from "../assets/ava1.png";
import ava2 from "../assets/ava2.png";

type DataItem = {
  name: string;
  time: string;
  content: string;
  emoji: string;
  commentsCount: number;
  image?: string;
};

export const data: DataItem[] = [
  {
    name: "Theresa Webb",
    time: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emoji: "👋",
    commentsCount: 24,
    image: ava1,
  },
  {
    name: "Cameron Williamson",
    time: "10mins ago",
    content:
      "Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Facilisis sed odio morbi quis commodo odio aenean sed.",
    emoji: "👍",
    commentsCount: 12,
    image: ava2,
  },
  {
    name: "Leslie Alexander",
    time: "15mins ago",
    content:
      "Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu facilisis sed odio morbi quis commodo odio.",
    emoji: "😊",
    commentsCount: 18,
  },
  {
    name: "Guy Hawkins",
    time: "20mins ago",
    content:
      "Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur.",
    emoji: "😎",
    commentsCount: 30,
  },
  {
    name: "Kathryn Murphy",
    time: "25mins ago",
    content:
      "Arcu felis bibendum ut tristique et egestas quis. Tincidunt arcu non sodales neque sodales ut etiam.",
    emoji: "👏",
    commentsCount: 20,
  },
];
