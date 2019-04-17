#!/bin/bash

if [ -z "$1" ]
  then
    echo "No argument supplied"
	exit
fi
find . -name "*$1*.md" -exec vim  {} \;
#echo "find . -name '*$1*.md'" 
