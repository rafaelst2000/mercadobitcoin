import { ref } from 'vue'

export function useFetch({ url, method = 'GET', body = null }) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error()
      }

      const json = await response.json()
      data.value = json
    } catch (err) {
      error.value = err
    }
  }
  fetchData()
  return { data, error }
}
