export default async function Home() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("App is loaded"), 2000),
  );

  return <div>{data as string}</div>;
}
