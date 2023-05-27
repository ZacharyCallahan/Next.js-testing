'use client'
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

const Search = () => {
    const { replace } = useRouter()
    const pathname = usePathname()

    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const params = new URLSearchParams(window.location.search)
        if (e) {
            params.set("search", e.target.value)

        } else {
            params.delete("search")
        }
        params.delete("page")

        startTransition(() => {
            replace(`${pathname}?${params.toString()}`)
        })
    }
    return (
        <>
            <input className=" ring-black ring-2" type="text" placeholder="search" onChange={handleSearch} />
            {isPending && <div className="text-green-500">Searching... May take a second!</div>}
        </>
    );
}

export default Search;