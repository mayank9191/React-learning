// import { useEffect, useState } from "react"

// function useCurrencyInfo(currency) {

//   const [data, setData] = useState({})
//   useEffect(() => {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]))
//       .catch((error) => error)
//   }, [currency])

//   return data
// }

// export default useCurrencyInfo

async function currencyDetails(from, to, fromAmmount) {

  const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)

  const data = await res.json()

  const price = data[from][to]

  console.log(Math.round(Number(price) * fromAmmount), to)
}




currencyDetails('krw', 'inr', 10000000)