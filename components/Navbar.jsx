import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="flex justify-between item-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>Coding.</Link>
      <Link className="bg-white p-2"  href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}
