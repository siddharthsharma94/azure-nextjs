// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  res.json(response);
};
