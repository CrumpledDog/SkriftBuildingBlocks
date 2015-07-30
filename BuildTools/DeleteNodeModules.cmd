cd ../BuildingBlocks.Site
mkdir temp
robocopy temp node_modules /MIR
rd temp
rd node_modules