# env /usr/bash

# using a simple infinite loops to 
# run the test every 30 seconds.
for ((;;))
do
  npm run wdio-test
  # sleep for 30 seconds
  sleep 30
done
