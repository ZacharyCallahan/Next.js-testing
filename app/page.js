import Search from "./components/Search";
import axios from "axios";
export default async function Home({ searchParams }) {
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page) || 1;
  const limit = 10;

  const result = await axios
    .get(`http://localhost:3000/api/hello/${search}`)
    .then((res) => {
      return res
    }
    )
    .catch((err) => console.log(err));


  const { data } = result;
  const total = data.length;

  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return (
    <main className="">

      <div className="w-1/12 m-auto mt-24 space-y-5">
        <Search />

        {
          data.length > 0 ? (
            <div className="space-y-5">
              {data.map((item) => (
                <div key={item._id}>
                  <div className="">
                    <h1 className="">Name: {item.name}</h1>
                    <p className="">Age: {item.age}</p>
                  </div>
                </div>
              ))
                .slice((page - 1) * limit, page * limit)
              }
            </div>
          ) : (
            <h1> No results found for {search} </h1>
          )
        }
        {
          hasNextPage ? (
            <div>
              <a className="text-red-600" href={`/?search=${search}&page=${page + 1}`}>Next Page</a>
            </div>
          ) : hasPreviousPage && (
            <div>
                <a className="text-red-600" href={`/?search=${search}&page=${page - 1}`}>Prev</a>
            </div>
          )
        }
      </div>

    </main>
  )
}
