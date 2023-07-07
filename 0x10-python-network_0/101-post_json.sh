#!/bin/bash
# Bash script that sends a JSON POST request to a URL passed as the first argument, and displays the body of the response
curl -d "$(cat "$2")" -H "Content-Type: application/json" -sX POST "$1"
