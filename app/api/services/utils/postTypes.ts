export type PostData = {
  title: string;
  description: string;
  image: [
    {
      original: string;
      thumbnail: string;
    }
  ];
};
