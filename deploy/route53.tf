resource "aws_route53_zone" "johnscottwagner" {
  name = "johnscottwagner.com."
}

resource "aws_route53_zone" "scottwagnerio" {
  name = "scottwagner.io."
}

resource "aws_route53_record" "A" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "johnscottwagner.com.."
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.scottwagnerio.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.scottwagnerio.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "scottwagner_A" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "scottwagner.io."
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.scottwagnerio.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.scottwagnerio.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "WWW_A" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "www.johnscottwagner.com.."
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.scottwagnerio.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.scottwagnerio.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "scottwagner_WWW_A" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "www.scottwagner.io."
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.scottwagnerio.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.scottwagnerio.hosted_zone_id}"
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

resource "aws_route53_record" "scottwagner_MX" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "scottwagner.io."
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
    "ns-132.awsdns-16.com.",
  ]
}

resource "aws_route53_record" "scottwagner_NS" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "scottwagner.io."
  type    = "NS"
  ttl     = "172800"

  records = [
    "ns-1616.awsdns-10.co.uk.",
    "ns-663.awsdns-18.net.",
    "ns-1090.awsdns-08.org.",
    "ns-418.awsdns-52.com.",
  ]
}

resource "aws_route53_record" "SOA" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "johnscottwagner.com.."
  type    = "SOA"
  ttl     = "900"
  records = ["ns-132.awsdns-16.com. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
}

resource "aws_route53_record" "scottwagner_SOA" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "scottwagner.io."
  type    = "SOA"
  ttl     = "900"
  records = ["ns-1616.awsdns-10.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
}

resource "aws_route53_record" "TXT" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "_amazonses.johnscottwagner.com.."
  type    = "TXT"
  ttl     = "1800"
  records = ["PBOcz+SCuEILPX0VOyLZVSuwOLXJb3666bAr8C8dQdI="]
}

resource "aws_route53_record" "scottwagner_TXT_1" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "_amazonses.scottwagner.io."
  type    = "TXT"
  ttl     = "600"
  records = ["vVMd+r+ieOmsas+0F5C5Fltxd42w5xYASfuQfQIR35g="]
}

resource "aws_route53_record" "scottwagner_TXT_2" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "scottwagner.io."
  type    = "TXT"
  ttl     = "600"
  records = ["v=spf1 include:amazonses.com ~all"]
}

resource "aws_route53_record" "scottwagner_TXT_3" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "_dmarc.scottwagner.io."
  type    = "TXT"
  ttl     = "600"
  records = ["v=spf1 include:amazonses.com ~all"]
}

resource "aws_route53_record" "CNAME_1" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "ej7womf65yjp3wi7ouwlbyxfvmrbff5s._domainkey.johnscottwagner.com.."
  type    = "CNAME"
  ttl     = "1800"
  records = ["ej7womf65yjp3wi7ouwlbyxfvmrbff5s.dkim.amazonses.com"]
}

resource "aws_route53_record" "scottwagner_CNAME_1" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "oth2ruxldgy5xlsrgxhrxgtik3ixaxrh._domainkey.scottwagner.io."
  type    = "CNAME"
  ttl     = "600"
  records = ["oth2ruxldgy5xlsrgxhrxgtik3ixaxrh.dkim.amazonses.com."]
}

resource "aws_route53_record" "CNAME_2" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "ezk2g36kzgt5jocpq5vg4pi6qsqkrpe7._domainkey.johnscottwagner.com.."
  type    = "CNAME"
  ttl     = "1800"
  records = ["ezk2g36kzgt5jocpq5vg4pi6qsqkrpe7.dkim.amazonses.com"]
}

resource "aws_route53_record" "scottwagner_CNAME_2" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "pzg4zzly62bkz2xprexlu7kqwhczbctq._domainkey.scottwagner.io."
  type    = "CNAME"
  ttl     = "600"
  records = ["pzg4zzly62bkz2xprexlu7kqwhczbctq.dkim.amazonses.com."]
}

resource "aws_route53_record" "CNAME_3" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "ikdtj5ppp4m3ouicw2fnf3rgogkentun._domainkey.johnscottwagner.com.."
  type    = "CNAME"
  ttl     = "1800"
  records = ["ikdtj5ppp4m3ouicw2fnf3rgogkentun.dkim.amazonses.com"]
}

resource "aws_route53_record" "scottwagner_CNAME_3" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "rjhnrzk7kcfmkfkd3fjnzw7rh2qnpeyx._domainkey.scottwagner.io."
  type    = "CNAME"
  ttl     = "600"
  records = ["rjhnrzk7kcfmkfkd3fjnzw7rh2qnpeyx.dkim.amazonses.com."]
}

resource "aws_route53_record" "CNAME_4" {
  zone_id = "${aws_route53_zone.johnscottwagner.zone_id}"
  name    = "_e56be257af91c12f1e7adf5e0b020369.johnscottwagner.com.."
  type    = "CNAME"
  ttl     = "300"
  records = ["_3183f6f23eb494b572bd525ab22998ca.acm-validations.aws."]
}

resource "aws_route53_record" "scottwagner_CNAME_4" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "_0ffcb745d90a5e1f9365c0249d4b5c41.scottwagner.io."
  type    = "CNAME"
  ttl     = "300"
  records = ["_05a8651fa5aa3edf24a78705f64ff726.olprtlswtu.acm-validations.aws."]
}

resource "aws_route53_record" "scottwagner_CNAME_5" {
  zone_id = "${aws_route53_zone.scottwagnerio.zone_id}"
  name    = "autodiscover.scottwagner.io."
  type    = "CNAME"
  ttl     = "600"
  records = ["autodiscover.mail.us-east-1.awsapps.com."]
}
