import SearchComponent from '@/components/search'

export function One({ time }) {
  return (
    <>
      <h1>one</h1>
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


export default One
