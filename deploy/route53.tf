resource "aws_route53_zone" "johnscottwagner" {
    name = "johnscottwagner.com."
}

resource "aws_route53_record" "A" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "johnscottwagner.com.."
    type    = "A"

    alias {
        name = "${aws_cloudfront_distribution.johnscottwagner.domain_name}"
        zone_id = "${aws_cloudfront_distribution.johnscottwagner.hosted_zone_id}"
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "WWW_A" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "www.johnscottwagner.com.."
    type    = "A"

    alias {
        name = "${aws_cloudfront_distribution.johnscottwagner.domain_name}"
        zone_id = "${aws_cloudfront_distribution.johnscottwagner.hosted_zone_id}"
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "MX" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "johnscottwagner.com.."
    type    = "MX"
    ttl     = "1800"
    records = ["10 inbound-smtp.us-east-1.amazonaws.com"]
}

resource "aws_route53_record" "NS" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "johnscottwagner.com.."
    type    = "NS"
    ttl     = "172800"
    records = [
        "ns-1904.awsdns-46.co.uk.",
        "ns-599.awsdns-10.net.",
        "ns-1250.awsdns-28.org.",
        "ns-132.awsdns-16.com."
    ]
}

resource "aws_route53_record" "SOA" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "johnscottwagner.com.."
    type    = "SOA"
    ttl     = "900"
    records = ["ns-132.awsdns-16.com. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
}

resource "aws_route53_record" "TXT" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "_amazonses.johnscottwagner.com.."
    type    = "TXT"
    ttl     = "1800"
    records = ["${aws_ses_domain_identity.johnscottwagner.verification_token}"]
}

resource "aws_route53_record" "CNAME_1" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "ej7womf65yjp3wi7ouwlbyxfvmrbff5s._domainkey.johnscottwagner.com.."
    type    = "CNAME"
    ttl     = "1800"
    records = ["ej7womf65yjp3wi7ouwlbyxfvmrbff5s.dkim.amazonses.com"]
}

resource "aws_route53_record" "CNAME_2" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "ezk2g36kzgt5jocpq5vg4pi6qsqkrpe7._domainkey.johnscottwagner.com.."
    type    = "CNAME"
    ttl     = "1800"
    records = ["ezk2g36kzgt5jocpq5vg4pi6qsqkrpe7.dkim.amazonses.com"]
}

resource "aws_route53_record" "CNAME_3" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "ikdtj5ppp4m3ouicw2fnf3rgogkentun._domainkey.johnscottwagner.com.."
    type    = "CNAME"
    ttl     = "1800"
    records = ["ikdtj5ppp4m3ouicw2fnf3rgogkentun.dkim.amazonses.com"]
}

resource "aws_route53_record" "CNAME_4" {
    zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
    name    = "_e56be257af91c12f1e7adf5e0b020369.johnscottwagner.com.."
    type    = "CNAME"
    ttl     = "300"
    records = ["_3183f6f23eb494b572bd525ab22998ca.acm-validations.aws."]
}