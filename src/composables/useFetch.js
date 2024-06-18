export function useFetch({ url, method = 'GET', body = null }) {
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              throw new Error(err.message)
            })
          }
          return response.json()
        })
        .then((json) => {
          const userId = json.userId
          resolve(userId)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return { fetchData }
}
