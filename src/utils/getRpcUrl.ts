import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = [process.env.REACT_APP_NODE_BSC, process.env.REACT_APP_NODE_RSK, process.env.REACT_APP_RSK_TEST]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
