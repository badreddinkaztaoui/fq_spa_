#!/bin/bash
if curl -f http://localhost/health; then
    exit 0
fi
exit 1