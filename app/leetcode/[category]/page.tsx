export default async function Problem({ params }: any) {
  const { category } = await params;
  return <h1>{category}</h1>;
}
