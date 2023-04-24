import SearchComponent from '@/components/search'

export function Two({ time }) {
  return (
    <>
      <h1>two</h1>
      <p>{ time }</p>
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


export default Two
