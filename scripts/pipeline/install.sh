#!/bin/bash

# --------------------------------------------------------------------------------------------
# [Hicham Taha] install.sh
#				Initialize CodeBuild instance.
# --------------------------------------------------------------------------------------------

echo "entered install phase..."
apt-get update
apt-get install -y zip

# Install yarn
apt-get install -y yarn
