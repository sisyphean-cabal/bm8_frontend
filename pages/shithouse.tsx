// https://api.shithouse.tv/

import { useQuery } from 'react-query'
import axios from 'axios'

export async function getStaticProps() {
  const { data: bumps } = await getShithouse()
  return { props: { bumps } }
}

async function getShithouse() {
  return axios.get('https://api.shithouse.tv')
}

export default function Shithouse(props: { bumps: [] }) {
  const { data } = useQuery('getBumps', getShithouse, {
    initialData: props.bumps,
  })

  return <pre>{JSON.stringify(props, undefined, 2)}</pre>
}
