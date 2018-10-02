resource "aws_cloudfront_distribution" "johnscottwagner" {
    origin {
        domain_name = "${aws_s3_bucket.site_bucket.website_endpoint}"
        origin_id = "S3-Website-${aws_s3_bucket.site_bucket.website_endpoint}"
        custom_origin_config {
            http_port = "80"
            https_port = "443"
            origin_keepalive_timeout = "5"
            origin_protocol_policy = "http-only"
            origin_ssl_protocols = [
                "TLSv1",
                "TLSv1.1",
                "TLSv1.2",
            ]
        }
    }

    enabled             = true
    is_ipv6_enabled     = true
    default_root_object = "index.html"

    aliases = ["johnscottwagner.com", "www.johnscottwagner.com"]

    default_cache_behavior {
        allowed_methods  = ["GET", "HEAD"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "S3-Website-${aws_s3_bucket.site_bucket.website_endpoint}"

        forwarded_values {
        query_string = false

            cookies {
                forward = "none"
            }
        }

        viewer_protocol_policy = "redirect-to-https"
        min_ttl                = 0
        default_ttl            = 86400
        max_ttl                = 31536000
    }

    price_class = "PriceClass_All"

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        cloudfront_default_certificate = false
        minimum_protocol_version = "TLSv1.1_2016"
        ssl_support_method = "sni-only"
        acm_certificate_arn = "arn:aws:acm:us-east-1:860597055125:certificate/d6e64cc5-a1f9-4e20-b33d-fe8a79c59ffe"
    }
}