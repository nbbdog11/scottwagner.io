provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "site_bucket" {
  bucket = "johnscottwagner.com"
  acl    = "public-read"
  policy = "${file("bucket-policy.json")}"

  website {
    index_document = "index.html"
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
}
