aws s3 rm s3://johnscottwagner.com --recursive
aws cloudfront create-invalidation --distribution-id E8BNTDZLV8Z2T --paths "/*"
terraform apply -auto-approve deploy/
aws s3 cp public/ s3://johnscottwagner.com --recursive