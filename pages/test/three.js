import SearchComponent from '@/components/search'

export function Three({ time }) {
  return (
    <>
      <h1>Three</h1>
      <p>{time}</p>
      <SearchComponent />
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toString(),
    }
  }
}


export default Three
