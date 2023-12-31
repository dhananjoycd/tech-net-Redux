
import { decrement, increment, incrementByAmout } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const {count} = useAppSelector((state)=>state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
       <h1 className="bg-red-500 text-white text-center text-lg m-2"> TS with Redux</h1>
     <div className="grid grid-rows-4 gap-2">
    
      <div className="bg-blue-500 p-4 text-center m-2">

        <button className="text-white border border-white-400 p-2 rounded m-2" onClick={()=>dispatch(increment())}> Increament</button>

        <button className="text-white border border-white-400 p-2 rounded m-2" onClick={()=>dispatch(incrementByAmout(3))}> Increament by 3</button>

        <span className="p-3 bg-white border border-red-400 rounded-lg text-red-500 font-bold text-lg">{count}</span>

          <button className="text-white border border-white-400 p-2 rounded m-2" onClick={()=>dispatch(decrement())}> Decrement</button>
      </div>
     </div>

    </>
  )
}

export default App
