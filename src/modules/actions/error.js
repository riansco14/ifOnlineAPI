export default (reply) => (err) => reply(Object.assign({type: 'error'}, err))