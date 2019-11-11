import fetch from "node-fetch"
import query from "./locksMembersQuery"

/**
 * Returns all of the keys for a given lock
 */
export const getMembers = async locks => {
  const response = await fetch(
    "https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock",
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
