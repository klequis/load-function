import { A, createAsync } from "@solidjs/router";
import { getUser } from "./[id].data";
import { createEffect, createResource, createSignal } from "solid-js";


export default function Users(props) {
  console.log('props',props)
  // const a = props.data.then((data) => console.log('data',data.result))
  const b = createAsync(() => props.data)
  createEffect(() => {  
    console.log('b',b())
  })
  return (
    <>
      <h1>User</h1>
    </>
  );
}

// export default async function Users(props) {
//   console.log('props',props)
//   const [user, setUser]  = createSignal()
//   const a = props.data.then((data) => console.log('data',data.result))
//   console.log('a',A)
//   const [data, { mutate, refetch }] = createResource()
//   // console.log('data.loading',data.loading)
//   // console.log('user',user())
//   return (
//     <>
//       <h1>User</h1>
//       <div>
//         <p>hi</p>
//         {/* <p>{data.loading}</p> */}
//         <pre>{JSON.stringify(user(), null, 2)}</pre>
//       </div>
//     </>
//   );
// }
