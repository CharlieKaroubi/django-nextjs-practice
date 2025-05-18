// pages/index.js
import Link from "next/link";
import Navbar from "./components/Navbar";

const posts = [
  {
    title: "Understanding Convlutions on Graphs",
    author: "Ameya Daigavane, Balaraman Ravindran, Gaurav Aggarwal",
    description: "Undestanding the building blocks and design choices of graph neural networks.",
    date: "Sept. 2, 2021",
    slug: "convolutions-on-graphs",
    peer_reviewed: true
  },
  {
    title: "A Gentle Introduction to Graph Neural Networks",
    author: "Benjamin Sanchez-Lengeling, Emily Reif, Adam Pearce, and Alexander B. Wiltschko",
    description: "What components are needed for building learning algorithms that leverage stucture and properties of graphs?",
    date: "Sept. 2, 2021",
    slug: "gentle-introduction-to-gnns",
    peer_reviewed: true
  }
];

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="max-w-4xl mx-auto px-4 py-12">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <div className = "flex items-start">
            <div>
              <p className="text-sm text-gray-500 justify-start mt-5 whitespace-nowrap">{post.date}</p>
              <p className="text-sm text-gray-500 justify-start mt-2 whitespace-nowrap">{post.peer_reviewed ? "Peer Reviewed" : "Not Peer Reviewed"}</p>
            </div>
            <div className="mb-8 p-4 rounded transition">
              <h2 className="text-2xl text-black font-semibold">{post.title}</h2>
              <p className="text-gray-400">{post.author}</p>
              <p className="text-black">{post.description}</p>
            </div>
          </div>
          <hr></hr>
        </Link>
      ))}
    </main>
    </>
  );
}
