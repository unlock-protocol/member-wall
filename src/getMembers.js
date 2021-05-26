import fetch from "node-fetch"
import query from "./locksMembersQuery"

/**
 * Returns all of the keys for a given lock
 */
export const getMembers = async (locks, network) => {
  let graphUrl = "https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock"
  if (network === 4) {
    graphUrl = "https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock-rinkeby"
  } else if (network === 100) {
    graphUrl = "https://api.thegraph.com/subgraphs/name/unlock-protocol/xdai"
  }
  const response = await fetch(
    graphUrl,
    {
      method: "POST",
      body: JSON.stringify({ query: query(locks) })
    }
  ).then(res => res.json())

  return response.data.locks
    .map(lock => {
      return lock.keys.map(key => {
        return {
          ...key,
          owner: key.owner.address,
          lockAddress: lock.address,
          lockName: lock.name
        }
      })
    })
    .reduce((a, v) => {
      return [...v, ...a]
    }, [])
}

export default getMembers
