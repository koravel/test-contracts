module.exports = {
    compilers: {
      solc: {
        version: "0.8.16"
      }
    },
    migrations_directory: "./migrations",
    networks: {
        local: {
            host: "localhost",
            port: 9000,
            network_id: "123",
            gasPrice: 5,
            from: "0xf20803aa557c3e65dab6344e15def4675ec21386",
            gas: 1000000000,
        }
    }
};
