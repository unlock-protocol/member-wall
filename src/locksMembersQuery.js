/**
 * Query to get members
 * TODO: handle pagination
 * TODO: handle sorting
 * @param {*} locks
 */
export const locksMemberQuery = locks => `{
    locks(where: {
      address_in: ${JSON.stringify(locks)}
    }) {
     keys(first: 1000) {
      owner {
        address
      }
      keyId
      expiration
    }
    name
    address
  }
}`

export default locksMemberQuery
