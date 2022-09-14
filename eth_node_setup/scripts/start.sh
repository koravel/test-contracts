./build/bin/geth --datadir=./assets/chains/client \
--port=10304 \
--networkid=123 \
--http.api="admin,personal,eth,debug,net,web3" --http --http.addr="0.0.0.0" --http.port 9000 \
--miner.gastarget=1000000000 --miner.gasprice=5 --mine --miner.threads=1 \
--nodiscover --syncmode=full --gcmode "archive" --allow-insecure-unlock console