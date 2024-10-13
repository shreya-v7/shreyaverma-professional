// blog.ts (or wherever you want to define your types)
export interface Blog {
  title: string;            // Title of the blog post
  description: string;      // Short description of the blog post
  date: string;             // Date of the blog post in ISO string format
  author: string;           // Author of the blog post
  tags: string[];           // Array of tags associated with the blog post
  url: string;              // URL where the blog post can be accessed
}

  export const blogs: Blog[] = [
    {
      title: "Extended Reality",
      date: "2020-12-09",
      description: "Convincing Tomorrow's Imagination, a history of tomorrow.",
      url: "https://medium.com/ieee-women-in-engineering-vit/extended-reality-319554e95071",
      author: "Shreya Verma",
      tags: ["AR", "VR", "MR"]
    }
  ];
