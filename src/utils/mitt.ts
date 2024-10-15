import mitt from 'mitt'

interface Events {
  name: string
  data?: any
}

const emitBus = mitt() // inferred as Emitter<Events>

export default emitBus
