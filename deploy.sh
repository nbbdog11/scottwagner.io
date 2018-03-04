aws s3 rm s3://johnscottwagner.com --recursive
terraform apply -auto-approve deploy/
aws s3 cp public/ s3://johnscottwagner.com --recursive