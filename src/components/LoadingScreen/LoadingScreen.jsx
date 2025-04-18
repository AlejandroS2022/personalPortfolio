function LoadingScreen() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 flex items-center justify-center z-50">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    </>
  )
}

export default LoadingScreen
