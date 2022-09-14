rm -rf ./assets/chains/*
./build/bin/geth --datadir=./assets/chains/client  --syncmode="full" --gcmode="archive" init ./assets/genesis.json