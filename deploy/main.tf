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
  policy = "${file("state-bucket-policy.json")}"

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
  policy = "${file("email-bucket-policy.json")}"
}

resource "aws_s3_bucket" "site_bucket" {
  bucket = "johnscottwagner.com"
  acl    = "public-read"
  policy = "${file("bucket-policy.json")}"

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
  policy = "${file("www-bucket-policy.json")}"

  website {
    redirect_all_requests_to = "${aws_s3_bucket.site_bucket.id}"
  }

  logging {
    target_bucket = "${aws_s3_bucket.log_bucket.id}"
    target_prefix = "log/"
  }
}
