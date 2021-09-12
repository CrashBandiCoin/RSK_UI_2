
// Array of available nodes to connect to
const nodes = [process.env.REACT_APP_NODE_RSK, process.env.REACT_APP_NODE_RSK_TEST, process.env.REACT_APP_NODE_BSC].toString()

const getNodeUrl = () => {
  const randomIndex = 0
  return nodes[randomIndex]
}

export default getNodeUrl
