#!/bin/sh

API="https://tic-tac-toe-api-development.herokuapp.com/games"

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
