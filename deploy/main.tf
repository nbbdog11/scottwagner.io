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
  config {
    bucket = "jsw-state-bucket"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_s3_bucket" "state_bucket" {
  bucket = "jsw-state-bucket"
  policy = <<EOF
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
  EOF

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket" "log_bucket" {
  bucket = "jsw-log-bucket"
  acl    = "log-delivery-write"
}

resource "aws_s3_bucket" "email_bucket" {
  bucket = "jsw-email-bucket"
  policy = <<EOF
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowSESPuts-1520045511322",
            "Effect": "Allow",
            "Principal": {
                "Service": "ses.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::jsw-email-bucket/*",
            "Condition": {
                "StringEquals": {
                    "aws:Referer": "860597055125"
                }
            }
        }
    ]
  }
  EOF
}

resource "aws_s3_bucket" "site_bucket" {
  bucket = "johnscottwagner.com"
  acl    = "public-read"
  policy = <<EOF
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::johnscottwagner.com/*"
        }
    ]
  }
  EOF

  website {
    index_document = "index.html"
  }

  logging {
    target_bucket = "${aws_s3_bucket.log_bucket.id}"
    target_prefix = "log/"
  }

  provisioner "local-exec" {
    when    = "destroy"
    command = "aws s3 rm s3://johnscottwagner.com --recursive"
  }

  provisioner "local-exec" {
    command = "aws s3 cp public/ s3://johnscottwagner.com --recursive"
  }
}

resource "aws_s3_bucket" "www_site_bucket" {
  bucket = "www.johnscottwagner.com"
  acl    = "public-read"
  policy = <<EOF
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::www.johnscottwagner.com/*"
        }
    ]
  }
  EOF

  website {
    redirect_all_requests_to = "${aws_s3_bucket.site_bucket.id}"
  }

  logging {
    target_bucket = "${aws_s3_bucket.log_bucket.id}"
    target_prefix = "log/"
  }
}
