export default function Header(){
  return (
    <header>
      <div className="p-4 font-bold text-2xl flex bg-green-300 rounded-md">
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">ECommerce</button>
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">Products</button>
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">About</button>
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">Help</button>
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">Sign Up</button>
        <button className="mr-4 hover:focus hover:bg-green-300 hover:text-green-400">Log In</button>
      </div>
    </header>
  )
}