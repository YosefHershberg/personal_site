import { Html, useProgress } from "@react-three/drei"
import LoadingSpinner from "./LoadingSpinner"

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-load relative">
        <div className="flex flex-col justify-center items-center gap-4 w-16 absolute transform top-[10rem] -translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner />
          <p
            style={{
              fontSize: 14,
              color: '#f1f1f1',
              fontWeight: 500,
            }}
          >
            {progress.toFixed(2)} %
          </p>
        </div>
      </span>
    </Html>
  )
}

export default Loader