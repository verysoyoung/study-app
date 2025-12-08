export default async function MyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <div>MyPage {id}</div>
}
