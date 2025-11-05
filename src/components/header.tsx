import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Separator } from "./ui/separator"


export const Header=()=>{
    return(
      <div>
        <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    FakeStore
                  </span>
                </div>
        
                <nav>
                  <ul className="flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
                    <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    <Link href={"/"}>Home</Link>  
                    </li>
                    <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    <Link href={"/produtos"}>Produtos</Link>  
                    </li>
                    <ModeToggle />
                  </ul>
                </nav>
              </header>
              <Separator/>
      </div>        
    )
}