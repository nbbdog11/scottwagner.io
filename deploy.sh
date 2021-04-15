aws s3 rm s3://scottwagner.io --recursive
aws cloudfront create-invalidation --distribution-id E1Z1DCSMC5LN0O --paths "/*"
pushd deploy/
terraform apply -auto-approve
popd
aws s3 cp out/ s3://scottwagner.io --recursive