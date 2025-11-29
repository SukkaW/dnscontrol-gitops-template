// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar('none');
// DNS Providers
var DSP_CLOUDFLARE = NewDnsProvider('cloudflare');

D(
  'example.com', REG_NONE,
  DnsProvider(DSP_CLOUDFLARE),
  CF_PROXY_DEFAULT_ON, // This is a Cloudflare special flag to enable proxy by default
  DefaultTTL(1), // 1 is a Cloudflare magic value means "auto ttl"

  A('@', '114.5.1.4'),
  CNAME('www', 'cname-example.example.com.', TTL(300), CF_PROXY_OFF),
);
