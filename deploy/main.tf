provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "jsw-state-bucket"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}

data "terraform_remote_state" "network" {
  backend = "s3"

  config = {
    bucket = "jsw-state-bucket"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_s3_bucket" "state_bucket" {
  bucket = "jsw-state-bucket"

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_policy" "state_bucket_policy" {
  bucket = "${aws_s3_bucket.state_bucket.id}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::jsw-state-bucket"
    },
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::jsw-state-bucket/state"
    }
  ]
}
  POLICY
}

resource "aws_s3_bucket" "site_bucket" {
  bucket = "scottwagner.io"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }

  provisioner "local-exec" {
    when    = "destroy"
    command = "aws s3 rm s3://johnscottwagner.com --recursive"
  }
}

resource "aws_s3_bucket_policy" "site_bucket_policy" {
  bucket = "${aws_s3_bucket.site_bucket.id}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadForGetBucketObjects",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::scottwagner.io/*"
      }
  ]
}
  POLICY
}

resource "aws_s3_bucket" "www_site_bucket" {
  bucket = "www.scottwagner.io"
  acl    = "public-read"

  website {
    redirect_all_requests_to = "${aws_s3_bucket.site_bucket.id}"
  }
}

resource "aws_s3_bucket_policy" "www_site_bucket_policy" {
  bucket = "${aws_s3_bucket.www_site_bucket.id}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadForGetBucketObjects",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::www.scottwagner.io/*"
      }
  ]
}
  POLICY
}
